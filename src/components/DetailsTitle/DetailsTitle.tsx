import React from 'react';
import { Heading, Text, Flex, Image, Box } from '@chakra-ui/react';
import { CustomButton } from '../CustomButton';
import { TagGenre } from '../TagGenre';
import { Movie } from '../interface';
interface Props {
  detailsMovie: Movie;
}
export function DetailsTitle({ detailsMovie }: Props): JSX.Element {
  return (
    <React.Fragment>
      <Heading p='8px 0' size='2xl'>
        {detailsMovie.title}
      </Heading>
      <Text color='#cfc5c2' fontSize='sm'>
        {detailsMovie.tagline}
      </Text>
      <Text>{detailsMovie.runtime} minutes</Text>
      <Flex alignItems='center' gap={3}>
        {detailsMovie.vote_average ? (
          <>
            <Image
              borderRadius='8'
              w='40px'
              h='20px'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI55WOPVO8z0i53N-8-AZClFG3TbIEBoze-77Io5fwM1KP5v7U2bAvjgcLRq3ttrGlbWk&usqp=CAU'
            ></Image>
            <Text fontWeight='bold' fontSize='xs'>
              {detailsMovie.vote_average}
            </Text>
          </>
        ) : (
          ''
        )}
      </Flex>
      <Flex alignItems='center' justifyContent='space-between'>
        <CustomButton
          variant='outline'
          content='Add To Your Playlist'
          colorScheme='white'
        />
        <Box>
          {detailsMovie.genres.map((genre) => (
            <TagGenre genre={genre} />
          ))}
        </Box>
      </Flex>
    </React.Fragment>
  );
}
