var x = (a: number) => 0;
var y = (b: number, s: string) => 0;

y = x;
x = y;//Error
//he reason is 
//that assignment is allowed 
//is that ignoring extra function parameters 
//is actually quite common in JavaScript. 
var a = () => ({ name: "Alice" });
var b = () => ({ name: "Alice", location: "Seattle" });
a = b;
b = a;//Error
