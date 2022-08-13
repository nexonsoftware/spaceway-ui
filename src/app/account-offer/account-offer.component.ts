import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-account-offer',
  templateUrl: './account-offer.component.html',
  styleUrls: ['../../scss/account.scss','./account-offer.component.scss']
})
export class AccountOfferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  offerSlider: OwlOptions = {
    autoplay:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    nav: false,
    items: 1,
    navSpeed: 700,
    autoplayTimeout:4000,
    animateOut: 'fadeOut',
    navText: ['chevron_left', 'chevron_right'],
  }
}
