import validation = require('./Validation');
var numberReg = /^[0-9]+$/;
export class ZipCodeValidator implements validation.StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberReg.test(s);
    }
}