import { Injectable } from '@angular/core';

import { User } from '../models/user';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        // return this.http.get<User[]>('/api/users');
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }


     create(user: User){
    
      const body = JSON.stringify({user: user});
      console.log(body);
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.post('http://127.0.0.1:8000/api/register', body, {headers: headers})
      .map(
        (response: Response) => response.json()
      );


    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}