import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {
   businessDispaly:any=[];
  constructor(private http:ApiserviceService) { }
  
  ngOnInit(): void {
    this.http.business().subscribe(
      (result)=>{
        console.log(result);
        this.businessDispaly=result.articles;
      }
    );
  }

}
