import { FormGroup } from "@angular/forms";

export class PasswordValidation {
    static MatchPassword(form: FormGroup) {
        let password = form.value.password; // to get value in input tag
        let confirmPassword = form.value.confirmPassword; // to get value in input tag
        if (password !== confirmPassword) {
            return { MatchPassword: false };
        } else {
            return null
        }
    }
}
