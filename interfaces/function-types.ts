interface searchFunc{
	(source: string, subString: string): boolean;
}

var mySearch: searchFunc;
mySearch=function(src,sub){
	var result = src.search(sub);
	if (result == -1) {
		return false;
	}
	else {
		return true;
	}
}
//函数定义表达式
var otherFunc:searchFunc=function(src,sub){
	return true;
}
//如何使用函数声明语句，并且又能使用searchFunc这种interface?
/*function secondFunc(src, sub): searchFunc {
	return true;
}*/
interface Account{
	add(x: number): void;
}
function account():Account{
	return{
		add(x){++x}
	}
}
var a = account();
a.add(5);
/*var otherAccount:Account=function(){
	return {
		add(x){++x}
	}
}
var b = otherAccount();
b.add(5);*/