var numberReg = /^[0-9]+$/;
var ZipCodeValidator = (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberReg.test(s);
    };
    return ZipCodeValidator;
})();
module.exports = ZipCodeValidator;
