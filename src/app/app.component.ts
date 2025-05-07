import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/ui/navbar/navbar.component';
import { HeroComponent } from './Core/layouts/hero/hero.component';
import { ButtonComponent } from './shared/ui/button/button.component';
import { TestimonialsComponent } from './shared/ui/testimonials/testimonials.component';
import { SwiperContainer } from 'swiper/element';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    ButtonComponent,
    TestimonialsComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('thumbsContainer', { static: true })
  thumbsContainer!: ElementRef<SwiperContainer>;

  @ViewChild('mainContainer', { static: true })
  mainContainer!: ElementRef<SwiperContainer>;

  images = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
  ];

  /** CSS selector to link thumbs → main */
  thumbsSelector = '.thumbs-swiper';

  ngAfterViewInit() {
    const swiperParams = {
      slidesPerView: 2,
      navigator:true,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
      },
      on: {
        init() {
          // ...
        },
      },
    };
    const main= this.mainContainer.nativeElement;
    Object.assign(main, swiperParams);
    // initialize thumbnails first
    this.thumbsContainer.nativeElement.initialize();
    // then initialize main gallery (so thumbs are in place)

    this.mainContainer.nativeElement.initialize();
  }
}
