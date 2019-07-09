import { Injectable } from '@angular/core';
//import { RegisterModal } from './register.model';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class UserService {

    private baseURL = 'http://localhost:5000/api/auth/';

    constructor(private http: HttpClient) {}
    
    getUser(id) {
        let URL = this.baseURL + 'user/' + id;
        return this.http.get(URL);
    }
    updateUser(id, user) {
        let URL = this.baseURL + 'user/' + id;
        return this.http.put(URL, user);
    }
}
