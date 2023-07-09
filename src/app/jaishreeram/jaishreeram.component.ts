import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jaishreeram',
  templateUrl: './jaishreeram.component.html',
  styleUrls: ['./jaishreeram.component.css']
})
export class JaishreeramComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submitNme1:boolean=false
  submitNme(){
    alert("submitted successfully");
    this.submitNme1=true;
  }

}
