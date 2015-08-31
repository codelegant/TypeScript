enum Color{Red, Green, Blue};
var c: Color = Color.Green;

enum Color_1{Red=1, Green, Blue};
var d: Color_1 = Color_1.Green;

enum Color_2{Red=1, Green=2, Blue=4};
var e: Color_2 = Color_2.Green;

enum Color_3{Red=1, Green=4, Blue=2};
var colorName: string = Color_3[2];
console.log(colorName);