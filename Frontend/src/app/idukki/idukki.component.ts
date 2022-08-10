import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //added
import { GuidesService } from '../guides.service'; //added

@Component({
  selector: 'app-idukki',
  templateUrl: './idukki.component.html',
  styleUrls: ['./idukki.component.css']
})
export class IdukkiComponent implements OnInit {

  guides: any; //addede
  constructor(
    private guideservice:GuidesService   //added
    ,private routes:Router   //added
    ) { }

  ngOnInit(): void {
    this.loadGuide(); //added
  }

  loadGuide(){   //addded
    this.guideservice.listGuide().subscribe((data)=>{   //addded
      this.guides = data;   //addded
    })   //addded
  }   //addded
}
