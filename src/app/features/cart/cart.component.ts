import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { Game } from '../../shared/models/game';
import { Router } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CardModule, CommonModule, ButtonModule, TableModule, AvatarModule],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cartItems: Game[] = [];

   constructor(private router: Router, private cartService: CartService) {}

   ngOnInit(): void {
       this.cartService.getCartItems().subscribe(items => {
          this.cartItems = items;
       })
   }

  calculateTotal(): number {
    if (!this.cartItems) return 0;
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  removeItem(id: number): void{
    return this.cartService.removeFromCart(id);
  }

   redirectToHome() {
    this.router.navigate(['/']);
  }
}
