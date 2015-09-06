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
/// <reference path="Validation.ts" />
var Validation;
(function (Validation) {
    var numberReg = /^[0-9]+$/;
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
/// <reference path="Validation.ts" />
/// <reference path="LetterOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
var strings = ["Hello", "98052", "101"];
var validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letter only"] = new Validation.LetterOnlyValidator();
strings.forEach(function (s) {
    for (var name in validators) {
        console.log("\"" + s + "\"" + (validators[name].isAcceptable(s) ? "matches " : " does not macth ") + "name");
    }
});
