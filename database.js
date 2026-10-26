// =================================================================
// قاعدة البيانات الكبرى الموحدة لجميع العيارات والقذائف والحشوات
// الجزء الأول: يتضمن جدول بدون حشوة (ابتدائية) كاملاً بـ 14 صنف
// =================================================================
const globalBallisticDatabase = {
    "هاون عيار 60 مم": {
        "يوغسلافي M73": {
            "بدون حشوة (ابتدائية)": [
                { range: 94,  drum: 4.33, baseAngleMil: 1417, degMin: "85 00", maxHeight: 271, flightTime: 14.8, fallAngle: 1419, rngMil: 4, dirMil: 2, sideWindCorr: 37, headWindCorr: 4, tempCorr: 0, pressCorr: 0, speedCorr: 24 },
                { range: 100, drum: 4.29, baseAngleMil: 1411, degMin: "84 39", maxHeight: 270, flightTime: 14.7, fallAngle: 1413, rngMil: 4, dirMil: 2, sideWindCorr: 33, headWindCorr: 4, tempCorr: 0, pressCorr: 0, speedCorr: 23 },
                { range: 125, drum: 4.12, baseAngleMil: 1388, degMin: "83 16", maxHeight: 268, flightTime: 14.7, fallAngle: 1391, rngMil: 4, dirMil: 2, sideWindCorr: 29, headWindCorr: 4, tempCorr: 0, pressCorr: 0, speedCorr: 29 },
                { range: 150, drum: 3.86, baseAngleMil: 1364, degMin: "81 52", maxHeight: 266, flightTime: 14.7, fallAngle: 1368, rngMil: 4, dirMil: 2, sideWindCorr: 29, headWindCorr: 4, tempCorr: 0, pressCorr: 0, speedCorr: 34 },
                { range: 175, drum: 3.60, baseAngleMil: 1340, degMin: "80 25", maxHeight: 263, flightTime: 14.7, fallAngle: 1345, rngMil: 4, dirMil: 2, sideWindCorr: 26, headWindCorr: 5, tempCorr: 0, pressCorr: 0, speedCorr: 40 },
                { range: 200, drum: 3.34, baseAngleMil: 1316, degMin: "78 57", maxHeight: 260, flightTime: 14.6, fallAngle: 1322, rngMil: 4, dirMil: 2, sideWindCorr: 25, headWindCorr: 6, tempCorr: 0, pressCorr: 0, speedCorr: 51 },
                { range: 225, drum: 3.57, baseAngleMil: 1398, degMin: "83 53", maxHeight: 555, flightTime: 31.3, fallAngle: 1409, rngMil: 7, dirMil: 4, sideWindCorr: 101, headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 39 },
                { range: 250, drum: 3.33, baseAngleMil: 1387, degMin: "83 17", maxHeight: 554, flightTime: 31.3, fallAngle: 1399, rngMil: 7, dirMil: 4, sideWindCorr: 91,  headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 38 },
                { range: 300, drum: 2.87, baseAngleMil: 1364, degMin: "81 50", maxHeight: 551, flightTime: 31.2, fallAngle: 1377, rngMil: 7, dirMil: 4, sideWindCorr: 77,  headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 35 },
                { range: 325, drum: 2.57, baseAngleMil: 1349, degMin: "80 56", maxHeight: 549, flightTime: 31.2, fallAngle: 1365, rngMil: 7, dirMil: 4, sideWindCorr: 70,  headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 33 },
                { range: 350, drum: 2.21, baseAngleMil: 1329, degMin: "79 44", maxHeight: 546, flightTime: 31.1, fallAngle: 1346, rngMil: 7, dirMil: 4, sideWindCorr: 65,  headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 30 },
                { range: 375, drum: 1.83, baseAngleMil: 1309, degMin: "78 32", maxHeight: 543, flightTime: 31.0, fallAngle: 1329, rngMil: 7, dirMil: 4, sideWindCorr: 60,  headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 27 },
                { range: 400, drum: 1.34, baseAngleMil: 1280, degMin: "76 48", maxHeight: 538, flightTime: 30.9, fallAngle: 1302, rngMil: 7, dirMil: 4, sideWindCorr: 54,  headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 24 },
                { range: 425, drum: 0.81, baseAngleMil: 1249, degMin: "74 56", maxHeight: 531, flightTime: 30.6, fallAngle: 1272, rngMil: 7, dirMil: 4, sideWindCorr: 49,  headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 20 },
                { range: 450, drum: 0.17, baseAngleMil: 1212, degMin: "72 43", maxHeight: 522, flightTime: 30.4, fallAngle: 1238, rngMil: 7, dirMil: 4, sideWindCorr: 45,  headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 17 },
                { range: 475, drum: 0.00, baseAngleMil: 1169, degMin: "70 08", maxHeight: 511, flightTime: 30.0, fallAngle: 1195, rngMil: 7, dirMil: 4, sideWindCorr: 40,  headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 13 },
                { range: 500, drum: 0.00, baseAngleMil: 1117, degMin: "67 01", maxHeight: 495, flightTime: 29.5, fallAngle: 1145, rngMil: 7, dirMil: 4, sideWindCorr: 36,  headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 9 },
                { range: 525, drum: 0.00, baseAngleMil: 1050, degMin: "63 00", maxHeight: 473, flightTime: 28.8, fallAngle: 1080, rngMil: 7, dirMil: 4, sideWindCorr: 31,  headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 4 }
            ],
            "حشوة رقم 1": [
                { range: 184, drum: 3.33, baseAngleMil: 1387, degMin: "83 17", maxHeight: 554, flightTime: 31.3, fallAngle: 1399, rngMil: 7, dirMil: 4, sideWindCorr: 125, headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 38 },
                { range: 200, drum: 3.57, baseAngleMil: 1398, degMin: "83 53", maxHeight: 555, flightTime: 31.3, fallAngle: 1409, rngMil: 7, dirMil: 4, sideWindCorr: 115, headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 39 },
                { range: 225, drum: 3.60, baseAngleMil: 1410, degMin: "84 34", maxHeight: 556, flightTime: 31.3, fallAngle: 1419, rngMil: 7, dirMil: 4, sideWindCorr: 101, headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 33 },
                { range: 250, drum: 3.95, baseAngleMil: 1417, degMin: "85 00", maxHeight: 557, flightTime: 31.3, fallAngle: 1439, rngMil: 7, dirMil: 4, sideWindCorr: 91,  headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 28 },
                { range: 275, drum: 3.93, baseAngleMil: 1416, degMin: "84 57", maxHeight: 552, flightTime: 31.2, fallAngle: 1438, rngMil: 7, dirMil: 4, sideWindCorr: 87,  headWindCorr: 24, tempCorr: 1, pressCorr: 1,  speedCorr: 120 },
                { range: 300, drum: 3.86, baseAngleMil: 1414, degMin: "84 51", maxHeight: 548, flightTime: 31.1, fallAngle: 1435, rngMil: 7, dirMil: 4, sideWindCorr: 83,  headWindCorr: 24, tempCorr: 1, pressCorr: 1,  speedCorr: 112 },
                { range: 325, drum: 3.75, baseAngleMil: 1411, degMin: "84 39", maxHeight: 544, flightTime: 31.0, fallAngle: 1431, rngMil: 7, dirMil: 4, sideWindCorr: 79,  headWindCorr: 24, tempCorr: 1, pressCorr: 1,  speedCorr: 104 },
                { range: 350, drum: 3.60, baseAngleMil: 1406, degMin: "84 22", maxHeight: 539, flightTime: 30.9, fallAngle: 1425, rngMil: 7, dirMil: 4, sideWindCorr: 75,  headWindCorr: 25, tempCorr: 1, pressCorr: 1,  speedCorr: 96 },
                { range: 375, drum: 3.42, baseAngleMil: 1401, degMin: "84 03", maxHeight: 533, flightTime: 30.7, fallAngle: 1419, rngMil: 7, dirMil: 4, sideWindCorr: 72,  headWindCorr: 25, tempCorr: 1, pressCorr: 1,  speedCorr: 89 },
                { range: 400, drum: 3.20, baseAngleMil: 1394, degMin: "83 39", maxHeight: 526, flightTime: 30.5, fallAngle: 1411, rngMil: 7, dirMil: 4, sideWindCorr: 68,  headWindCorr: 26, tempCorr: 1, pressCorr: 1,  speedCorr: 81 },
                { range: 425, drum: 2.95, baseAngleMil: 1386, degMin: "83 10", maxHeight: 518, flightTime: 30.3, fallAngle: 1402, rngMil: 7, dirMil: 4, sideWindCorr: 64,  headWindCorr: 26, tempCorr: 1, pressCorr: 1,  speedCorr: 73 },
                { range: 450, drum: 2.67, baseAngleMil: 1377, degMin: "82 37", maxHeight: 510, flightTime: 30.0, fallAngle: 1392, rngMil: 7, dirMil: 4, sideWindCorr: 61,  headWindCorr: 27, tempCorr: 1, pressCorr: 1,  speedCorr: 66 },
                { range: 475, drum: 2.36, baseAngleMil: 1367, degMin: "82 01", maxHeight: 501, flightTime: 29.8, fallAngle: 1381, rngMil: 7, dirMil: 4, sideWindCorr: 57,  headWindCorr: 27, tempCorr: 1, pressCorr: 1,  speedCorr: 58 },
                { range: 500, drum: 2.01, baseAngleMil: 1356, degMin: "81 22", maxHeight: 491, flightTime: 29.5, fallAngle: 1369, rngMil: 7, dirMil: 4, sideWindCorr: 54,  headWindCorr: 28, tempCorr: 1, pressCorr: 1,  speedCorr: 51 },
                { range: 550, drum: 1.19, baseAngleMil: 1330, degMin: "79 48", maxHeight: 468, flightTime: 28.8, fallAngle: 1341, rngMil: 7, dirMil: 4, sideWindCorr: 47,  headWindCorr: 29, tempCorr: 1, pressCorr: 1,  speedCorr: 36 },
                { range: 600, drum: 0.16, baseAngleMil: 1297, degMin: "77 49", maxHeight: 442, flightTime: 28.0, fallAngle: 1308, rngMil: 7, dirMil: 4, sideWindCorr: 41,  headWindCorr: 29, tempCorr: 1, pressCorr: 1,  speedCorr: 22 },
                { range: 650, drum: 0.00, baseAngleMil: 1259, degMin: "75 32", maxHeight: 412, flightTime: 27.0, fallAngle: 1269, rngMil: 6, dirMil: 4, sideWindCorr: 35,  headWindCorr: 29, tempCorr: 1, pressCorr: 1,  speedCorr: 9 },
                { range: 700, drum: 0.00, baseAngleMil: 1214, degMin: "72 50", maxHeight: 377, flightTime: 25.8, fallAngle: 1223, rngMil: 6, dirMil: 4, sideWindCorr: 29,  headWindCorr: 29, tempCorr: 1, pressCorr: 1,  speedCorr: 4 },
                { range: 750, drum: 0.00, baseAngleMil: 1160, degMin: "69 36", maxHeight: 337, flightTime: 24.4, fallAngle: 1167, rngMil: 5, dirMil: 3, sideWindCorr: 22,  headWindCorr: 29, tempCorr: 1, pressCorr: 1,  speedCorr: 19 },
                { range: 775, drum: 0.00, baseAngleMil: 1129, degMin: "67 44", maxHeight: 315, flightTime: 23.6, fallAngle: 1135, rngMil: 5, dirMil: 3, sideWindCorr: 19,  headWindCorr: 29, tempCorr: 1, pressCorr: 1,  speedCorr: 27 },
                { range: 800, drum: 1.52, baseAngleMil: 1094, degMin: "65 38", maxHeight: 291, flightTime: 22.7, fallAngle: 1101, rngMil: 4, dirMil: 4, sideWindCorr: 15,  headWindCorr: 30, tempCorr: 1, pressCorr: 2,  speedCorr: 36 },
                { range: 825, drum: 1.69, baseAngleMil: 1057, degMin: "63 25", maxHeight: 265, flightTime: 21.7, fallAngle: 1063, rngMil: 4, dirMil: 4, sideWindCorr: 11,  headWindCorr: 31, tempCorr: 1, pressCorr: 2,  speedCorr: 46 },
                { range: 850, drum: 1.87, baseAngleMil: 1017, degMin: "61 01", maxHeight: 238, flightTime: 20.6, fallAngle: 1024, rngMil: 4, dirMil: 4, sideWindCorr: 8,   headWindCorr: 31, tempCorr: 1, pressCorr: 2,  speedCorr: 57 },
                { range: 875, drum: 2.07, baseAngleMil: 972,  degMin: "58 19", maxHeight: 211, flightTime: 19.3, fallAngle: 981,  rngMil: 4, dirMil: 4, sideWindCorr: 4,   headWindCorr: 31, tempCorr: 1, pressCorr: 2,  speedCorr: 69 },
                { range: 900, drum: 2.30, baseAngleMil: 923,  degMin: "55 22", maxHeight: 181, flightTime: 17.9, fallAngle: 934,  rngMil: 4, dirMil: 4, sideWindCorr: 0,   headWindCorr: 32, tempCorr: 1, pressCorr: 2,  speedCorr: 83 },
                { range: 925, drum: 2.57, baseAngleMil: 868,  degMin: "52 05", maxHeight: 150, flightTime: 16.4, fallAngle: 885,  rngMil: 4, dirMil: 4, sideWindCorr: 5,   headWindCorr: 32, tempCorr: 1, pressCorr: 2,  speedCorr: 99 },
                { range: 950, drum: 2.92, baseAngleMil: 806,  degMin: "48 22", maxHeight: 119, flightTime: 14.8, fallAngle: 834,  rngMil: 4, dirMil: 4, sideWindCorr: 11,  headWindCorr: 32, tempCorr: 1, pressCorr: 2,  speedCorr: 119 },
                { range: 975, drum: 3.39, baseAngleMil: 732,  degMin: "43 55", maxHeight: 89,  flightTime: 12.9, fallAngle: 781,  rngMil: 4, dirMil: 4, sideWindCorr: 19,  headWindCorr: 32, tempCorr: 1, pressCorr: 2,  speedCorr: 142 },
                { range: 1000, drum: 4.10, baseAngleMil: 636, degMin: "38 10", maxHeight: 60,  flightTime: 10.7, fallAngle: 721,  rngMil: 4, dirMil: 3, sideWindCorr: 30,  headWindCorr: 32, tempCorr: 1, pressCorr: 2,  speedCorr: 172 },
                { range: 1025, drum: 5.48, baseAngleMil: 504, degMin: "30 14", maxHeight: 34,  flightTime: 8.2,  fallAngle: 651,  rngMil: 4, dirMil: 2, sideWindCorr: 47,  headWindCorr: 32, tempCorr: 1, pressCorr: 2,  speedCorr: 213 },
                { range: 1050, drum: 7.97, baseAngleMil: 311, degMin: "18 39", maxHeight: 12,  flightTime: 5.1,  fallAngle: 554,  rngMil: 4, dirMil: 1, sideWindCorr: 78,  headWindCorr: 32, tempCorr: 1, pressCorr: 2,  speedCorr: 277 },
                { range: 1072, drum: 10.00, baseAngleMil: 0,  degMin: "00 00", maxHeight: 0,   flightTime: 0.0,  fallAngle: 432,  rngMil: 4, dirMil: 0, sideWindCorr: 122, headWindCorr: 32, tempCorr: 1, pressCorr: 2,  speedCorr: 339 }
            ],
            "حشوة رقم 2": [
                { range: 184, drum: 3.33, baseAngleMil: 1387, degMin: "83 17", maxHeight: 554, flightTime: 31.3, fallAngle: 1399, rngMil: 7, dirMil: 4, sideWindCorr: 125, headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 38 },
                { range: 200, drum: 3.57, baseAngleMil: 1398, degMin: "83 53", maxHeight: 555, flightTime: 31.3, fallAngle: 1409, rngMil: 7, dirMil: 4, sideWindCorr: 115, headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 39 },
                { range: 225, drum: 3.60, baseAngleMil: 1410, degMin: "84 34", maxHeight: 556, flightTime: 31.3, fallAngle: 1419, rngMil: 7, dirMil: 4, sideWindCorr: 101, headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 33 },
                { range: 250, drum: 3.95, baseAngleMil: 1417, degMin: "85 00", maxHeight: 557, flightTime: 31.3, fallAngle: 1439, rngMil: 7, dirMil: 4, sideWindCorr: 91,  headWindCorr: 24, tempCorr: 1, pressCorr: 13, speedCorr: 28 },
                { range: 275, drum: 3.93, baseAngleMil: 1416, degMin: "84 57", maxHeight: 552, flightTime: 31.2, fallAngle: 1438, rngMil: 7, dirMil: 4, sideWindCorr: 87,  headWindCorr: 24, tempCorr: 1, pressCorr: 1,  speedCorr: 120 },
                { range: 300, drum: 3.86, baseAngleMil: 1414, degMin: "84 51", maxHeight: 548, flightTime: 31.1, fallAngle: 1435, rngMil: 7, dirMil: 4, sideWindCorr: 83,  headWindCorr: 24, tempCorr: 1, pressCorr: 1,  speedCorr: 112 },
                { range: 325, drum: 3.75, baseAngleMil: 1411, degMin: "84 39", maxHeight: 544, flightTime: 31.0, fallAngle: 1431, rngMil: 7, dirMil: 4, sideWindCorr: 79,  headWindCorr: 24, tempCorr: 1, pressCorr: 1,  speedCorr: 104 },
                { range: 350, drum: 3.60, baseAngleMil: 1406, degMin: "84 22", maxHeight: 539, flightTime: 30.9, fallAngle: 1425, rngMil: 7, dirMil: 4, sideWindCorr: 75,  headWindCorr: 25, tempCorr: 1, pressCorr: 1,  speedCorr: 96 },
                { range: 375, drum: 3.42, baseAngleMil: 1401, degMin: "84 03", maxHeight: 533, flightTime: 30.7, fallAngle: 1419, rngMil: 7, dirMil: 4, sideWindCorr: 72,  headWindCorr: 25, tempCorr: 1, pressCorr: 1,  speedCorr: 89 },
                { range: 400, drum: 3.20, baseAngleMil: 1394, degMin: "83 39", maxHeight: 526, flightTime: 30.5, fallAngle: 1411, rngMil: 7, dirMil: 4, sideWindCorr: 68,  headWindCorr: 26, tempCorr: 1, pressCorr: 1,  speedCorr: 81 },
                { range: 425, drum: 2.95, baseAngleMil: 1386, degMin: "83 10", maxHeight: 518, flightTime: 30.3, fallAngle: 1402, rngMil: 7, dirMil: 4, sideWindCorr: 64,  headWindCorr: 26, tempCorr: 1, pressCorr: 1,  speedCorr: 73 },
                { range: 450, drum: 2.67, baseAngleMil: 1377, degMin: "82 37", maxHeight: 510, flightTime: 30.0, fallAngle: 1392, rngMil: 7, dirMil: 4, sideWindCorr: 61,  headWindCorr: 27, tempCorr: 1, pressCorr: 1,  speedCorr: 66 },
                { range: 475, drum: 2.36, baseAngleMil: 1367, degMin: "82 01", maxHeight: 501, flightTime: 29.8, fallAngle: 1381, rngMil: 7, dirMil: 4, sideWindCorr: 57,  headWindCorr: 27, tempCorr: 1, pressCorr: 1,  speedCorr: 58 },
                { range: 500, drum: 2.01, baseAngleMil: 1356, degMin: "81 22", maxHeight: 491, flightTime: 29.5, fallAngle: 1369, rngMil: 7, dirMil: 4, sideWindCorr: 54,  headWindCorr: 28, tempCorr: 1, pressCorr: 1,  speedCorr: 51 },
                { range: 550, drum: 1.19, baseAngleMil: 1330, degMin: "79 48", maxHeight: 468, flightTime: 28.8, fallAngle: 1341, rngMil: 7, dirMil: 4, sideWindCorr: 47,  headWindCorr: 29, tempCorr: 1, pressCorr: 1,  speedCorr: 36 },
                { range: 600, drum: 0.16, baseAngleMil: 1297, degMin: "77 49", maxHeight: 442, flightTime: 28.0, fallAngle: 1308, rngMil: 7, dirMil: 4, sideWindCorr: 41,  headWindCorr: 29, tempCorr: 1, pressCorr: 1,  speedCorr: 22 },
                { range: 650, drum: 0.00, baseAngleMil: 1259, degMin: "75 32", maxHeight: 412, flightTime: 27.0, fallAngle: 1269, rngMil: 6, dirMil: 4, sideWindCorr: 35,  headWindCorr: 29, tempCorr: 1, pressCorr: 1,  speedCorr: 9 },
                { range: 700, drum: 0.00, baseAngleMil: 1214, degMin: "72 50", maxHeight: 377, flightTime: 25.8, fallAngle: 1223, rngMil: 6, dirMil: 4, sideWindCorr: 29,  headWindCorr: 29, tempCorr: 1, pressCorr: 1,  speedCorr: 4 },
                { range: 750, drum: 0.00, baseAngleMil: 1160, degMin: "69 36", maxHeight: 337, flightTime: 24.4, fallAngle: 1167, rngMil: 5, dirMil: 3, sideWindCorr: 22,  headWindCorr: 29, tempCorr: 1, pressCorr: 1,  speedCorr: 19 },
                { range: 775, drum: 0.00, baseAngleMil: 1129, degMin: "67 44", maxHeight: 315, flightTime: 23.6, fallAngle: 1135, rngMil: 5, dirMil: 3, sideWindCorr: 19,  headWindCorr: 29, tempCorr: 1, pressCorr: 1,  speedCorr: 27 },
                { range: 800, drum: 0.01, baseAngleMil: 1198, degMin: "71 53", maxHeight: 795, flightTime: 37.0, fallAngle: 1254, rngMil: 13, dirMil: 4, sideWindCorr: 31,  headWindCorr: 42, tempCorr: 2, pressCorr: 8,  speedCorr: 105 },
                { range: 825, drum: 0.28, baseAngleMil: 1190, degMin: "71 24", maxHeight: 792, flightTime: 36.9, fallAngle: 1247, rngMil: 13, dirMil: 4, sideWindCorr: 30,  headWindCorr: 43, tempCorr: 2, pressCorr: 8,  speedCorr: 101 },
                { range: 850, drum: 0.55, baseAngleMil: 1181, degMin: "70 51", maxHeight: 789, flightTime: 36.8, fallAngle: 1239, rngMil: 13, dirMil: 4, sideWindCorr: 28,  headWindCorr: 44, tempCorr: 2, pressCorr: 8,  speedCorr: 97 },
                { range: 875, drum: 0.79, baseAngleMil: 1170, degMin: "70 12", maxHeight: 784, flightTime: 36.6, fallAngle: 1230, rngMil: 13, dirMil: 4, sideWindCorr: 26,  headWindCorr: 45, tempCorr: 2, pressCorr: 8,  speedCorr: 92 },
                { range: 900, drum: 1.01, baseAngleMil: 1159, degMin: "69 32", maxHeight: 778, flightTime: 36.4, fallAngle: 1221, rngMil: 13, dirMil: 4, sideWindCorr: 24,  headWindCorr: 46, tempCorr: 2, pressCorr: 8,  speedCorr: 87 },
                { range: 925, drum: 1.21, baseAngleMil: 1148, degMin: "68 53", maxHeight: 771, flightTime: 36.2, fallAngle: 1211, rngMil: 13, dirMil: 4, sideWindCorr: 22,  headWindCorr: 47, tempCorr: 2, pressCorr: 8,  speedCorr: 83 },
                { range: 950, drum: 1.41, baseAngleMil: 1135, degMin: "68 06", maxHeight: 763, flightTime: 35.9, fallAngle: 1200, rngMil: 13, dirMil: 4, sideWindCorr: 20,  headWindCorr: 48, tempCorr: 2, pressCorr: 8,  speedCorr: 78 },
                { range: 975, drum: 1.59, baseAngleMil: 1122, degMin: "67 19", maxHeight: 754, flightTime: 35.6, fallAngle: 1189, rngMil: 13, dirMil: 4, sideWindCorr: 18,  headWindCorr: 49, tempCorr: 2, pressCorr: 8,  speedCorr: 73 },
                { range: 1000, drum: 1.76, baseAngleMil: 1109, degMin: "66 32", maxHeight: 745, flightTime: 35.3, fallAngle: 1177, rngMil: 13, dirMil: 4, sideWindCorr: 16,  headWindCorr: 50, tempCorr: 2, pressCorr: 8,  speedCorr: 68 },
                { range: 1025, drum: 1.92, baseAngleMil: 1095, degMin: "65 41", maxHeight: 734, flightTime: 35.0, fallAngle: 1164, rngMil: 13, dirMil: 4, sideWindCorr: 14,  headWindCorr: 51, tempCorr: 2, pressCorr: 8,  speedCorr: 63 },
                { range: 1050, drum: 2.07, baseAngleMil: 1080, degMin: "64 48", maxHeight: 722, flightTime: 34.6, fallAngle: 1151, rngMil: 13, dirMil: 4, sideWindCorr: 11,  headWindCorr: 52, tempCorr: 2, pressCorr: 8,  speedCorr: 58 },
                { range: 1075, drum: 2.21, baseAngleMil: 1065, degMin: "63 54", maxHeight: 710, flightTime: 34.2, fallAngle: 1137, rngMil: 13, dirMil: 4, sideWindCorr: 8,   headWindCorr: 53, tempCorr: 2, pressCorr: 8,  speedCorr: 53 },
                { range: 1100, drum: 2.34, baseAngleMil: 1049, degMin: "62 56", maxHeight: 696, flightTime: 33.8, fallAngle: 1122, rngMil: 13, dirMil: 4, sideWindCorr: 5,   headWindCorr: 54, tempCorr: 2, pressCorr: 8,  speedCorr: 48 },
                { range: 1125, drum: 2.47, baseAngleMil: 1032, degMin: "61 55", maxHeight: 681, flightTime: 33.3, fallAngle: 1106, rngMil: 13, dirMil: 4, sideWindCorr: 1,   headWindCorr: 55, tempCorr: 2, pressCorr: 8,  speedCorr: 42 },
                { range: 1150, drum: 2.59, baseAngleMil: 1014, degMin: "60 51", maxHeight: 665, flightTime: 32.8, fallAngle: 1089, rngMil: 13, dirMil: 4, sideWindCorr: 3,   headWindCorr: 56, tempCorr: 2, pressCorr: 8,  speedCorr: 36 },
                { range: 1175, drum: 2.70, baseAngleMil: 996,  degMin: "59 45", maxHeight: 649, flightTime: 32.3, fallAngle: 1071, rngMil: 13, dirMil: 4, sideWindCorr: 8,   headWindCorr: 56, tempCorr: 2, pressCorr: 8,  speedCorr: 30 },
                { range: 1200, drum: 2.81, baseAngleMil: 976,  degMin: "58 34", maxHeight: 631, flightTime: 31.7, fallAngle: 1052, rngMil: 13, dirMil: 4, sideWindCorr: 12,  headWindCorr: 57, tempCorr: 2, pressCorr: 8,  speedCorr: 24 },
                { range: 1225, drum: 2.92, baseAngleMil: 955,  degMin: "57 18", maxHeight: 612, flightTime: 31.1, fallAngle: 1032, rngMil: 13, dirMil: 4, sideWindCorr: 18,  headWindCorr: 58, tempCorr: 2, pressCorr: 8,  speedCorr: 17 },
                { range: 1250, drum: 3.02, baseAngleMil: 933,  degMin: "55 59", maxHeight: 592, flightTime: 30.5, fallAngle: 1011, rngMil: 13, dirMil: 4, sideWindCorr: 23,  headWindCorr: 59, tempCorr: 2, pressCorr: 8,  speedCorr: 10 },
                { range: 1275, drum: 3.12, baseAngleMil: 910,  degMin: "54 36", maxHeight: 570, flightTime: 29.8, fallAngle: 989,  rngMil: 13, dirMil: 4, sideWindCorr: 30,  headWindCorr: 59, tempCorr: 2, pressCorr: 8,  speedCorr: 3 },
                { range: 1300, drum: 3.22, baseAngleMil: 885,  degMin: "53 06", maxHeight: 548, flightTime: 29.0, fallAngle: 965,  rngMil: 13, dirMil: 4, sideWindCorr: 37,  headWindCorr: 60, tempCorr: 2, pressCorr: 8,  speedCorr: 5 },
                { range: 1325, drum: 3.32, baseAngleMil: 859,  degMin: "51 32", maxHeight: 524, flightTime: 28.2, fallAngle: 940,  rngMil: 13, dirMil: 4, sideWindCorr: 45,  headWindCorr: 61, tempCorr: 2, pressCorr: 8,  speedCorr: 14 },
                { range: 1350, drum: 3.42, baseAngleMil: 831,  degMin: "49 52", maxHeight: 498, flightTime: 27.3, fallAngle: 914,  rngMil: 13, dirMil: 4, sideWindCorr: 54,  headWindCorr: 61, tempCorr: 2, pressCorr: 8,  speedCorr: 24 },
                { range: 1375, drum: 3.52, baseAngleMil: 801,  degMin: "48 04", maxHeight: 471, flightTime: 26.3, fallAngle: 886,  rngMil: 13, dirMil: 4, sideWindCorr: 64,  headWindCorr: 61, tempCorr: 2, pressCorr: 8,  speedCorr: 35 },
                { range: 1400, drum: 3.63, baseAngleMil: 769,  degMin: "46 08", maxHeight: 443, flightTime: 25.2, fallAngle: 856,  rngMil: 13, dirMil: 4, sideWindCorr: 75,  headWindCorr: 61, tempCorr: 2, pressCorr: 8,  speedCorr: 47 },
                { range: 1425, drum: 3.74, baseAngleMil: 734,  degMin: "44 02", maxHeight: 413, flightTime: 24.1, fallAngle: 824,  rngMil: 13, dirMil: 4, sideWindCorr: 87,  headWindCorr: 62, tempCorr: 2, pressCorr: 8,  speedCorr: 61 },
                { range: 1450, drum: 3.86, baseAngleMil: 696,  degMin: "41 46", maxHeight: 381, flightTime: 22.8, fallAngle: 789,  rngMil: 13, dirMil: 4, sideWindCorr: 102, headWindCorr: 62, tempCorr: 2, pressCorr: 8,  speedCorr: 76 },
                { range: 1475, drum: 3.99, baseAngleMil: 654,  degMin: "39 14", maxHeight: 348, flightTime: 21.4, fallAngle: 751,  rngMil: 13, dirMil: 4, sideWindCorr: 119, headWindCorr: 62, tempCorr: 2, pressCorr: 8,  speedCorr: 94 },
                { range: 1500, drum: 4.14, baseAngleMil: 607,  degMin: "36 25", maxHeight: 312, flightTime: 19.9, fallAngle: 709,  rngMil: 13, dirMil: 4, sideWindCorr: 139, headWindCorr: 62, tempCorr: 2, pressCorr: 8,  speedCorr: 115 },
                { range: 1525, drum: 4.31, baseAngleMil: 554,  degMin: "33 14", maxHeight: 275, flightTime: 18.2, fallAngle: 662,  rngMil: 13, dirMil: 3, sideWindCorr: 164, headWindCorr: 62, tempCorr: 2, pressCorr: 8,  speedCorr: 139 },
                { range: 1550, drum: 4.54, baseAngleMil: 491,  degMin: "29 28", maxHeight: 235, flightTime: 16.3, fallAngle: 608,  rngMil: 13, dirMil: 2, sideWindCorr: 197, headWindCorr: 62, tempCorr: 2, pressCorr: 8,  speedCorr: 170 },
                { range: 1575, drum: 4.88, baseAngleMil: 414,  degMin: "24 50", maxHeight: 191, flightTime: 14.1, fallAngle: 546,  rngMil: 13, dirMil: 1, sideWindCorr: 241, headWindCorr: 62, tempCorr: 2, pressCorr: 8,  speedCorr: 210 },
                { range: 1600, drum: 5.43, baseAngleMil: 308,  degMin: "18 29", maxHeight: 141, flightTime: 11.3, fallAngle: 469,  rngMil: 13, dirMil: 0, sideWindCorr: 303, headWindCorr: 62, tempCorr: 2, pressCorr: 8,  speedCorr: 268 },
                { range: 1625, drum: 7.42, baseAngleMil: 109,  degMin: "06 32", maxHeight: 79,  flightTime: 7.2,  fallAngle: 363,  rngMil: 13, dirMil: 0, sideWindCorr: 415, headWindCorr: 62, tempCorr: 2, pressCorr: 8,  speedCorr: 375 },
                { range: 1632, drum: 10.00, baseAngleMil: 0,   degMin: "00 00", maxHeight: 0,   flightTime: 0.0,  fallAngle: 215,  rngMil: 13, dirMil: 0, sideWindCorr: 473, headWindCorr: 62, tempCorr: 2, pressCorr: 8,  speedCorr: 425 }
            ],
            "حشوة رقم 3": []
        }
    },
    "هاون عيار 82 مم": {
        "قذيفة نموذجية 82": {
            "بدون حشوة": [],
            "حشوة رقم 1": []
        }
    },
    "هاون عيار 120 مم": {
        "قذيفة نموذجية 120": {
            "بدون حشوة": [],
            "حشوة رقم 1": []
        }
    }
};

function initApp() {
    const mortarSelect = document.getElementById('mortarType');
    if (!mortarSelect) return;
    mortarSelect.innerHTML = "";
    for (let mortar in globalBallisticDatabase) {
        let option = document.createElement('option');
        option.value = mortar; option.innerText = mortar;
        mortarSelect.appendChild(option);
    }
    updateShellOptions();
}
function updateShellOptions() {
    const mortarType = document.getElementById('mortarType').value;
    const shellSelect = document.getElementById('shellType');
    if (!shellSelect) return;
    shellSelect.innerHTML = "";
    for (let shell in globalBallisticDatabase[mortarType]) {
        let option = document.createElement('option');
        option.value = shell; option.innerText = shell;
        shellSelect.appendChild(option);
    }
    updateChargeOptions();
}
function updateChargeOptions() {
    const mortarType = document.getElementById('mortarType').value;
    const shellType = document.getElementById('shellType').value;
    const chargeSelect = document.getElementById('chargeType');
    if (!chargeSelect) return;
    chargeSelect.innerHTML = "";
    for (let charge in globalBallisticDatabase[mortarType][shellType]) {
        let option = document.createElement('option');
        option.value = charge; option.innerText = charge;
        chargeSelect.appendChild(option);
    }
}
