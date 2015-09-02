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
var otherFunc:searchFunc=function(src,sub){
	return true;
}
//如何使用函数声明语句，并且又能使用interface?
function secondFunc(src,sub):searchFunc{
	return true;
}
