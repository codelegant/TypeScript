var mySearch = function (src, sub) {
    var result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
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
