define(["require", "exports"], function (require, exports) {
    var numberReg = /^[0-9]+$/;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberReg.test(s);
        };
        return ZipCodeValidator;
    })();
    exports.ZipCodeValidator = ZipCodeValidator;
});
