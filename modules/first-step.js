var letterReg = /^[A-Za-z]+$/;
var numberReg = /^\d+$/;
var LetterOnlyValidator = (function () {
    function LetterOnlyValidator() {
    }
    LetterOnlyValidator.prototype.isAcceptable = function (s) {
        return letterReg.test(s);
    };
    return LetterOnlyValidator;
})();
var ZipCodeValidator = (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberReg.test(s);
    };
    return ZipCodeValidator;
})();
var strings = ["Hello", "98052", "101"];
var validators = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letter only"] = new LetterOnlyValidator();
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '"' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not macth ') + name);
    }
});
