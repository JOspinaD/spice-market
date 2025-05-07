import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Game } from '../../../../shared/models/game';
import { GameService } from '../../../../core/services/game.service';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule, CarouselModule, ButtonModule],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent implements OnInit {
  games: Game[] = [];
  isLoading = true;

  constructor(private gameService: GameService) {}
  ngOnInit(): void {
    this.gameService.getFeaturedGames().subscribe({
      next: (games) => {
        this.games = games;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching featured games:', error);
        this.isLoading = false;
      },
    });
  }
}
