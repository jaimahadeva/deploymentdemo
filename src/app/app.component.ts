import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectss';
  submitted:boolean=false
  onSubmit(){
    this.submitted=true;
    alert("thank you for registration!!")
  }
}
