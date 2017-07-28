import { Directive, Attribute, forwardRef } from '@angular/core';
import { AbstractControl, Validator, ValidatorFn, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateEqual]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidateEqualDirective), multi: true }
  ]
})
export class ValidateEqualDirective implements Validator {

  constructor( @Attribute('validateEqual') private validateEqual: string, @Attribute('reverse') private reverse: string) { }
  validate(c: AbstractControl): { [key: string]: any } {
    var value = c.value;
    var e = c.root.get(this.validateEqual);
    if (e && e.value && e.value != value) {
      return { "validateEqual": true }
    }
    if (e && e.value && e.value == value) {
      var relatedControlErrors = e.errors;
      if(relatedControlErrors) {
        delete relatedControlErrors['validateEqual'];
        if (!Object.keys(relatedControlErrors).length) {
          e.setErrors(null);
        }
        e.patchValue(e.value, {emitEvent:true});
      }
      return null;
    }
    return null;
  }

}
