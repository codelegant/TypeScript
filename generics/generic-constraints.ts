interface Lengthwise {
	length: number;
}

function logginIdentity<T extends Lengthwise>(arg: T): T {
	console.log(arg.length);
	return arg;
}
var logginIdentity_2 = <T extends Lengthwise>(arg: T): T =>{
	console.log(arg.length);
	return arg;
}