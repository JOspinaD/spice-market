import { Injectable } from '@angular/core';
import { Game } from '../../shared/models/game';
import { delay, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private mockGames: Game[] = [
    {
      id: 1,
      title: 'CyberPunk 2077',
      price: 59.99,
      genre: 'RPG',
      platform: ['PC', 'PS5'],
      releaseDate: '2024-03-15',
      cover: '/assets/games/cyberpunk-2077.webp',
      rating: 4.8,
      discount: 20,
      isFeatured: true,
      isTopSeller: true,
      isNewRelease: false,
    },
    {
      id: 2,
      title: 'Call of Duty: Modern Warfare II',
      price: 69.99,
      genre: 'Shooter',
      platform: ['PC', 'PS5', 'Xbox'],
      releaseDate: '2024-05-20',
      cover: '/assets/games/ModernWarfareII.jpg',
      rating: 4.5,
      discount: 0,
      isFeatured: true,
      isTopSeller: false,
      isNewRelease: false,
    },
    {
      id: 3,
      title: 'Dune Awakening',
      price: 69.99,
      genre: 'Shooter',
      platform: ['PC', 'PS5', 'Xbox'],
      releaseDate: '2024-05-20',
      cover: '/assets/games/dune.webp',
      rating: 4.5,
      discount: 0,
      isFeatured: true,
      isTopSeller: false,
      isNewRelease: true,
    },
    {
      id: 4,
      title: 'MineCraft',
      price: 69.99,
      genre: 'RPG',
      platform: ['PC', 'PS5', 'Xbox'],
      releaseDate: '2024-05-20',
      cover: '/assets/games/minecraft.jpg',
      rating: 4.5,
      discount: 0,
      isFeatured: true,
      isTopSeller: true,
      isNewRelease: false,
    }
  ];


  getAllGames(): Observable<Game[]>{
    return of (this.mockGames).pipe(delay(500));
  }

  getGameById(id: number): Observable<Game>{
    const game = this.mockGames.find((g) => g.id === id);
    if(game){
      return of(game).pipe(delay(300));
    }
    return throwError(() => new Error ('Juego no encontrado'));
  }

  getGamesByPlataform(plataform: string): Observable<Game[]>{
    const games = this.mockGames.filter((g) => g.platform.includes(plataform));
    if(games.length > 0){
      return of(games).pipe(delay(300));
    }
    return throwError(() => new Error ('No hay juegos para esta plataforma'));
  }

  getTopSellers(): Observable<Game[]>{
    const topSellers = this.mockGames.filter((g) => g.isTopSeller);
    if(topSellers.length > 0){
      return of(topSellers).pipe(delay(300));
    }
    return throwError(() => new Error ('No hay Top vendidos'));
  }

  getFeaturedGames(): Observable<Game[]>{
    const featuredGames = this.mockGames.filter((g) => g.isFeatured);
    if(featuredGames.length > 0){
      return of(featuredGames).pipe(delay(300));
    }
    return throwError(() => new Error ('No hay juegos destacados'));
  }

  getNewReleases(): Observable<Game[]>{
    const newReleases = this.mockGames.filter((g) => g.isNewRelease);
    if(newReleases.length > 0){
      return of(newReleases).pipe(delay(300));
    }
    return throwError(() => new Error ('No hay juegos nuevos'));
  }

  getTopRated(): Observable<Game[]>{
    const topRated = this.mockGames.filter((g) => g.rating >= 4.5);
    if(topRated.length > 0){
      return of(topRated).pipe(delay(300));
    }
    return throwError(() => new Error ('No hay juegos bien valorados'));
  }


}
