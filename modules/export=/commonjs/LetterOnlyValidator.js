var letterReg = /^[A-Za-z]+$/;
var LetterOnlyValidator = (function () {
    function LetterOnlyValidator() {
    }
    LetterOnlyValidator.prototype.isAcceptable = function (s) {
        return letterReg.test(s);
    };
    return LetterOnlyValidator;
})();
module.exports = LetterOnlyValidator;
