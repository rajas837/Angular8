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
    data = {
        "contacts": [
            {
                "type": "mobile",
                "number": "4545545",
                "address": "US"
            },
            {
                "type": "phone",
                "number": "22222222",
                "address": "UK"
            },
            {
                "type": "mobile",
                "number": "7777",
                "address": "Bangalore"
            },
            {
                "type": "phone",
                "number": "33434343",
                "address": "chennai"
            }
        ],
        "updated_date": "2019-07-08T01:33:00.844Z",
        "_id": "5d229d4ce2f74002b2798b82",
        "name": "Samyyyyyyyyy",
        "email": "sam@gmail.com",
        "password": "$2a$08$zsW5pr5p2Q7aiJ7lWuC9w.6Naa6i8zJH2rWkuX6fTSGW8vdNKM43K",
        "role": "user",
        "__v": 0
    }
    constructor(private usersService: UsersService,
                private router: Router) {
                    this.mainHeading = 'List of Users'
                    this.updateData('5d229d4ce2f74002b2798b82', this.data)
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
    updateData (id, data) {
        this.usersService.updateUser(id, data).subscribe((res) => {
            debugger
            console.log('updated ')
        })
    }
}
