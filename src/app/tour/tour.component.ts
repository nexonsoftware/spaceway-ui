import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  holidaySlider: OwlOptions = {
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
        items: 3
      },
      800: {
        items: 5
      }
    },
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
}
