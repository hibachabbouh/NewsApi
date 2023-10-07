import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private http:ApiserviceService) { }
    techNewsDispaly:any=[]; 
  ngOnInit(): void {
     this.http.technology().subscribe(
      (result)=>{
        console.log(result);
        this.techNewsDispaly=result.articles;
      }

     );

  }

}
