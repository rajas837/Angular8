import { Component } from '@angular/core';
import { LoginModal } from './login.model';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cust',
    templateUrl: './login-form.component.html'
})


export class LoginFormComponent {

    mymodel = new LoginModal('admin@gmail.com', 'admin@123');
    constructor(private loginService: LoginService,
                private router: Router) {}

    loginForm(form: NgForm): void {
        this.loginService.loginUser(form.value)
            .subscribe((res) =>  this.loginService.getUserRole(res['token'])
            .subscribe((response) => this.validateUser(response['role'])));
    }

    validateUser(typeOfUser): void {
        localStorage.setItem('ROLE_TYPE', typeOfUser);
        if(typeOfUser == 'admin')
            this.router.navigate(['/users']);
        else
            this.router.navigate(['/contacts']);
    }

}
