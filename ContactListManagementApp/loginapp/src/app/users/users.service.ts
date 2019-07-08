import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()

export class UsersService {
    private baseURL = 'http://localhost:5000/api/auth/';


    constructor(private http: HttpClient) {}
    
    getUsersList() {
        let URL = this.baseURL + 'users';
        let token = "Bearer" + localStorage.getItem('TOKEN_NUMBER')
        return this.http.get(URL, {headers: {'Authorization': token}});
    }
    deleteUser(id) {
        let URL = this.baseURL+ 'deleteuser/' +id;
        return this.http.delete(URL);
    }
    updateUser(id, data) {
        let URL = this.baseURL + 'user/' + id;
        return this.http.put(URL, data);
      }
}
