import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {

  constructor(private http: HttpClient) { }

  searchLocation(){    
    return this.http.get(`https://tequila-api.kiwi.com/locations/dump?location_types=airport`)
  }

  searchFlight(flyFrom: any, flyTo: any, dateFrom: any, dateTo: any){    
    return this.http.get(`https://tequila-api.kiwi.com/v2/search?fly_from=${flyFrom}&fly_to=${flyTo}&dateFrom=${dateFrom}&dateTo=${dateTo}`)
  }
  searchMultiFlight(request:any){     
    return this.http.post(`https://tequila-api.kiwi.com/v2/flights_multi`,{ 
      "requests":[...request]
    }
    )
  }
}
