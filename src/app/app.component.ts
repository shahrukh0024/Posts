import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  
  name : "string";
  age : "number";
  bio : "string";
  gender : "string";

  handleUser(event : MouseEvent)
  {
    console.log(event)
  }
}