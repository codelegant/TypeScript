/// <reference path="Validation.ts" />
module Validation {
    var numberReg = /^[0-9]+$/;
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberReg.test(s);
        }
    }
}