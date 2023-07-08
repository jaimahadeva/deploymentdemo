import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-subclustermaster',
  templateUrl: './subclustermaster.component.html',
  styleUrls: ['./subclustermaster.component.css']
})
export class SubclustermasterComponent implements OnInit {
  value_edit:boolean=false;
  employeename:any;
  designation:any;
  role:any;
  location:any;
  p:number=1;
  cn:number=1;
  a:number=1;
  temp_searchvalues:any=[{
    val1:1,
    val2:2
  }]
  val1: number;
  constructor() { }

  ngOnInit(): void {
  }
forward():void{
  for(let a of this.temp_searchvalues){
    if(a.val1=1){
      this.val1=7;
    }
  }
}
}
