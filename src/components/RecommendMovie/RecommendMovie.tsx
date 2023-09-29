import React from 'react';
import { Movie } from '../interface';
import { MovieCard } from '../MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Heading } from '@chakra-ui/react';
interface Props {
  recommendMovie: Movie[];
}

export function RecommendMovie({ recommendMovie }: Props): JSX.Element {
  return (
    <React.Fragment>
      <Heading fontSize='lg'>Recommendation:</Heading>
      <Swiper slidesPerView={4} spaceBetween={30}>
        {recommendMovie.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
}
