import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Movie } from '../interface';
interface Props {
  detailsMovie: Movie;
}
export function DetailsOverview({ detailsMovie }: Props): JSX.Element {
  return (
    <React.Fragment>
      <Flex gap={3} alignItems='center'>
        <Heading color='#cfc5c2' fontSize='md'>
          Release Date:
        </Heading>
        <Heading fontSize='md'>{detailsMovie.release_date}</Heading>
      </Flex>
      <Text mb='24px'>{detailsMovie.overview}</Text>
    </React.Fragment>
  );
}
