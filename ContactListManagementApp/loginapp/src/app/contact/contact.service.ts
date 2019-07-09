import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ContactService {

    private baseURL = 'http://localhost:5000/api/auth/';

    constructor(private http: HttpClient) {}
    
    getContact(id) {
        let URL = this.baseURL + 'contact/' + id;
        return this.http.get(URL);
    }
    updateContact(id, user) {
        let URL = this.baseURL + 'contact/' + id;
        return this.http.put(URL, user);
    }
}
