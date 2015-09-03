var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
//函数定义表达式
var otherFunc = function (src, sub) {
    return true;
};
function account() {
    return {
        add: function (x) { ++x; }
    };
}
var a = account();
a.add(5);
var otherAccount = function () {
    return {
        add: function (x) { ++x; }
    };
};
var b = otherAccount();
b.add(5);
