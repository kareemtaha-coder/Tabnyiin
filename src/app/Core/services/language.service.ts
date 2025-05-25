import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly LANGUAGE_KEY = 'preferred_language';
  private currentLang = new BehaviorSubject<string>('en');
  private readonly SUPPORTED_LANGUAGES = ['en', 'ar'];
  private translate = inject(TranslateService);

  constructor() {
    this.initLanguage();
  }

  private initLanguage(): void {
    // Set default language
    this.translate.setDefaultLang('en');

    // Get stored language
    const storedLang = this.getStoredLanguage();

    // Set initial language
    if (storedLang) {
      this.setLanguage(storedLang);
    } else {
      // Try to get browser language
      const browserLang = this.translate.getBrowserLang() || 'en';
      const initialLang = this.SUPPORTED_LANGUAGES.includes(browserLang) ? browserLang : 'en';
      this.setLanguage(initialLang);
    }
  }

  private getStoredLanguage(): string | null {
    try {
      return localStorage.getItem(this.LANGUAGE_KEY);
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  }

  private setStoredLanguage(lang: string): void {
    try {
      localStorage.setItem(this.LANGUAGE_KEY, lang);
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  }

  setLanguage(lang: string): void {
    // Validate language
    if (!this.SUPPORTED_LANGUAGES.includes(lang)) {
      console.warn(`Unsupported language: ${lang}. Defaulting to English.`);
      lang = 'en';
    }

    // Store language preference
    this.setStoredLanguage(lang);

    // Update translation service
    this.translate.use(lang);

    // Update current language subject
    this.currentLang.next(lang);

    // Update document direction and language
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // Add language class to body for styling
    document.body.classList.remove('ltr', 'rtl');
    document.body.classList.add(lang === 'ar' ? 'rtl' : 'ltr');
  }

  getCurrentLanguage(): string {
    return this.currentLang.value;
  }

  getCurrentLanguageObservable(): Observable<string> {
    return this.currentLang.asObservable();
  }

  toggleLanguage(): void {
    const newLang = this.currentLang.value === 'en' ? 'ar' : 'en';
    this.setLanguage(newLang);
  }

  isRTL(): boolean {
    return this.currentLang.value === 'ar';
  }

  getSupportedLanguages(): string[] {
    return [...this.SUPPORTED_LANGUAGES];
  }
}

export default LanguageService;
