import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {
  locations: any = []
  tabs: any = []
  flightList: any = []
  tabList: any = []
  tabData: any = []
  flightDetails: any =[]

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.locations = JSON.parse(localStorage.getItem("locations") || '') || [];
    this.tabs = JSON.parse(localStorage.getItem("userrequest") || '') || [];
    this.flightList = JSON.parse(localStorage.getItem("multiflight") || '') || [];

    for (let index = 0; index < this.tabs.length; index++) {
      let flyFrom = this.locations.locations.filter((citys: any) => {
        return citys.id.toLowerCase().includes(this.tabs[index].flyFrom.toLowerCase()) || citys.city.code.toLowerCase().includes(this.tabs[index].flyFrom.toLowerCase())
      }).map((option: any) => {
        return option.name
      })
      let flyTo = this.locations.locations.filter((citys: any) => {
        return citys.id.toLowerCase().includes(this.tabs[index].to.toLowerCase()) || citys.city.code.toLowerCase().includes(this.tabs[index].to.toLowerCase())
      }).map((option: any) => {
        return option.name
      })
      this.tabList.push({ flyFrom, flyTo, flyFromCode: this.tabs[index].flyFrom.toLowerCase(), flyToCode: this.tabs[index].to.toLowerCase() })
    }
    this.tabData = this.flightList.map((flight: any) =>
      flight.route.filter((citys: any) => {
        return citys.flyFrom.toLowerCase() === this.tabList[0].flyFromCode && citys.flyTo.toLowerCase() === this.tabList[0].flyToCode
      })
    );

  }

  getDuration(startTime: any, endTime: any) {
    let timeStart = new Date(startTime).getTime();
    let timeEnd = new Date(endTime).getTime();
    const hours = (Math.abs(timeEnd - timeStart) / (1000 * 60 * 60) % 24);
    return hours.toFixed(2)

  }

  selectData(event: MatTabChangeEvent) {
    this.tabData = []
    this.tabData = this.flightList.map((flight: any) =>
      flight.route.filter((citys: any) => {
        return citys.flyFrom.toLowerCase() === this.tabList[event.index].flyFromCode && citys.flyTo.toLowerCase() === this.tabList[event.index].flyToCode
      })
    );
  }

  bookFlight(){

      this.router.navigate(['/traveller-details'])

  }

}
