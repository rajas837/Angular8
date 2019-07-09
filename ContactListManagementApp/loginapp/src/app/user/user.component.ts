import { Component, OnInit } from '@angular/core';
//import { RegisterModal } from './register.model';
import { NgForm } from '@angular/forms';
import { UserService } from './user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})


export class UserComponent implements OnInit {
    mymodel;
    constructor(private userService: UserService,
                private router: Router, private activatedRoute: ActivatedRoute) {}
    
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            let id='5d22a47113afc5030505a275';
            this.userService.getUser(id).subscribe((res) => {
                this.mymodel = res;
            })
            //let date = params['startdate'];
            //console.log(date); // Print the parameter to the console. 
        });
    } 
    UpdateForm(id, form: NgForm): void {
        this.userService.updateUser(id,form.value)
            .subscribe((res) =>  {
                debugger
                this.router.navigate(['/users'])
            });
    }
    
    goToUser() {
        this.router.navigate(['/users']);
    }
}
