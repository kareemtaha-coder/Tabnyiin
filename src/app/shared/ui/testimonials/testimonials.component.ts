import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { Testimonial } from '../../../Core/models/testimonial.model';
import { CommonModule } from '@angular/common';
import { SwiperContainer } from 'swiper/element';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule, TranslateModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestimonialsComponent implements OnInit, AfterViewInit {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'TESTIMONIALS.ITEMS.1.NAME',
      role: 'TESTIMONIALS.ITEMS.1.ROLE',
      avatar: '/hero-img.webp',
      content: 'TESTIMONIALS.ITEMS.1.CONTENT',
      rating: 5
    },
    {
      id: 2,
      name: 'TESTIMONIALS.ITEMS.2.NAME',
      role: 'TESTIMONIALS.ITEMS.2.ROLE',
      avatar: '/hero-img.webp',
      content: 'TESTIMONIALS.ITEMS.2.CONTENT',
      rating: 5
    },
    {
      id: 3,
      name: 'TESTIMONIALS.ITEMS.3.NAME',
      role: 'TESTIMONIALS.ITEMS.3.ROLE',
      avatar: '/hero-img.webp',
      content: 'TESTIMONIALS.ITEMS.3.CONTENT',
      rating: 5
    },
    {
      id: 4,
      name: 'TESTIMONIALS.ITEMS.4.NAME',
      role: 'TESTIMONIALS.ITEMS.4.ROLE',
      avatar: '/hero-img.webp',
      content: 'TESTIMONIALS.ITEMS.4.CONTENT',
      rating: 5
    },
    {
      id: 5,
      name: 'TESTIMONIALS.ITEMS.5.NAME',
      role: 'TESTIMONIALS.ITEMS.5.ROLE',
      avatar: '/hero-img.webp',
      content: 'TESTIMONIALS.ITEMS.5.CONTENT',
      rating: 5
    }
  ];

  @ViewChild('swiperEl', { static: false })
  swiperEl!: ElementRef<SwiperContainer>;

  constructor(private translate: TranslateService) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const swiperElement = this.swiperEl.nativeElement;
    swiperElement.initialize();
    const swiperParams = {
      slidesPerView: 1.1,
      spaceBetween: 20,
      loop: true,
      breakpoints: {
        '350': { slidesPerView: 1.1 },
        '640': { slidesPerView: 2.1 }
      },
    };
  }
}
