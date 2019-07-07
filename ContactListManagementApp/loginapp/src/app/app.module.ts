import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginService } from './login-form/login.service';
import { ProfileComponent } from './profile/profile.component';
import { RegisterService } from './register-form/register.service';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsService } from './contacts/contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LoginFormComponent,
    ProfileComponent,
    UsersComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LoginService,
    RegisterService,
    UsersService,
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
