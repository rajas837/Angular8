import { Injectable } from '@angular/core';
import { ContactModal } from './contact.model';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ContactFormService {

    private url = 'http://localhost:5000/api/auth/registerContact';

    constructor(private http: HttpClient) {}

    registerContact( ruser: ContactModal) {
        // console.log('>>>>Data in service ', customer);
        return this.http.post(this.url, ruser );
    }
}
