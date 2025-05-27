import { Injectable } from '@angular/core';
import { Game } from '../../shared/models/game';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Game[] = [];
  private cartItemSubject = new BehaviorSubject<Game[]>([]);

  getCartItems(): Observable<Game[]> {
    return this.cartItemSubject.asObservable();
  }

  addToCart(game: Game): void{
    this.cartItems.push(game);
    this.cartItemSubject.next(this.cartItems);
  }

  removeFromCart(gamId: number): void {
    this.cartItems = this.cartItems.filter(game => game.id !== gamId);
    this.cartItemSubject.next(this.cartItems);
  }

  clearCart(): void{
    this.cartItems = [];
    this.cartItemSubject.next(this.cartItems);
  }

  getTotal(): number{
    return this.cartItems.reduce((total,item) => total + item.price, 0);
  }
}
