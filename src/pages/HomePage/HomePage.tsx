import React, { useEffect, useState } from 'react';
import { HomeSlider } from '../../components/HomeSlider';
import { MovieSlider } from '../../components/MovieSlider';
import { tmdbApi } from '../../apis/tmdbApi';
import { Movie } from '../../components/interface/movieInterface';
export function HomePage(): JSX.Element {
  const [bannerSlider, setBannerSlider] = useState<Movie[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [tvShows, setTvShows] = useState<Movie[]>([]);
  useEffect(() => {
    async function fetchMovies() {
      const params = { page: 1 };
      try {
        const res = await tmdbApi.getMoviesList(params);
        const tvShows = await tmdbApi.getTvshowsList(params);
        setTvShows(tvShows.data.results);
        setMovies(res.data.results);
        const data = res.data.results.slice(0, 4);
        data.forEach(async (movie: Movie) => {
          const movieDetails = await tmdbApi.getMoviesDetail(movie.id, params);
          setBannerSlider((p) => {
            return [...p, movieDetails.data];
          });
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovies();
  }, []);
  return (
    <div className='home'>
      <HomeSlider bannerSlider={bannerSlider}></HomeSlider>
      <MovieSlider movies={movies} heading='Trending Movies'></MovieSlider>
      <MovieSlider movies={tvShows} heading='Trending TV Shows'></MovieSlider>
    </div>
  );
}
