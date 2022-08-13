import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  hotelSearchMailInfo(name: any,email: any,phone: any,city: any,start_date:any,end_date: any,nationality: any,resisdential_country: any,_hotel_travellers: any){
     let headers = new  HttpHeaders ({'Content-Type': 'application/json'})
      return this.http.post(`https://ssrtest.avision.co.in/hotelSerachmailTest`,{

          "name": name,
          "email": email,
          "phone": phone,
          "city": city,
          "start_date": start_date,
          "end_date": end_date,
          "nationality": nationality,
          "resisdential_country": resisdential_country,
          "_hotel_travellers": _hotel_travellers
      },{headers})  
  }
}
