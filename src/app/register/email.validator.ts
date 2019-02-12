import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UserNameValidator{
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors|null>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(control.value == 'buddhika'){
                    resolve({ shouldBeUnique: true });
                }
                reject(null);
            }, 2000);
        });
    }
}