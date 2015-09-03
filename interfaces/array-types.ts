interface stringArray{
	[index: number]: string;
}
interface object{
	[index: string]: string;
}
var myArr: stringArray;
myArr = ["Bob", "Fred"];
var myobj: object = { "name": "lai" };
console.log(myArr[0]);