class GenericNumber<T>{
	zeroValue: T;
	add: (x: T, y: T) => T;
	fuck(x){
		return x + 1;
	}
}
var myGenericeNumber = new GenericNumber<number>();
myGenericeNumber.zeroValue = 0;
myGenericeNumber.add = (x, y) => x + y;
myGenericeNumber.fuck(3);