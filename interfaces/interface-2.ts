/*interface Fullname {
	firstname: string
}
function printName(name: Fullname) {
	console.log(name.firstname)
}
var myName = { age: 10, firstname: "Size 10 Object" };
printName(myName);*/

interface Fullname {
	firstname: string;
	age?: number;
}
var printName=(name: Fullname)=>{
	console.log(name.firstname)
}
var myName = { age: 24, firstname: "lai" };
printName(myName);
