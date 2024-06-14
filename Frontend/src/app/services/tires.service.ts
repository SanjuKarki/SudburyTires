import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiresService {

  private apiUrl = 'https://localhost:44376';
  constructor(private http: HttpClient) { }

  getTires(searchKey: string): Observable<any> { 
    let params = new HttpParams();
    if (searchKey) {
      params = params.set('searchKey', searchKey);
    }
    return this.http.get<any>(`${this.apiUrl}/api/Tires/getTires`, { params });
  }

}
