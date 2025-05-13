import { QuranComponent } from './Core/layouts/Courses/quran/quran.component';
import { Routes } from '@angular/router';
import { HeroComponent } from './Core/layouts/Home/hero/hero.component';
import { ArabicComponent } from './Core/layouts/Courses/arabic/arabic.component';
import { IslamicComponent } from './Core/layouts/Courses/islamic/islamic.component';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ContactsDashboardComponent } from './features/dashboard/contacts-dashboard/contacts-dashboard.component';
import { authGuard } from './Core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'courses/quran', component: QuranComponent },
  { path: 'courses/arabic', component: ArabicComponent },
  { path: 'courses/islamic', component: IslamicComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', canActivate:[authGuard],
    component: DashboardComponent,
    children: [{ path: 'contact', component: ContactsDashboardComponent  },
    { path: '', component: ContactsDashboardComponent  }
  ],

  },
];
