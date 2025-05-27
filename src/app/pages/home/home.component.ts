import { Component } from '@angular/core';
import { FeaturedGamesComponent } from "./components/featured-games/featured-games.component";
import { TopSellersGamesComponent } from "./components/top-sellers-games/top-sellers-games.component";

@Component({
  selector: 'app-home',
  imports: [FeaturedGamesComponent, TopSellersGamesComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
