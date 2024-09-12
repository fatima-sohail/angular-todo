import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl = 'http://localhost:8081/api/getItems/';

  constructor(private http: HttpClient) { }

  getItems(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
}
