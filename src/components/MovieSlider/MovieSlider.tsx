import {
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Card,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Movie } from '../interface';
import { MovieCard } from '../MovieCard';
interface Props {
  movies: Movie[];
  heading: string;
}
export function MovieSlider({ movies, heading }: Props): JSX.Element {
  return (
    <>
      <Container maxW='1440px'>
        <Heading p='24px 24px 24px 0' mt='10px' size='lg'>
          {heading}
        </Heading>
        <Swiper grabCursor={true} slidesPerView={5} spaceBetween={30}>
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
}
