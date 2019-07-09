import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from './users.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})


export class UsersComponent implements OnInit{
    mainHeading;
    users;
    typeOfUser;
    constructor(private usersService: UsersService,
                private router: Router) {
                    this.mainHeading = 'List of Users';
                }

    public ngOnInit (){
        this.typeOfUser=localStorage.getItem('ROLE_TYPE');
        this.getUserList();
    }
    getUserList() {
        this.usersService.getUsersList().subscribe((res) => {
            this.users = res;
        })
    }
    registerUser() {
        this.router.navigate(['/register']);
    }
    removeUser (id) {
        if(this.typeOfUser == 'admin') {
            this.usersService.deleteUser(id).subscribe((res) => {
                if(res && res['message'])
                    alert(res['message']);
                this.getUserList();
            })
        }
        else
            alert('You dont have privilege to delete user.!');
    }
    editUser(_id){
        this.router.navigate(['/user', _id]);
    }

}

