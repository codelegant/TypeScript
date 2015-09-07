import validation = require('./Validation');
var letterReg = /^[A-Za-z]+$/;
class LetterOnlyValidator implements validation.StringValidator {
    isAcceptable(s: string) {
        return letterReg.test(s);
    }
}
export = LetterOnlyValidator;