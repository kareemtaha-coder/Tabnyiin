import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/ui/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./shared/ui/footer/footer.component";
import { TranslateModule } from '@ngx-translate/core';
import LanguageService from './Core/services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    CommonModule,
    FooterComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  private languageService = inject(LanguageService);

  constructor() {
    // Language service will handle initialization
    // It will load the stored language preference or default to English
  }

  switchLanguage(lang: string) {
    this.languageService.setLanguage(lang);
  }
}
