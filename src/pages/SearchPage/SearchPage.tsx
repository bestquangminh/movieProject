import React, { useEffect, useState } from 'react';
import { Container, Grid, GridItem, Input } from '@chakra-ui/react';
import { Movie } from '../../components/interface';
import { tmdbApi } from '../../apis/tmdbApi';
import { MovieCard } from '../../components/MovieCard';
import { useDebounce } from 'usehooks-ts';
export function SearchPage() {
  const [searchedMovies, setSearchedMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState<string>('');
  const debouncedValue = useDebounce<string>(query, 300);
  useEffect(() => {
    async function SearchedMovies() {
      const params = { page: 1 };
      try {
        const res = await tmdbApi.getSearchedMovie(debouncedValue, params);
        setSearchedMovies(res.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    if (debouncedValue !== '') {
      SearchedMovies();
    }
  }, [debouncedValue]);
  return (
    <Container maxW='1440px' pt='125px'>
      <Input
        mb='24px'
        onChange={(e) => setQuery(e.target.value)}
        bg='#fff'
        textColor='#000'
        placeholder='Find movies'
        _placeholder={{ opacity: 0.4, color: 'inherit' }}
      />
      <Grid templateColumns='repeat(5,1fr)' gap={5}>
        {searchedMovies.map((movie) => (
          <GridItem key={movie.id}>
            <MovieCard movie={movie} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
