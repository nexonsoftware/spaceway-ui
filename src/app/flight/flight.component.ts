import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  internationalSlider: OwlOptions = {
    autoplay:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: true,
    navSpeed: 700,
    autoplayTimeout:4000,
    navText: ['chevron_left', 'chevron_right'],
    margin:15,
    responsive: {
     
      400: {
        items: 4
      },
      800: {
        items:6
      }
    },
  }
  offerSlider: OwlOptions = {
    autoplay:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: true,
    navSpeed: 700,
    autoplayTimeout:4000,
    navText: ['chevron_left', 'chevron_right'],
    margin:15,
    responsive: {
      600: {
        items: 2
      },
      1200: {
        items: 3
      }
    },
  }
  offerOneSlider: OwlOptions = {
    autoplay:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: true,
    items: 1,
    navSpeed: 700,
    autoplayTimeout:4000,
    animateOut: 'fadeOut',
    navText: ['chevron_left', 'chevron_right'],
  }
}
