import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  private apiUrl = 'https://api.example.com/endpoint'; 
  constructor(private http: HttpClient) { }

  sendRequest(payload: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, payload);
  }

  postApiCall(endPoint : string, formData:any){
    let url = this.apiUrl + '/' + endPoint;
   return this.http.post(url,formData)

} 
}

