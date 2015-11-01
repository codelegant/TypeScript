//"=>"号左侧是参数类型，右侧返回值类型
var HeAdd: (x: number, y: number) => number =
	function(x: number, y: number): number { return x + y; };

var secondHeAdd: (x: number, y: number) => number = (x, y) => { return x + y; };

var thirdHeAdd: { (x: number, y: number): number } = (x, y) => { return x + y; };

var number = function(x: number, y: number): number {
	return x + y;
}

var myAdd = function(x: number, y: number) {
	return number(x, y);
}

declare var _: {
	template(template: string): (module: any) => string;
}