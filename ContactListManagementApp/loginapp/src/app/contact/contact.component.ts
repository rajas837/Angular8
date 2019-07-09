import { Component, OnInit } from '@angular/core';
//import { RegisterModal } from './register.model';
import { NgForm } from '@angular/forms';
import { ContactService } from './contact.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})


export class ContactComponent implements OnInit {
    contact;
    constructor(private contactService: ContactService,
                private router: Router, private activatedRoute: ActivatedRoute) {}
    
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            let id='5d22a47113afc5030505a275';
            this.contactService.getContact(id).subscribe((res) => {
                this.contact = res['contacts'];
                debugger
            }) 
        });
    } 
    UpdateForm(id, form: NgForm): void {
        this.contactService.updateContact(id,form.value)
            .subscribe((res) =>  {
                this.router.navigate(['/contacts'])
            });
    }
    
    goToContact() {
        this.router.navigate(['/contacts']);
    }
}
