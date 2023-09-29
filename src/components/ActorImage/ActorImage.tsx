import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image, Text, Heading } from '@chakra-ui/react';
import { Actor } from '../interface';
import 'swiper/css';

interface Props {
  actors: Actor[];
}
export function ActorImage({ actors }: Props): JSX.Element {
  return (
    <React.Fragment>
      <Heading fontSize='lg'>Cast:</Heading>
      <Swiper slidesPerView={5} spaceBetween={30}>
        {actors.map((actor) => (
          <SwiperSlide key={actor.id}>
            <div>
              <Image
                borderRadius='full'
                boxSize='150px'
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w154${actor.profile_path}`
                    : 'https://www.movienewz.com/img/films/poster-holder.jpg'
                }
                alt={actor.name}
              />
              <Text fontSize='lg'>{actor.name}</Text>
              <Text color='#b4b4b4' fontSize='xs'>
                {actor.character}
              </Text>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
}
