import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {


private baseUrl = 'http://localhost:8000/api';
  LoginUser = (localStorage.getItem("token"));

  reqHeader: any = new HttpHeaders({
    Authorization: "Bearer " + this.LoginUser
  });


  constructor(private http: HttpClient) { }


  getUserInfo(name: string): Promise<any> {
    return this.http.get<any>(`${this.baseUrl}/profile`, { headers: this.reqHeader }).toPromise();
  }
}
