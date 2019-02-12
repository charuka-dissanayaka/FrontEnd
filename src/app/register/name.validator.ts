import { AbstractControl, ValidationErrors } from "@angular/forms";

export class NameValidator {
    static realName(control: AbstractControl): ValidationErrors | null {
        var regex = /^[a-zA-Z ]{2,30}$/;
        if(regex.test(control.value as string)){
            return { realName: false }
        }

        return null;
    } 
}
