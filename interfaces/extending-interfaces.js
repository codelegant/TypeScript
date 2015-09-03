var square = {"lai":"good"};
square.color = "blue";
square.sideLength = 10;
var square_2 = {"lai":"chuanfeng"};
square_2.color = "red";
square_2.sideLength = 23;
if(!square.hasOwnProperty("lai")){
	square.lai="laichuanfeng";
}
console.log(square);
