function buildName(firstName: string, ...restOfName: string[]) {
	return `${firstName} ${restOfName.join(" ") }`;
}
var emplyeeName = buildName("lai", "xiao", "chai", "yun");
console.log(emplyeeName);

var buildNameFun: (fname: string, ...rest: string[]) => string = buildName;