import { QuranComponent } from './Core/layouts/Courses/quran/quran.component';
import { Routes } from '@angular/router';
import { HeroComponent } from './Core/layouts/hero/hero.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'courses/quran', component: QuranComponent },
];
