interface Shape{
	color: string;
}
interface Square extends Shape{
	sideLength: number;
}

var square = <Square>{};
square.color = "blue";
square.sideLength = 10;

var square_2 = <Square>{};
square_2.color = "red";
square_2.sideLength = 23;
console.log(square_2);
