import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Game } from '../../../../shared/models/game';
import { GameService } from '../../../../core/services/game.service';
import { CartService } from '../../../../core/services/cart.service';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-top-sellers-games',
  imports: [ButtonModule, CommonModule, CardModule],
  templateUrl: './top-sellers-games.component.html',
})
export class TopSellersGamesComponent implements OnInit {
  games: Game[] = [];
  isLoading = true;

  constructor(
    private gameService: GameService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.gameService.getTopSellers().subscribe({
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

  addToCart(game: Game): void {
    this.cartService.addToCart(game);
  }
}
