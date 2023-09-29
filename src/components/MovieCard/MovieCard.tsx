import { Box, Image, Heading, Link } from '@chakra-ui/react';
import { Movie } from '../interface';

interface Props {
  movie: Movie;
}
export function MovieCard({ movie }: Props) {
  return (
    <Box mb='24px' cursor='pointer' _hover={{ color: '#7b61ff' }}>
      <Link href={`http://localhost:3000/details/${movie.id}`}>
        <Image
          h='342px'
          borderRadius='10px'
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
              : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
          }
        />
        <Heading w='228px' noOfLines={1} mt='12px' size='md'>
          {movie.title || movie.name}
        </Heading>
      </Link>
    </Box>
  );
}
