let map;
let pointALayer;
let pointBLayer;
let manualLineLayer;
let destinationLineLayer;
let destinationMarkerLayer;
let destinationPoint = null;
let destinationMode = false;
let centerMenuTimer;
let elevationTimer;
let elevationRequestId = 0;

const DEFAULT_CENTER = [13.5800, 44.0200];

function initMapEngine() {
    const satelliteLayer = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 19, attribution: 'Esri World Imagery' }
    );
    const topoLayer = L.tileLayer(
        'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        { maxZoom: 17, attribution: 'OpenTopoMap' }
    );
    const osmLayer = L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { maxZoom: 19, attribution: 'OpenStreetMap' }
    );

    map = L.map('map', {
        center: DEFAULT_CENTER,
        zoom: 14,
        layers: [satelliteLayer],
        zoomControl: true
    });

    L.control.layers({
        'قمر صناعي': satelliteLayer,
        'طبوغرافية': topoLayer,
        'شوارع': osmLayer
    }).addTo(map);

    map.on('move', () => {
        updateCenterReadout();
        if (destinationMode) {
            updateDestinationPreview();
        }
    });

    map.on('moveend', () => {
        if (destinationMode) updateDestinationPreview();
    });

    bindMapControls();
    updateCenterReadout();
    initInterfaceControls();
}

function initInterfaceControls() {
    const menuButton = document.getElementById('equipmentMenuButton');
    const menu = document.getElementById('equipmentMenu');
    if (menuButton && menu && !menuButton.dataset.bound) {
        menuButton.dataset.bound = 'true';
        menuButton.addEventListener('click', (event) => {
            event.stopPropagation();
            menu.hidden = !menu.hidden;
            menuButton.setAttribute('aria-expanded', String(!menu.hidden));
        });
        document.addEventListener('click', (event) => {
            if (!menu.contains(event.target) && event.target !== menuButton) {
                menu.hidden = true;
                menuButton.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

function bindMapControls() {
    const centerButton = document.getElementById('mapCenterControl');
    const centerMenu = document.getElementById('mapCenterMenu');
    if (!centerButton || !centerMenu || centerButton.dataset.bound) return;

    centerButton.dataset.bound = 'true';
    centerButton.addEventListener('click', (event) => {
        event.stopPropagation();
        centerMenu.hidden = !centerMenu.hidden;
    });

    document.getElementById('setDestinationBtn')?.addEventListener('click', () => {
        destinationPoint = L.latLng(map.getCenter().lat, map.getCenter().lng);
        destinationMode = true;
        if (pointALayer) { map.removeLayer(pointALayer); pointALayer = null; }
        if (pointBLayer) { map.removeLayer(pointBLayer); pointBLayer = null; }
        if (manualLineLayer) { map.removeLayer(manualLineLayer); manualLineLayer = null; }
        if (destinationMarkerLayer) map.removeLayer(destinationMarkerLayer);
        destinationMarkerLayer = L.circleMarker(destinationPoint, {
            radius: 6, color: '#e53935', weight: 2, fillColor: '#e53935', fillOpacity: 1
        }).addTo(map);
        centerMenu.hidden = true;
        updateDestinationPreview();
        setStatus('تم تثبيت الوجهة. حرّك الخريطة ليقيس الخط بين المركز والوجهة.');
    });

    document.getElementById('clearDestinationBtn')?.addEventListener('click', clearDestination);

    document.getElementById('addMapLabelBtn')?.addEventListener('click', () => {
        centerMenu.hidden = true;
        const name = window.prompt('اكتب تسمية العلامة:');
        if (!name || !map) return;
        L.marker(map.getCenter())
            .addTo(map)
            .bindTooltip(name, { permanent: true, direction: 'top' })
            .openTooltip();
    });

    // دعم الضغط المطوّل على النقطة البيضاء، مع إبقاء الضغط العادي صالحًا أيضًا.
    centerButton.addEventListener('pointerdown', () => {
        centerMenuTimer = window.setTimeout(() => {
            centerMenu.hidden = false;
        }, 550);
    });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(type => {
        centerButton.addEventListener(type, () => window.clearTimeout(centerMenuTimer));
    });

    document.getElementById('btnUpdateMap')?.addEventListener('click', showManualPointsOnMap);
    document.getElementById('btnMyPosition')?.addEventListener('click', setDefaultPointA);
    document.getElementById('btnSwap')?.addEventListener('click', swapPoints);
}

function updateCenterReadout() {
    if (!map) return;
    const center = map.getCenter();
    const centerText = `${center.lat.toFixed(6)}, ${center.lng.toFixed(6)}`;
    const readout = document.getElementById('mapCenterReadout');
    if (readout) readout.textContent = `مركز الخريطة: ${centerText}`;
    if (destinationMode && destinationPoint) updateGeographicHud(center, destinationPoint);
}

function updateDestinationPreview() {
    if (!map || !destinationMode || !destinationPoint) return;
    const center = map.getCenter();

    if (destinationLineLayer) map.removeLayer(destinationLineLayer);
    destinationLineLayer = L.polyline([center, destinationPoint], {
        color: '#e53935',
        weight: 3,
        opacity: 0.95
    }).addTo(map);
    updateGeographicHud(center, destinationPoint);
}

function showManualPointsOnMap() {
    const pointA = readPoint('latA', 'lonA');
    const pointB = readPoint('latB', 'lonB');
    if (!pointA || !pointB) {
        setStatus('أدخل إحداثيات صحيحة للنقطتين A وB.');
        return;
    }

    destinationMode = false;
    destinationPoint = null;
    if (destinationLineLayer) {
        map.removeLayer(destinationLineLayer);
        destinationLineLayer = null;
    }
    if (destinationMarkerLayer) {
        map.removeLayer(destinationMarkerLayer);
        destinationMarkerLayer = null;
    }
    if (pointALayer) map.removeLayer(pointALayer);
    if (pointBLayer) map.removeLayer(pointBLayer);
    if (manualLineLayer) map.removeLayer(manualLineLayer);

    pointALayer = L.marker(pointA).addTo(map).bindTooltip('A', { permanent: true, direction: 'top' });
    pointBLayer = L.marker(pointB).addTo(map).bindTooltip('B', { permanent: true, direction: 'top' });
    manualLineLayer = L.polyline([pointA, pointB], {
        color: '#e53935', weight: 3, opacity: 0.95
    }).addTo(map);

    map.fitBounds(L.latLngBounds([pointA, pointB]), { padding: [45, 45], maxZoom: 16 });
    updateGeographicHud(pointA, pointB);
    setStatus('تم عرض النقطتين A وB والخط الواصل بينهما.');
}

function getPointA() {
    return readPoint('latA', 'lonA');
}

function readPoint(latId, lonId) {
    const lat = Number.parseFloat(document.getElementById(latId)?.value);
    const lon = Number.parseFloat(document.getElementById(lonId)?.value);
    if (!Number.isFinite(lat) || !Number.isFinite(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180) return null;
    return L.latLng(lat, lon);
}

function updateGeographicHud(pointA, pointB) {
    if (!pointA || !pointB) return;
    const distance = pointA.distanceTo(pointB);
    const bearing = calculateBearing(pointA, pointB);
    const distanceNode = document.getElementById('geoDistance');
    const bearingNode = document.getElementById('geoAzimuth');
    if (distanceNode) distanceNode.textContent = Math.round(distance);
    if (bearingNode) bearingNode.textContent = bearing.toFixed(2);

    const receivedBearing = document.getElementById('receivedBearing');
    if (receivedBearing) receivedBearing.textContent = `الاتجاه المستلم: ${bearing.toFixed(2)}° من الشمال`;

    const range = document.getElementById('targetRange');
    if (range) range.value = Math.round(distance);
    window.clearTimeout(elevationTimer);
    const requestId = ++elevationRequestId;
    elevationTimer = window.setTimeout(() => requestElevation(pointA, pointB, requestId), 350);
}

function calculateBearing(a, b) {
    const radians = Math.PI / 180;
    const dLon = (b.lng - a.lng) * radians;
    const latA = a.lat * radians;
    const latB = b.lat * radians;
    const y = Math.sin(dLon) * Math.cos(latB);
    const x = Math.cos(latA) * Math.sin(latB) - Math.sin(latA) * Math.cos(latB) * Math.cos(dLon);
    return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
}

async function requestElevation(pointA, pointB, requestId) {
    const elevationNode = document.getElementById('geoElevation');
    if (!elevationNode) return;
    elevationNode.textContent = '…';
    try {
        const locations = `${pointA.lat},${pointA.lng}|${pointB.lat},${pointB.lng}`;
        const response = await fetch(`https://api.open-elevation.com/api/v1/lookup?locations=${encodeURIComponent(locations)}`);
        if (!response.ok) throw new Error('elevation service unavailable');
        const data = await response.json();
        const values = data.results?.map(item => Number(item.elevation));
        if (!values || values.length < 2 || values.some(value => !Number.isFinite(value))) throw new Error('invalid elevation');
        if (requestId !== elevationRequestId) return;
        const difference = values[1] - values[0];
        elevationNode.textContent = difference.toFixed(1);
        const input = document.getElementById('elevationDiff');
        if (input) input.value = difference.toFixed(1);
    } catch {
        elevationNode.textContent = 'غير متاح';
    }
}

function clearDestination() {
    destinationMode = false;
    destinationPoint = null;
    if (destinationLineLayer) {
        map.removeLayer(destinationLineLayer);
        destinationLineLayer = null;
    }
    if (destinationMarkerLayer) {
        map.removeLayer(destinationMarkerLayer);
        destinationMarkerLayer = null;
    }
    const menu = document.getElementById('mapCenterMenu');
    if (menu) menu.hidden = true;
    setStatus('تم إلغاء تعيين الوجهة. لا يوجد خط من مركز الخريطة.');
}

function setDefaultPointA() {
    document.getElementById('latA').value = DEFAULT_CENTER[0].toFixed(4);
    document.getElementById('lonA').value = DEFAULT_CENTER[1].toFixed(4);
    map.setView(DEFAULT_CENTER, map.getZoom());
    showManualPointsOnMap();
}

function swapPoints() {
    const latA = document.getElementById('latA');
    const lonA = document.getElementById('lonA');
    const latB = document.getElementById('latB');
    const lonB = document.getElementById('lonB');
    [latA.value, latB.value] = [latB.value, latA.value];
    [lonA.value, lonB.value] = [lonB.value, lonA.value];
    showManualPointsOnMap();
}

function setStatus(message) {
    const node = document.getElementById('mapStatus');
    if (node) node.textContent = message;
}

function showEquipmentData() {
    const mortar = document.getElementById('mortarType')?.value;
    const shell = document.getElementById('shellType')?.value;
    const charge = document.getElementById('chargeType')?.value;
    const rows = globalBallisticDatabase?.[mortar]?.[shell]?.[charge] || [];
    const body = document.getElementById('modalTableBody');
    const modal = document.getElementById('tableModal');
    if (!body || !modal) return;
    body.textContent = rows.length ? JSON.stringify(rows, null, 2) : 'لا توجد بيانات لهذا الاختيار.';
    modal.style.display = 'block';
}

function closeTableModal() {
    const modal = document.getElementById('tableModal');
    if (modal) modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof initApp === 'function') initApp();
    initMapEngine();
});
