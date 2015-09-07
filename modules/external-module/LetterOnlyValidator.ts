import validation = require('./Validation');
var letterReg = /^[A-Za-z]+$/;
export class LetterOnlyValidator implements validation.StringValidator {
    isAcceptable(s: string) {
        return letterReg.test(s);
    }
}