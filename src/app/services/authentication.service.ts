import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, private _router: Router ) { }

    // login(username: string, password: string) {
    //     return this.http.post<any>('http://127.0.0.1:8000/api/login', { username: username, password: password })
    //         .map(user => {
    //             // login successful if there's a jwt token in the response
    //             if (user && user.token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //             }

    //             return user;
    //         });
    // }

    login(email: string, password: string){
    
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      return this.http.post('http://127.0.0.1:8000/api/login', { email: email, password: password }, {headers: headers})
        .map(user => {
                // login successful if there's a jwt token in the response
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });


    }
    

    logout() {
        console.log('logout');
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this._router.navigate(['login']);
    }
}