import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../../../shared/ui/button/button.component";
import { ContactFormModalComponent } from "../../../../shared/ui/contact-modal/contact-modal.component";
import { ContactsService } from '../../../services/contacts.service';
import { async } from 'rxjs';
import { CoursesComponent } from "../courses/courses.component";
import { AboutComponent } from "../about/about.component";
import { TestimonialsComponent } from "../../../../shared/ui/testimonials/testimonials.component";
import { SwiperThumpsTestimonialComponent } from "../swiper-thumps-testimonial/swiper-thumps-testimonial.component";
import { FooterComponent } from "../../../../shared/ui/footer/footer.component";

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent, ContactFormModalComponent, CoursesComponent, AboutComponent, TestimonialsComponent, SwiperThumpsTestimonialComponent, FooterComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  contactService = inject(ContactsService);


}
