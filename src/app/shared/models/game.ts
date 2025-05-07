export interface Game {
  id: number;
  title: string;
  price: number;
  genre: string;
  platform: string[];
  releaseDate: string;
  cover: string;
  rating: number;
  discount?: number;
  isFeatured?: boolean;
  isTopSeller?: boolean;
  isNewRelease?: boolean;
}
