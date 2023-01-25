// COORDINATES ARE IN THE FORM (y,x) FOR SOME STRANGE REASON

var roads = {
    "type":"FeatureCollection",
    "name":"roads",
    "features": [
        /*
        {"type":"Feature", "properties": { "name":"ROAD NAME HERE" }, "geometry": {"type":"LineString", "coordinates": [
            [Y, X], [Y,X]
        ] } },
        */
        {"type":"Feature", "properties": { "name":"FS 401" }, "geometry": {"type":"LineString", "coordinates": [
            [7.375, -492.625], [184.25, -471.75], [261.25, -364.75], [284.25, -364.75], [304.5, -372], [316.5, -372.25], [322.75, -371], [337.71875, -363.46875], [355, -350.5], [383, -328.625], [386.625, -324.125], [410.25, -265], [418.625, -249.5], [434.5, -235.75], [604.75, -161.25], [957.25, -161.25]
        ] } },

        {"type":"Feature", "properties": { "name":"FS 98" }, "geometry": { "type":"LineString", "coordinates": [
            [670.5625, -322.9375],
            [677.0625, -314.5625],
            [682.5625, -305.5625],
            [687.6875, -294.875],
            [692.5625, -283.75],
            [696.6875, -271.625],
            [698.8125, -261.9375],
            [700.0625, -251.625],
            [698.8125, -240.8125],
            [695.9375, -228.5625],
            [690.75, -216],
            [684.25, -202.375],
            [673.375, -183.25],
            [661.125, -164.5],
            [649.25, -149.125],
            [638.125, -136.375],
            [621.375, -124.5],
            [601.625, -113.625],
            [570.375, -97.75],
            [553.875, -89.5],
            [545, -82.625],
            [530.75, -77.75],
            [505.5, -77.5],
            [414, -77.375],
            [407.25, -79.875],
            [388.125, -95.875],
            [371.25, -110.5],
            [350.75, -127.375],
            [324.5, -143.125],
            [295.625, -160.625],
            [270.625, -176.25],
            [246.625, -191.875],
            [238.75, -199.625],
            [217.5, -221.125],
            [197.375, -241.25],
            [177.375, -261.875],
            [158, -286.5],
            [127.375, -331.25],
            [119.5, -344.875],
            [103.875, -374],
            [90.25, -401.625],
            [78.375, -433.375],
            [73, -462.8125],
            [73.25, -478.75],
            [74.625, -493.25],
            [78.875, -506.625],
            [96.5, -552.25],
            [117, -598.625],
            [126.25, -613.875],
            [140.5, -627.75],
            [161, -638.625],
            [188, -642.875],
            [204.75, -642.625],
            [239.375, -642.125],
            [269.125, -642.25],
            [296.75, -640.125],
            [314.875, -632.625],
            [325.125, -626],
            [338.5, -612.125],
            [346.25, -599],
            [356.125, -578.5],
            [364.375, -558.5],
            [367.875, -536.625],
            [369, -519.5],
            [371.25, -511],
            [378.375, -494.25],
            [387.375, -473.25],
            [390.625, -461.625],
            [390.3125, -442.75],
            [395.5, -424],
            [414.25, -413.5],
            [437.125, -403],
            [446.125, -401.125],
            [460, -400.375],
            [485.125, -402.125],
            [500.25, -405.75],
            [517.125, -413.875],
            [526.125, -418.75],
            [539.5, -428.875],
            [550.625, -439.875],
            [562, -447.625],
            [575.125, -451.25],
            [581.875, -451.625],
            [588.125, -447.5],
            [591, -441.25],
            [592.75, -433.125],
            [594, -422.625],
            [595.125, -417.25],
            [600, -409.625],
            [607.625, -399.5],
            [618.625, -389.125],
            [630.375, -378.875],
            [637.25, -371.375],
            [645.875, -356.625],
            [648.875, -349.625],
            [655.75, -340.25],
            [658.25, -337],
            [670.5, -323.25],
        ]}},

        {"type":"Feature", "properties": { "name":"Corrections Rd" }, "geometry": {"type":"LineString", "coordinates": [
            [496.3125, -472.4375], [496.5625, -466.125], [496.5625, -460], [496.8125, -453.8125], [497.5625, -448.5], [498.4375, -443.25], [499.9375, -436], [502.125, -427.5], [504.5625, -420], [506.8125, -414.5625], [510.0625, -407.125], [514, -399.375], [519.25, -393.4375], [525.4375, -390.75], [532.625, -391.125], [542.125, -392.4375], [548.1875, -394.625], [563.9375, -403.25], [568.9375, -406.0625], [579.8125, -412.8125], [592.875, -421.0625], 
        ] } },

        {"type":"Feature", "properties": { "name":"Harrison St" }, "geometry": {"type":"LineString", "coordinates": [
            [569.1875, -407.5], [563.9375, -417.5625], [561.3125, -422], [556.875, -428.3125], [552.25, -433.9375], [549.9375, -436.9375],
        ] } },

        {"type":"Feature", "properties": { "name":"Arapahoe St" }, "geometry": {"type":"LineString", "coordinates": [
            [567.5625, -447.8125], [570.1875, -439.9375], [572.625, -432.375], [574.9375, -427.4375], [578.8125, -419.6875], [581.375, -415.375], 
        ] } },

        {"type":"Feature", "properties": { "name":"FS 95" }, "geometry": {"type":"LineString", "coordinates": [
            [533.6875, -389.875], [535.875, -375.5], [536.75, -367.125], [535.125, -362.625], [525.75, -341.5], [522.375, -337.375], [502.625, -320.125], [482.625, -302.25], [477.125, -295.375], [472.875, -286.75], [467.625, -275.75], [460.875, -267.125], [454.5, -261.375], [440.875, -250.75], [432.5, -246.25], [421.5, -243.375], [413.75, -242.875], [387.5, -242.375], [371.125, -242.75], [354.75, -243.375], [345.75, -244.625], [337.25, -243.875], [313.625, -238.375], [295.625, -233.75], [286, -229.25], [263.625, -216.375], [253.875, -209.25], [243.875, -199.875], [234.625, -191.375], [227.875, -187.5], [221, -184.75], [215.125, -183.375], [207.75, -182.5], [154.75, -177], [146.625, -177.5], [137.75, -179], [129.375, -183.125], [123.375, -187.75], [117.875, -193.125], [107.625, -205.25], [95.875, -223.625], [94.5, -226.25], [90.125, -235.625], [87.375, -244.5], [83.5, -255.75], [79.75, -266.5], [78.5, -271.125], [72, -285], [54.625, -323.5], [52.5, -330.125], [50.625, -335.25], [41.25, -368.625], [20.5, -439.875], [16.125, -450.875], [11.75, -458.75], [8.875, -465.75], [6, -475], [4.875, -483.25], [5.125, -492.875], [7.25, -503], [12.75, -513.25], [19.375, -519.625], [35.625, -531.125], [46.875, -539.625], [57.5, -546.875], [62.375, -550.375], [71.625, -554.25], [78.375, -555.375], [85.875, -555], [93.875, -553.25], [98.375, -551.5], [111.75, -546.75], [115.25, -546.75], [119.875, -548.875], [123.125, -552.375], [143.5, -581.75], [175.875, -609.0625], [181.375, -611.5], [188.875, -612.875], [195.125, -611.75], [200.5625, -610.0625], [211.875, -605.1875], [263.4375, -583.25], [295.5, -578.5], [296.75, -578], [299, -575.0625], [299.4375, -572.1875], [298.125, -569.75], [295.375, -568], [249.875, -566.4375], [217, -565.5], [211.4375, -564.625], [206.25, -562.875], [202.625, -560.75], [177.625, -540.0625], [175.75, -536.875], [174.6875, -533.25], [175.1875, -528.875], [178.25, -524.8125], [222.9375, -477.0625], [226.75, -474.625], [230.375, -473.875], [235.25, -474.6875], [238.5625, -476.9375], [264.625, -498.5625],   
        ] } },

        {"type":"Feature", "properties": { "name":"Hillview St" }, "geometry": {"type":"LineString", "coordinates": [
            [241.1875, -477.3125], [245.25, -472.1875], [247.125, -467.875], [248.125, -463.1875], [248.25, -458.3125], [247.5625, -454.25], [248.9375, -449.5], [252.6875, -445.75], [258.0625, -444.125], [262.6875, -444.9375], [266.3125, -447.9375], [272.75, -453.5], [277.375, -457.125], [279.8125, -461.5625], [279.75, -466.5625], [271.4375, -488.75], [269.375, -492.6875], [246.875, -518.9375], [243.6875, -522.25], [239.25, -523.625], [234.0625, -522.625], [229.9375, -519.625], [221.875, -512.5], [220.4375, -509.5], [220, -505.875], [221.0625, -501.9375], [223.5625, -498.3125], [241.125, -477], 
        ] } },

        {"type":"Feature", "properties": { "name":"Public Works Rd" }, "geometry": {"type":"LineString", "coordinates": [
            [168.3125, -418.375], [164.75, -422.125], [160.9375, -424.5625], [157.0625, -425.9375], [151.1875, -426.875], [145.6875, -426.9375], [140.3125, -425.1875], [135.875, -422.625], [132, -418.9375], [129.0625, -415.6875], [127.0625, -411.125], [125.1875, -406.9375], [124.4375, -401.9375], [121.9375, -373.0625], [120.75, -369], [118, -365.875], [113.75, -363.25], [106.625, -360.1875], [97.8125, -355.75], [90.1875, -352.125], [71.3125, -343.4375], [66.25, -341.0625], [51.5, -337],
        ] } },

        {"type":"Feature", "properties": { "name":"97th Ave" }, "geometry": {"type":"LineString", "coordinates": [
            [18.75, -447.875], [28.875, -453.125], [37.125, -454.125], [42.25, -452.875], [47.25, -448.375], [50.25, -443.5], [61.25, -408.125], [67.25, -388.75], [68.75, -384.375], [83.125, -350.5], [84.25, -347.53125], [89.65625, -335], [90.1875, -333.34375], [90.09375, -331.75], [89.96875, -328.125], [90.53125, -326], [91.78125, -323.71875], [94.875, -319.75], [100.03125, -312.78125], 
        ] } },

        {"type":"Feature", "properties": { "name":"Cruiser St" }, "geometry": {"type":"LineString", "coordinates": [
            [27, -423.375], [52.625, -431.375], [55.375, -432], [74.625, -438.125], 
        ] } },

        {"type":"Feature", "properties": { "name":"King St" }, "geometry": {"type":"LineString", "coordinates": [
            [82.375, -416.625], [61.125, -409.5], [32.75, -400.625], 
        ] } },

        {"type":"Feature", "properties": { "name":"Tiny Rd" }, "geometry": {"type":"LineString", "coordinates": [
            [42.25, -369.1875], [52.8125, -372.375], [69.625, -379.125], 
        ] } },

        {"type":"Feature", "properties": { "name":"Lone Pine St" }, "geometry": {"type":"LineString", "coordinates": [
            [60.4375, -314.1875], [64.5, -316.5625], [68.8125, -319], [72.4375, -321.0625], [74.4375, -323.0625], [76.5625, -326], [78.875, -328], [82.5, -329.25], [88.625, -329.6875], [93.9375, -329.5625], [98.8125, -329.6875], [105.625, -332.625], [110.5625, -331.5625], [113.4375, -329.75], [115.6875, -326.875], [117.1875, -324.8125], 
        ] } },

        {"type":"Feature", "properties": { "name":"Jackson Ct" }, "geometry": {"type":"LineString", "coordinates": [
            [78.1875, -307.25], [78.125, -310.6875], [77.5, -313.5625], [76.125, -316.125], [73.0625, -320.1875], [70.8125, -323.125], [68.9375, -325.9375], [67.875, -329.375], [68.125, -333.625], 
        ] } },

        {"type":"Feature", "properties": { "name":"Galapago Ct" }, "geometry": {"type":"LineString", "coordinates": [
            [105.9375, -346.9375], [104, -341.25], [103.71875, -338.65625], [104.375, -333.46875], 
        ] } },

        {"type":"Feature", "properties": { "name":"Sualsbury St" }, "geometry": {"type":"LineString", "coordinates": [
            [70.875, -290.3125], [126.9375, -329.8125], 
        ] } },

        {"type":"Feature", "properties": { "name":"Bay Beach" }, "geometry": {"type":"LineString", "coordinates": [
            [172.9375, -269.0625], [177.0625, -271.9375], [181.3125, -274.125], [185.4375, -274.75], [190.3125, -274.5], [194.5625, -272.6875], [198.1875, -269.9375], [201.5, -265.5], [204.625, -262.0625], [206.9375, -260.9375], [209.25, -261.25], [210.5, -262.25], [211, -263.875], [211, -265.3125], [210.5625, -266.875], [209.125, -267.9375], [207.1875, -269.75], [205.9375, -271.875], [204.3125, -275], [201.375, -277.875], [199.5, -279.3125], [197.125, -279.9375], [195.125, -279.75], [193.5625, -278.6875], [193.125, -277.3125], [193.0625, -275.9375], [193.6875, -274.8125], [194.75, -273.375], [194.9375, -272.5625], [194.0625, -274.375], [193.125, -275.8125], [192.875, -277.375], [193.5625, -278.5625], [194.375, -279.4375], [195.0625, -280.1875], [193.6875, -280.25], [192.1875, -280.0625], [190.3125, -279.5], [188.875, -278.875], [187.25, -277.8125], [185.625, -276.6875], [184.125, -275.875], [183.0625, -275.3125], [181.5625, -274], 
        ] } },

        {"type":"Feature", "properties": { "name":"Stapleton Blvd" }, "geometry": {"type":"LineString", "coordinates": [
            [542.375, -248.75], [547.78125, -245.34375], [548.65625, -243.625], [548.90625, -241.84375], [548.34375, -240.4375], [547.0625, -239.4375], [544.59375, -239.125], [492.84375, -247.5], [491.09375, -247.03125], [489.75, -246.28125], [489, -245.25], [488.8125, -243.90625], [489.09375, -242.78125], [489.71875, -241.875], [490.8125, -240.6875], [522.21875, -209.125], [523.34375, -207.46875], [523.5, -205.9375], [523.625, -189.0625], [523.59375, -156.28125], [523.75, -152.1875], [522.375, -145.65625], [521.59375, -143.9375], [519.9375, -141.5], [516.96875, -139.4375], [513.28125, -138.21875], [510.09375, -137.25], [506.34375, -136.90625], [500.5, -136.90625], [462.5625, -136.53125], [426.96875, -136.375], [393.875, -136.75], [382.5, -136.3125], [376.6875, -135], [372.3125, -133.375], [367.8125, -130.5625], [363.1875, -126.5625], [358.8125, -123.0625], [355.8125, -118.75], [351.53125, -113.5], 
        ] } },

        {"type":"Feature", "properties": { "name":"Airport Rd" }, "geometry": {"type":"LineString", "coordinates": [
            [469.5, -134], [469.5, -128.5], [468.125, -122.875], [465.875, -116.75], [462.625, -110.375], [444.875, -84.75], [443.375, -82.125], [443.125, -77.5], [499.375, -77.25], [499.25, -80], [498.75, -83], [477.75, -112.875], [475.25, -118.125], [473.875, -122.375], [473.125, -127.25], [472.875, -130.875], [472.75, -133.5],
        ] } },

        {"type":"Feature", "properties": { "name":"83rd Ave" }, "geometry": {"type":"LineString", "coordinates": [
            [379.875, -138.5], [377.875, -147.25], [377.5, -156.75], [377.375, -239.875], 
        ] } },
        
        "type":"Feature", "properties": { "name":"85th Ave" }, "geometry": {"type":"LineString", "coordinates": [
            [431.09375, -139.75], [430.8125, -201.75],
        ] } },
    ]
}
