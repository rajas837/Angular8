import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()

export class ContactsService {

    private baseURL = 'http://localhost:5000/api/auth/';

    constructor(private http: HttpClient) {}
    
    // getContactList() {
    //     //localStorage.setItem('TOKEN_NUMBER', token);
    //     let token = "Bearer" + localStorage.getItem('TOKEN_NUMBER')
    //     return this.http.get(this.baseURL, {headers: {'Authorization': token}});
    // }
    getUserDetails() {
        let token = localStorage.getItem('TOKEN_NUMBER')
        let URL = this.baseURL + 'userinfo';
        return this.http.get(URL, {headers: {'x-access-token': token}});
    }
    deleteContact(number) {
        let URL = this.baseURL+ 'deletecontact/' +number;
        return this.http.delete(URL);
    }
}
