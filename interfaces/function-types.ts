interface searchFunc{
	(source: string, subString: string): boolean;
}

//var mySearch: searchFunc;
function mySearch(source,subString):searchFunc{
  var result = source.search(subString);
  if (result == -1) {
    return false;
  }
  else {
    return true;
  }
}
var result=mySearch("laichuanfeng", "lai");
console.log(result);

