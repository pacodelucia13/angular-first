import { Injectable, LOCALE_ID } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    token: string;
    API_KEY = 'AIzaSyDYt6xuIFCPPfytT5X0ANEcJntg65bTGLE';

    constructor(private router: Router, private httpClient: HttpClient) { }

    signup(email: string, password: string) {
        return this.httpClient.post<AuthResponseData>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + this.API_KEY,
            {
                email: email,
                password: password,
                returnSecureToken: true
            });
    }

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(
            error => console.log(error)
        )
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    console.log(response);
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getIdToken().then(
                        (token: string) => this.token = token
                    )
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
    }

    getToken() {
        firebase.auth().currentUser.getIdToken().then(
            (token: string) => this.token = token
        );
        return this.token;
    }

    isAuthenticated(): boolean {
        return this.token != null;
    }
}
