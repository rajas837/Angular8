import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactsService } from './contacts.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-contact',
    templateUrl: './contacts.component.html'
})


export class ContactsComponent implements OnInit{
    mainHeading;
    contacts;

    constructor(private contactsService: ContactsService,
                private router: Router) {
                    this.mainHeading = 'Contact List';
                }
    public ngOnInit (){
        this.contactsService.getUserDetails().subscribe((res) => {
            if(res && res['contacts'])
                this.contacts = res['contacts']
        })
        // this.contactsService.getContactList().subscribe((res) => {
        //     this.contacts = res;
        // })
    }

}
