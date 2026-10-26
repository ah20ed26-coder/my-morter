// تنقل الواجهات دون إعادة رسم جدول البيانات داخل الواجهة الثانية.
function navigateToInterface(interfaceNum) {
    const interfaces = {
        1: document.getElementById('interface-map'),
        2: document.getElementById('interface-ballistics'),
        3: document.getElementById('interface-outputs')
    };
    Object.entries(interfaces).forEach(([number, element]) => {
        if (element) element.style.display = Number(number) === interfaceNum ? 'block' : 'none';
    });
}

// تعديل وتفعيل دالة الحسابات الباليستية الحقيقية بالكامل لتعويض الحساسات والطقس والخرائط
function executeBallisticSystem() {
    // 1. قراءة المعطيات الجغرافية التلقائية المستلمة من الخريطة
    const targetRange = parseFloat(document.getElementById('targetRange').value) || 0;
    const elevationDiff = parseFloat(document.getElementById('elevationDiff').value) || 0;
    
    // 2. قراءة قيم الحساسات وتصحيحات عوامل الطقس الحالية
    const currentTemp = parseFloat(document.getElementById('currentTemp').value) || 15;
    const currentPressDiff = parseFloat(document.getElementById('currentPressDiff').value) || 0;
    const windSpeedSide = parseFloat(document.getElementById('windSpeedSide').value) || 0;
    const windSpeedHead = parseFloat(document.getElementById('windSpeedHead').value) || 0;
    const speedDrop = parseFloat(document.getElementById('speedDrop').value) || 0;

    // 3. جلب زاوية اتجاه الشمال الجغرافي المسجلة لحظياً من الخريطة
    const geoAzimuthText = document.getElementById('geoAzimuth')?.textContent || "0";
    const geoAzimuth = parseFloat(geoAzimuthText) || 0;
    
    // 4. تحديد السلاح والعتاد النشط
    const mortarType = document.getElementById('mortarType').value;
    const shellType = document.getElementById('shellType').value;
    const chargeType = document.getElementById('chargeType').value;

    const selectedTable = globalBallisticDatabase[mortarType][shellType][chargeType];

    if (!selectedTable || selectedTable.length === 0) {
        alert("تنبيه: لا توجد بيانات أرقام باليستية مدخلة لهذه الحشوة في ملف قاعدة البيانات!");
        return;
    }

    // 5. تطبيق المعادلة الباليستية لحساب المسافة المعدلة بفعل فارق الارتفاع العمودي
    let adjustedRange = targetRange + (elevationDiff / 2.0);

    // 6. البحث التكتيكي عن أقرب صف مطابق للمسافة المعدلة في جدول الـ 14 سطراً
    let closestRow = selectedTable[0];
    let minDiff = Math.abs(adjustedRange - closestRow.range);
    for (let i = 1; i < selectedTable.length; i++) {
        let diff = Math.abs(adjustedRange - selectedTable[i].range);
        if (diff < minDiff) {
            minDiff = diff;
            closestRow = selectedTable[i];
        }
    }

    // 7. المحرك الحسابي العمودي: تعويض عوامل الجو وسخونة السبطانة لاستخراج المليم والدرجات الرأسية
    let totalCorrectionMil = 0;
    totalCorrectionMil += closestRow.sideWindCorr * (windSpeedSide / 10.0);
    totalCorrectionMil += closestRow.headWindCorr * (windSpeedHead / 10.0);
    totalCorrectionMil += closestRow.tempCorr * ((currentTemp - 15.0) / 10.0);
    totalCorrectionMil += closestRow.pressCorr * (currentPressDiff / 10.0);
    totalCorrectionMil += closestRow.speedCorr * (speedDrop / 10.0);

    let finalAngleMil = closestRow.baseAngleMil + totalCorrectionMil;
    let finalAngleDegrees = finalAngleMil * (360.0 / 6000.0);

    let vDegrees = Math.floor(finalAngleDegrees);
    let vMinutes = Math.round((finalAngleDegrees - vDegrees) * 60.0);
    if (vMinutes === 60) { vDegrees += 1; vMinutes = 0; }

    // 8. المحرك الحسابي الأفقي: دمج زاوية اتجاه الخريطة وتصحيحها التلقائي ضد الرياح الجانبية لخرج البوصلة
    let sideWindEffectDeg = (closestRow.sideWindCorr * (windSpeedSide / 10.0)) * (360.0 / 6000.0);
    let finalHorizontalDeg = geoAzimuth - sideWindEffectDeg; // تعديل السلاح عكس اتجاه الرياح

    let hDegrees = Math.floor(finalHorizontalDeg);
    let hMinutes = Math.round((finalHorizontalDeg - hDegrees) * 60.0);
    if (hMinutes === 60) { hDegrees += 1; hMinutes = 0; }

    // 9. ضخ وإرسال مخرجات الـ 14 صنف كاملة وصحيحة إلى واجهة العرض الثالثة والأخيرة
    document.getElementById('outVerticalDeg').textContent = vDegrees + " درجة و " + vMinutes + " دقيقة";
    document.getElementById('outVerticalMil').textContent = finalAngleMil.toFixed(1) + " مليم (مل)";
    document.getElementById('outHorizontalDeg').textContent = hDegrees + " درجة و " + hMinutes + " دقيقة";
    
    // عرض طبلة الارتفاع وبقية المؤشرات التكتيكية الهامة للرماية
    document.getElementById('outDrum').textContent = closestRow.drum !== undefined ? closestRow.drum.toFixed(2) : "0.00";
    document.getElementById('outFlightTime').textContent = closestRow.flightTime || "--";
    document.getElementById('outMaxHeight').textContent = closestRow.maxHeight || "--";
    document.getElementById('outFallAngle').textContent = closestRow.fallAngle || "--";

    // تحديث سجل ملخص التصحيحات المطبقة بالأسفل
    const summaryLog = document.getElementById('calculationSummaryLog');
    if (summaryLog) {
        summaryLog.innerHTML = 
            "• المسافة المعدلة بالارتفاع: <b>" + adjustedRange.toFixed(1) + "م</b> (المعتمد بالجدول: " + closestRow.range + "م)<br>" +
            "• زاوية الأساس القياسية: <b>" + closestRow.baseAngleMil + " مل</b> | مجموع تصحيحات الحساسات: <b>" + totalCorrectionMil.toFixed(1) + " مل</b>";
    }

    // الانتقال التلقائي لشاشة العرض والخرج الرقمي المكتمل
    navigateToInterface(3);
}
