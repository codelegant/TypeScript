///<reference path="Validation.ts"/>
module Validation {
	var letterRex = /^[A-Za-z]+$/;
    export class LetterOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return letterRex.test(s);
        }
    }
}