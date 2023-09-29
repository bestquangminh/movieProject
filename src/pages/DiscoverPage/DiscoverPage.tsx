import React, { useEffect, useState } from 'react';
import { Movie } from '../../components/interface';
import { tmdbApi } from '../../apis/tmdbApi';
import { MovieCard } from '../../components/MovieCard';
import {
  Grid,
  GridItem,
  Container,
  Button,
  Flex,
  Spinner,
} from '@chakra-ui/react';
import { Filter } from '../../components/Filter';
export function DiscoverPage(): JSX.Element {
  const [discoverMovies, setDiscoverMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [genres, setGenres] = useState<string>('');
  const [releaseYear, setReleaseYear] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('popularity.desc');
  const [country, setCountry] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    async function fetchDiscoverMovies() {
      const params = {
        page: currentPage,
        with_genres: genres,
        primary_release_year: releaseYear,
        sort_by: sortBy,
        with_origin_country: country,
      };
      try {
        setIsLoading(true);
        const res = await tmdbApi.getDiscoverMovie(params);
        setDiscoverMovies(res.data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDiscoverMovies();
  }, [currentPage, genres, releaseYear, sortBy, country]);

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function handlePrevPage() {
    setCurrentPage(currentPage - 1);
  }

  function handleScrollTop() {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <Container minH='1000px' pt='125px' maxW='1440px'>
      <Filter
        setSortBy={setSortBy}
        setReleaseYear={setReleaseYear}
        setGenres={setGenres}
        setCountry={setCountry}
      />
      {isLoading && <Spinner size='lg' />}
      <Grid templateColumns='repeat(5,1fr)' gap={5}>
        {discoverMovies.map((movie) => (
          <GridItem key={movie.id}>
            <MovieCard movie={movie} />
          </GridItem>
        ))}
      </Grid>
      <Flex alignItems='center' gap={3} justifyContent='flex-end'>
        <Button
          size='sm'
          textColor='#fff'
          variant='outline'
          _hover={{ bgColor: 'messenger' }}
          onClick={() => {
            handlePrevPage();
            handleScrollTop();
          }}
        >
          Previous Page
        </Button>

        <Button
          size='sm'
          textColor='#fff'
          variant='outline'
          _hover={{ bgColor: 'messenger' }}
          onClick={() => {
            handleNextPage();
            handleScrollTop();
          }}
        >
          Next Page
        </Button>
      </Flex>
    </Container>
  );
}
