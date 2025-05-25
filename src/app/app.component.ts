import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/ui/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./shared/ui/footer/footer.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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
  private translate = inject(TranslateService);

  constructor() {
    // Set default language
    this.translate.setDefaultLang('en');

    // Get browser language or use default
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/en|ar/) ? browserLang : 'en');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
