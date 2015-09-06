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
