interface Fullname {
	[index: number]: string;
}
interface Firstname {
	[index: string]: string;
}
var myName: Fullname = ["lai", "chuanfeng"];
var myFirstname: Firstname = { "firstname": "lai" };
console.log(myName[0]);