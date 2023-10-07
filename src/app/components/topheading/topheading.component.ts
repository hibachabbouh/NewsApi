import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {
   topHeadingDisplay:any=[];
  constructor(private http:ApiserviceService) { }

  ngOnInit(): void {
    this.http.topHeading().subscribe(
      (result)=>{
        console.log(result);
        this.topHeadingDisplay=result.articles;
      }
    );
  }

}
