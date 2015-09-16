var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var Color_1;
(function (Color_1) {
    Color_1[Color_1["Red"] = 1] = "Red";
    Color_1[Color_1["Green"] = 2] = "Green";
    Color_1[Color_1["Blue"] = 3] = "Blue";
})(Color_1 || (Color_1 = {}));
;
var d = Color_1.Green;
var Color_2;
(function (Color_2) {
    Color_2[Color_2["Red"] = 1] = "Red";
    Color_2[Color_2["Green"] = 2] = "Green";
    Color_2[Color_2["Blue"] = 4] = "Blue";
})(Color_2 || (Color_2 = {}));
;
var e = Color_2.Green;
var Color_3;
(function (Color_3) {
    Color_3[Color_3["Red"] = 1] = "Red";
    Color_3[Color_3["Green"] = 4] = "Green";
    Color_3[Color_3["Blue"] = 2] = "Blue";
})(Color_3 || (Color_3 = {}));
;
var colorName = Color_3[2];
console.log(c);
