import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { Game } from '../../../../shared/models/game';
import { GameService } from '../../../../core/services/game.service';

@Component({
  selector: 'app-featured-games',
  imports: [ButtonModule, CarouselModule, CommonModule],
  templateUrl: './featured-games.component.html',
})
export class FeaturedGamesComponent implements OnInit {
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
