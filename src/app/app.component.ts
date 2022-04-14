import { Component } from '@angular/core';

// type TUser = {
//   name : "string";
//   age : "number";
//   bio : "string";
//   gender : "string";
// }


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
  // name="";
  // age ="";
  // bio ="";
  // gender ="";
  

  handleUser(event : MouseEvent)
  {
    event.preventDefault();
    

    
  
  }
}