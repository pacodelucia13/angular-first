import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService, AuthResponseData } from "./auth.service";
import { Observable } from "rxjs";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',

})
export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error: string = null;

    constructor(private authService: AuthService) { }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
        if (!form.valid) {
            return;
        }

        const email = form.value.email;
        const password = form.value.password;

        this.isLoading = true;
        let authObs: Observable<AuthResponseData>;

        if (this.isLoginMode) {
            authObs = this.authService.login(email, password);
        }
        else {
            authObs = this.authService.signup(email, password);
        }

        authObs.subscribe(
            authResponseData => {
                this.isLoading = false;
            }, errorMessage => {
                this.isLoading = false;
                this.error = errorMessage;
            });
        form.reset();
    }
}