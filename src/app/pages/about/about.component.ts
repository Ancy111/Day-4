import { Component } from '@angular/core';
import { CarouselComponent } from "../../ui/carousel/carousel.component";
import { NavbarComponent } from "../../ui/navbar/navbar.component";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  imports: [CarouselComponent, NavbarComponent, CarouselModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
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

    slidesStore = [
      {
        id: '1', // Make sure id is a string
        src: 'assets/images/slide1.jpg',
        alt: 'Image 1 description',
        title: 'Slide 1 Title',
        description: 'This is the description for the first slide.'
      },
      {
        id: '2', // Make sure id is a string
        src: 'assets/images/slide2.jpg',
        alt: 'Image 2 description',
        title: 'Slide 2 Title',
        description: 'This is the description for the second slide.'
      },
      {
        id: '3', // Make sure id is a string
        src: 'assets/images/slide3.jpg',
        alt: 'Image 3 description',
        title: 'Slide 3 Title',
        description: 'This is the description for the third slide.'
      }
    ];
  
  }

