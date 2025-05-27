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
    title: 'Minecraft',
    price: 29.99,
    genre: 'Sandbox',
    platform: ['PC', 'PS5', 'Xbox', 'Switch'],
    releaseDate: '2024-05-20',
    cover: '/assets/games/minecraft.jpg',
    rating: 4.5,
    discount: 0,
    isFeatured: true,
    isTopSeller: true,
    isNewRelease: false,
  },
  {
    id: 5,
    title: 'The Legend of Zelda: Tears of the Kingdom',
    price: 69.99,
    genre: 'Adventure',
    platform: ['Switch'],
    releaseDate: '2024-05-01',
    cover: '/assets/games/tok.jpg',
    rating: 4.9,
    discount: 10,
    isFeatured: false,
    isTopSeller: true,
    isNewRelease: false,
  },
  {
    id: 6,
    title: 'Starfield',
    price: 59.99,
    genre: 'Sci-Fi RPG',
    platform: ['PC', 'Xbox'],
    releaseDate: '2024-04-10',
    cover: '/assets/games/starfield.jpg',
    rating: 4.3,
    discount: 15,
    isFeatured: false,
    isTopSeller: true,
    isNewRelease: false,
  },
  {
    id: 7,
    title: 'EA Sports FC 25',
    price: 69.99,
    genre: 'Sports',
    platform: ['PC', 'PS5', 'Xbox'],
    releaseDate: '2024-05-25',
    cover: '/assets/games/fc25.jpg',
    rating: 4.6,
    discount: 0,
    isFeatured: false,
    isTopSeller: true,
    isNewRelease: true,
  },
  {
    id: 8,
    title: 'Hogwarts Legacy',
    price: 59.99,
    genre: 'Action RPG',
    platform: ['PC', 'PS5', 'Xbox'],
    releaseDate: '2023-11-10',
    cover: '/assets/games/legacy.webp',
    rating: 4.7,
    discount: 30,
    isFeatured: false,
    isTopSeller: true,
    isNewRelease: false,
  },
  {
    id: 9,
    title: 'Final Fantasy XVI',
    price: 69.99,
    genre: 'RPG',
    platform: ['PS5'],
    releaseDate: '2024-06-15',
    cover: '/assets/games/xvi.jpg',
    rating: 4.4,
    discount: 5,
    isFeatured: false,
    isTopSeller: false,
    isNewRelease: true,
  },
  {
    id: 10,
    title: 'Super Mario Bros. Wonder',
    price: 59.99,
    genre: 'Platformer',
    platform: ['Switch'],
    releaseDate: '2024-04-22',
    cover: '/assets/games/wonder.webp',
    rating: 4.9,
    discount: 0,
    isFeatured: false,
    isTopSeller: true,
    isNewRelease: true,
  }
];

  getAllGames(): Observable<Game[]> {
    return of(this.mockGames).pipe(delay(500));
  }

  getGameById(id: number): Observable<Game> {
    const game = this.mockGames.find((g) => g.id === id);
    if (game) {
      return of(game).pipe(delay(300));
    }
    return throwError(() => new Error('Juego no encontrado'));
  }

  getGamesByPlataform(plataform: string): Observable<Game[]> {
    const games = this.mockGames.filter((g) => g.platform.includes(plataform));
    if (games.length > 0) {
      return of(games).pipe(delay(300));
    }
    return throwError(() => new Error('No hay juegos para esta plataforma'));
  }

  getTopSellers(): Observable<Game[]> {
    const topSellers = this.mockGames.filter((g) => g.isTopSeller);
    if (topSellers.length > 0) {
      return of(topSellers).pipe(delay(300));
    }
    return throwError(() => new Error('No hay Top vendidos'));
  }

  getFeaturedGames(): Observable<Game[]> {
    const featuredGames = this.mockGames.filter((g) => g.isFeatured);
    if (featuredGames.length > 0) {
      return of(featuredGames).pipe(delay(300));
    }
    return throwError(() => new Error('No hay juegos destacados'));
  }

  getNewReleases(): Observable<Game[]> {
    const newReleases = this.mockGames.filter((g) => g.isNewRelease);
    if (newReleases.length > 0) {
      return of(newReleases).pipe(delay(300));
    }
    return throwError(() => new Error('No hay juegos nuevos'));
  }

  getTopRated(): Observable<Game[]> {
    const topRated = this.mockGames.filter((g) => g.rating >= 4.5);
    if (topRated.length > 0) {
      return of(topRated).pipe(delay(300));
    }
    return throwError(() => new Error('No hay juegos bien valorados'));
  }
}
