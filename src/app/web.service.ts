import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly MAIL_URL
  constructor(private http: HttpClient) { 

    this.MAIL_URL = "https://admin.avision.co.in/adminpanel/api/"
   }

   post(uri: string, payload: Object, headers: HttpHeaders) {
    //
    return this.http.post(`${this.MAIL_URL}${uri}`, payload, { headers})
  }
}
