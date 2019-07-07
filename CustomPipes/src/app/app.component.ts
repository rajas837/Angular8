import { Component } from '@angular/core';
import * as moment from 'moment';
import { debug } from 'util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CustomPipes';
  now;
  selectedFormat;
  types = [
    {id : 1, format : 'MMMM Do YYYY, h:mm:ss a'},
    {id : 2, format : 'dddd'},
    {id : 3, format : 'MMM Do YY'},
    {id : 4, format : 'YYYY [escaped] YYYY'},
    {id : 5, format : 'YYYYMMDD'},
    {id : 6, format : 'from now'}
  ]
  constructor(){
    this.now = moment();
  }
  onSelect(event){
    this.selectedFormat = event.target.value;
  }
}
