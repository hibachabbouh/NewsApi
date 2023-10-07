import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
  techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
  businessApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
  constructor(private http:HttpClient) { }

  topHeading():Observable<any>
  {
    return this.http.get(this.newsApiUrl);
  }
  technology():Observable<any>
  {
    return  this.http.get(this.techApiUrl);
  }
  business():Observable<any>
  {
    return this.http.get(this.businessApiUrl);
  }
}
