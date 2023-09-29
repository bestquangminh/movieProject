import { Movie } from "./models/movieInterface"
export const apiConfig: Movie = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '679b964c63d2835b6ef1ae64324be82b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}
