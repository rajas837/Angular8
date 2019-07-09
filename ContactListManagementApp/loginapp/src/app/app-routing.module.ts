import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileGaurdService } from './profile-guard.service';
import { RegisterGaurdService } from './register-gaurd.service';
import { UsersComponent } from './users/users.component';
import { ContactsComponent } from './contacts/contacts.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
const routes: Routes = [
  {path: 'register', canActivate: [RegisterGaurdService], component: RegisterFormComponent },
  {path: 'profile', canActivate: [ProfileGaurdService], component: ProfileComponent },
  {path: 'login', component: LoginFormComponent },
  {path: 'users', component: UsersComponent },
  {path: 'contacts', component: ContactsComponent},
  { path: 'user/:_id', component: UserComponent },
  { path: 'contact/:_id', component: ContactComponent },
  { path: 'registerContact', component: ContactFormComponent },
  {path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProfileGaurdService, RegisterGaurdService ]
})
export class AppRoutingModule { }
