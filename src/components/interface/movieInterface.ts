import { tvShow } from './tvshowInterface';
import { details } from './detailsmovieinterface';
export interface Movie extends tvShow, details {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  genres: {
    name: string;
  }[];
}
