///<reference path="Validation.ts"/>
var Validation;
(function (Validation) {
    var letterRex = /^[A-Za-z]+$/;
    var LetterOnlyValidator = (function () {
        function LetterOnlyValidator() {
        }
        LetterOnlyValidator.prototype.isAcceptable = function (s) {
            return letterRex.test(s);
        };
        return LetterOnlyValidator;
    })();
    Validation.LetterOnlyValidator = LetterOnlyValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=LetterOnlyValidator.js.map