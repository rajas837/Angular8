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
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact/contact.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactFormService } from './contact-form/contact-form.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LoginFormComponent,
    ProfileComponent,
    UsersComponent,
    ContactsComponent,
    UserComponent,
    ContactComponent,
    ContactFormComponent
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
    ContactsService,
    UserService,
    ContactService,
    ContactFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
