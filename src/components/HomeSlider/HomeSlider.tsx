import React, { useEffect, useState } from 'react';
import { TextSlider } from '../TextSlider';
import { Box, Container } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Movie } from '../interface';
import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
  bannerSlider: Movie[];
}

export function HomeSlider({ bannerSlider }: Props): JSX.Element {
  return (
    <React.Fragment>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ dynamicBullets: true }}
      >
        {bannerSlider.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Box
              display='flex'
              alignItems='center'
              w='100%'
              h='600px'
              bgImage={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              bgRepeat='no-repeat'
              bgSize='cover'
              bgPosition='center center'
            >
              <Container maxW='1400px'>
                <TextSlider movie={movie}></TextSlider>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
}
