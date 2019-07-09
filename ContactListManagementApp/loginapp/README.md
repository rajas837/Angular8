# Loginapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

-----------------
Mongodb :

Install:
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

brew tap mongodb/brew
brew install mongodb-community@4.0
brew services start mongodb-community@4.0
brew services list

>>Connect mongodb shell

mongo
use aprang --> where <aprang> database name
show collections
users --> <users> collection name

>> List all users

db.users.find({})
>> Remove nested document

{ "_id" : ObjectId("5d22a47113afc5030505a275"), "contacts" : [ { "type" : "mobile", "number" : "4545545", "address" : "US" }, { "type" : "phone", "number" : "22222222", "address" : "UK" }, { "type" : "mobile", "number" : "7777", "address" : "Bangalore" } ], "updated_date" : ISODate("2019-07-08T02:03:29.632Z"), "name" : "Sam", "email" : "sam@gmail.com", "password" : "$2a$08$fZhopJ.ZMpzABkrojDah9uGo0FHZYwJwfjOFBy4cDS9PDhFShMNcy", "role" : "user", "__v" : 0 }


db.users.update({name: 'Sam'},{$pull: {'contacts': {'number':'7777'}}})

>> update nested document
db.users.update({name: 'Sam'},{$set: {'contacts': { "type" : "mobile", "number" : "7777", "address" : "Bangalore" }}})

--------------------