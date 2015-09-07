define(["require", "exports"], function (require, exports) {
    var letterReg = /^[A-Za-z]+$/;
    var LetterOnlyValidator = (function () {
        function LetterOnlyValidator() {
        }
        LetterOnlyValidator.prototype.isAcceptable = function (s) {
            return letterReg.test(s);
        };
        return LetterOnlyValidator;
    })();
    exports.LetterOnlyValidator = LetterOnlyValidator;
});
