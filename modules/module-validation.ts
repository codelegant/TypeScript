module Validation {
	export interface StringValidator {
		isAcceptable(s: string): boolean;
	}
	var letterReg = /^[A-Za-z]+$/;
	var numberReg = /^\d+$/;

	export class LetterOnlyValidator implements StringValidator {
		isAcceptable(s: string) {
			return letterReg.test(s);
		}
	}

	export class ZipCodeValidator implements StringValidator {
		isAcceptable(s: string) {
			return s.length === 5 && numberReg.test(s);
		}
	}

}
var strings = ["Hello", "98052", "101"];
var validators: { [s: string]: Validation.StringValidator; } = {};

validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letter only"] = new Validation.LetterOnlyValidator();

strings.forEach(s=> {
	for (var name in validators) {
		console.log(`"${s}"${(validators[name].isAcceptable(s) ? " matches " : " does not macth ") }name`)
	}
})