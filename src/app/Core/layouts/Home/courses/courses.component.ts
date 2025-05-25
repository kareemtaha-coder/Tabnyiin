import { Component, inject } from '@angular/core';
import { ContactsService } from '../../../services/contacts.service';
import { ContactModalComponent } from "../../../../shared/ui/contact-modal/contact-modal.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  standalone: true,
  imports: [CommonModule, TranslateModule, ContactModalComponent]
})
export class CoursesComponent {
  contactService = inject(ContactsService)
}
