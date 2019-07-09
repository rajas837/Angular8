import { Component } from '@angular/core';
import { ContactModal } from './contact.model';
import { NgForm } from '@angular/forms';
import { ContactFormService } from './contact-form.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html'
})


export class ContactFormComponent {

    mymodel = new ContactModal('phone', '9454678', 'UK');


    constructor(private contactService: ContactFormService,
                private router: Router) {}

    RegsiterForm(form: NgForm): void {
        this.contactService.registerContact(form.value)
            .subscribe((res) =>  this.router.navigate(['/contacts']));
    }
    goToUser() {
        this.router.navigate(['/contacts']);
    }
}
