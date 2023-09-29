import { CustomButton } from '../CustomButton';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Movie } from '../interface';
import { TagGenre } from '../TagGenre';

interface Props {
  movie: Movie;
}

export function TextSlider({ movie }: Props): JSX.Element {
  return (
    <Box mt='24px'>
      {movie.genres.map((genre) => (
        <TagGenre key={genre.name} genre={genre} />
      ))}
      <Heading size='2xl'>{movie.title}</Heading>
      <Text noOfLines={3} w='350px' mt='10px' color='#f7f7f7' size='md'>
        {movie.overview}
      </Text>
      <CustomButton
        colorScheme='facebook'
        variant='solid'
        content='Watch Now'
      />
      <CustomButton
        colorScheme='white'
        variant='outline'
        content='Add To Playlist'
      />
    </Box>
  );
}
