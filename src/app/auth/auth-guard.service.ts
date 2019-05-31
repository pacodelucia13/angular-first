import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const allowedOnPage = this.authService.isAuthenticated();
        if (!allowedOnPage) {
            this.router.navigate(['/signin']);
        }
        return allowedOnPage;
    }

    canLoad(route: import("@angular/router").Route): boolean | Observable<boolean> | Promise<boolean> {
        const allowedOnPage = this.authService.isAuthenticated();
        if (!allowedOnPage) {
            this.router.navigate(['/signin']);
        }
        return allowedOnPage;
    }
}