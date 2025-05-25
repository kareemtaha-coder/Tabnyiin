import { Component, inject } from '@angular/core';
import { ContactsService } from '../../../services/contacts.service';
import { CoursesComponent } from "../courses/courses.component";
import { AboutComponent } from "../about/about.component";
import { TestimonialsComponent } from "../../../../shared/ui/testimonials/testimonials.component";
import { SwiperThumpsTestimonialComponent } from "../swiper-thumps-testimonial/swiper-thumps-testimonial.component";
import { TranslateModule } from '@ngx-translate/core';
import { ContactModalComponent } from "../../../../shared/ui/contact-modal/contact-modal.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    ContactModalComponent,
    CoursesComponent,
    AboutComponent,
    TestimonialsComponent,
    SwiperThumpsTestimonialComponent,
    TranslateModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  contactService = inject(ContactsService);
}
