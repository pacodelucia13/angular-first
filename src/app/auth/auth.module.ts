import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        AuthComponent
    ],
    imports: [
        FormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule{
}