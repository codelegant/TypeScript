var GenericNumber = (function () {
    function GenericNumber() {
    }
    GenericNumber.prototype.fuck = function (x) {
        return x + 1;
    };
    return GenericNumber;
})();
var myGenericeNumber = new GenericNumber();
myGenericeNumber.zeroValue = 0;
myGenericeNumber.add = function (x, y) { return x + y; };
myGenericeNumber.fuck(3);
