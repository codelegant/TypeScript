function identity<T>(arg: T): T {
	return arg;
}
var output = identity<string>("string");
console.log(output);

function identity_1<T>(arg:T[]):T[]{
	console.log(arg.length);
	return arg;
}
console.log(identity_1<string>(["laichuanfeng"]));

function identity_2<T>(arg:Array<T>):Array<T>{
	return arg;
}
console.log(identity_2<string>(["not the same"]));