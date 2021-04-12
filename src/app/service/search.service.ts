import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from  "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient:HttpClient) { }

  getSearchResults(queryString = "") :  Observable<any> {
    let url = "https://jsonplaceholder.typicode.com/comments?";
    return this.httpClient.get(url + queryString);
  }
}
