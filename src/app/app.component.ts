import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from "./pages/home/components/hero-section/hero-section.component";
import { FeaturedGamesComponent } from "./pages/home/components/featured-games/featured-games.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSectionComponent, FeaturedGamesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'spice-market';
}
