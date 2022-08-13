import { ViewportScroller } from "@angular/common";
import { Component, OnInit,HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isSticky: boolean = false;
  asp=window.pageYOffset;
  sp : any = 0;
  fsp : any = 0;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.asp = window.pageYOffset;
    this.sp = {'top' : this.asp / 1.5 + "px", 'position' : 'relative'};
    this.fsp = {'top' : this.asp * 0.5 + "px"};
    console.log(this.asp/1.5)

  }
  bannerSlider: OwlOptions = {
    autoplay:true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplayTimeout:4000,
    items: 1,
    nav: true,
    animateOut: 'fadeOut'

  }
  offerSlider: OwlOptions = {
    autoplay:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    nav: true,
    items: 1,
    navSpeed: 700,
    autoplayTimeout:4000,
    animateOut: 'fadeOut',
    navText: ['chevron_left', 'chevron_right'],
  }
  dealsSlider: OwlOptions = {
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
    margin:30,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      }
    },
  }

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }
  goDown1() {
    this.scroller.scrollToAnchor("targetRed");
    
  }
}
