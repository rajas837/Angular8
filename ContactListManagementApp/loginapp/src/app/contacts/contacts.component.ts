import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactsService } from './contacts.service';
import { Router } from '@angular/router';
import { OriginalSource } from 'webpack-sources';

@Component({
    selector: 'app-contact',
    templateUrl: './contacts.component.html'
})


export class ContactsComponent implements OnInit{
    mainHeading;
    contacts;
    datasource;

    constructor(private contactsService: ContactsService,
                private router: Router) {
                    this.mainHeading = 'Contact List';
                }
    public ngOnInit (){
        this.getContactList();
    }
    getContactList(){
        this.contactsService.getUserDetails().subscribe((res) => {
            if(res && res['contacts'])
                this.contacts = res['contacts']
                this.datasource = res;
        })
    }
    removeContact (number) {
        this.contactsService.deleteContact(number).subscribe((res) => {
        if(res && res['message'])
            alert(res['message']);
        this.getContactList();
        })
    }
    editContact(number){
        let id = this.datasource['_id'];
        this.router.navigate(['/contact', id]);
    }
    addContact(){
        this.router.navigate(['/registerContact']);
    }
}
