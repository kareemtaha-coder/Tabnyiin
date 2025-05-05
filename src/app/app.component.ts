import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/ui/navbar/navbar.component";
import { HeroComponent } from "./Core/layouts/hero/hero.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tabnyiin';
}
