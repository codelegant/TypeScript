var Validation;
(function (Validation) {
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
    Validation.LetterOnlyValidator = LetterOnlyValidator;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberReg.test(s);
        };
        return ZipCodeValidator;
    })();
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
var strings = ["Hello", "98052", "101"];
var validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letter only"] = new Validation.LetterOnlyValidator();
strings.forEach(function (s) {
    for (var name in validators) {
        //console.log('"' + s + '"' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not macth ') + name);
        console.log("\"" + s + "\"" + (validators[name].isAcceptable(s) ? ' matches ' : ' does not macth ') + "name");
    }
});
