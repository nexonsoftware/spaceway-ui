import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  customOptionss: OwlOptions = {
    autoplay:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoplayTimeout:5000,
    navText: ['p', 'n'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }
  selectedCars = [3,5];
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab', disabled: true },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
    { id: 5, name: 'Chevrolet' },
    { id: 6, name: 'Van' },
    { id: 7, name: 'BMW' },
    { id: 8, name: 'Hatchback' },
    { id: 9, name: 'Sedan' },
    { id: 10, name: 'SUV' },
    { id: 11, name: 'Crossover' },
    { id: 12, name: 'Skoda' },
    { id: 13, name: 'Mercedes-benz' },
    { id: 14, name: 'Toyota' },
    { id: 15, name: 'Honda' },
    { id: 16, name: 'Maruti Suzuki' },
  ];
}
