import { Component, inject } from '@angular/core';
import { ContactsService } from '../../../services/contacts.service';
import { ContactModalComponent } from '../../../../shared/ui/contact-modal/contact-modal.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SafePipe } from '../../../../shared/pipes/safe.pipe';

@Component({
  selector: 'app-quran',
  templateUrl: './quran.component.html',
  styleUrl: './quran.component.css',
  standalone: true,
  imports: [CommonModule, TranslateModule, ContactModalComponent, SafePipe]
})
export class QuranComponent {
  contactService = inject(ContactsService);
}
