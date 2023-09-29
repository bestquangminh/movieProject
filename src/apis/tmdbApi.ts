import { axiosClient } from './axiosClient';
interface RequestParams {
  page: number;
}
export const tmdbApi = {
  getMoviesList: (params: RequestParams) => {
    const url = 'movie/popular';
    return axiosClient.get(url, { params });
  },
  getMoviesDetail: (movieId: number, params: RequestParams) => {
    const url = `movie/${movieId}`;
    return axiosClient.get(url, { params });
  },
  getMoviesRecommend: (movieID: number, params: RequestParams) => {
    const url = `movie/${movieID}/recommendations`;
    return axiosClient.get(url, { params });
  },
  getActors: (movieId: number, params: RequestParams) => {
    const url = `movie/${movieId}/credits`;
    return axiosClient.get(url, { params });
  },
  getTvshowsList: (params: RequestParams) => {
    const url = `tv/popular`;
    return axiosClient.get(url, { params });
  },
  getDiscoverMovie: (params: RequestParams) => {
    const url = 'discover/movie';
    return axiosClient.get(url, { params });
  },
  getSearchedMovie: (query: string, params: RequestParams) => {
    const url = `search/multi?query=${query}`;
    return axiosClient.get(url, { params });
  },
  getGenres: (params: RequestParams) => {
    const url = 'genre/movie/list';
    return axiosClient.get(url, { params });
  },
};
