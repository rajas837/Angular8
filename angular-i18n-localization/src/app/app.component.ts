import { Component, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'i18nDemo';
  date;
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'Hindi' },
    { code: 'es', label: 'Spanish' }

  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string) {
    this.date = "12/12/2016 12:30PM"
   }
}
