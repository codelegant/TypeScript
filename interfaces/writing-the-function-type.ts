var HeAdd: (x: number, y: number) => number = function(x: number, y: number): number { return x + y; };

var number = function(x: number, y: number): number {
	return x + y;
}
var myAdd = function(x: number, y: number) {
	return number(x, y);
}
