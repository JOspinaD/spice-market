import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layouts/navbar/navbar.component";
import { DuneBackgroundComponent } from "./layouts/dune-background/dune-background.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, DuneBackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'spice-market';
}
