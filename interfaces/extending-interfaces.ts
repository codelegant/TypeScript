interface Shape {
	color: string;
}
interface Square extends Shape {
	sideLength: number;
}
var square = <Square>{};
square.color = "blue";
square.sideLength = 10;

var square_2 = <Square>{};
square_2.color = "red";
square_2.sideLength = 23;
console.log(square_2);

interface Firstname {
	firstname: string;
}
interface Lastname {
	lastname: string;
}
interface Personal extends Firstname, Lastname {
	age: number;
}
var fullname = <Personal>{};
fullname.firstname = "lai";
fullname.lastname = "chuanfeng";
fullname.age = 23;