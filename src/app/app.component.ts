import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  signal,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/ui/navbar/navbar.component';
import { HeroComponent } from './Core/layouts/Home/hero/hero.component';
import { ButtonComponent } from './shared/ui/button/button.component';
import { TestimonialsComponent } from './shared/ui/testimonials/testimonials.component';
import { SwiperContainer } from 'swiper/element';
import { CommonModule } from '@angular/common';
import { Subject, fromEvent, takeUntil } from 'rxjs';
import { ContactFormData } from './shared/ui/contact-modal/contact-modal.component';
import { ContactsService } from './Core/services/contacts.service';
import { FooterComponent } from "./shared/ui/footer/footer.component";

/**
 * Interface for Testimonial data structure
 */
interface Testimonial {
  name: string;
  avatar: string;
  image: string;
  shortQuote: string;
  mainQuote: string;
  course: string;
  rating: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    ButtonComponent,
    TestimonialsComponent,
    CommonModule,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {

}
