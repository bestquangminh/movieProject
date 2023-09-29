import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Spinner,
} from '@chakra-ui/react';
import { CustomButton } from '../../components/CustomButton';
import { DetailsTitle } from '../../components/DetailsTitle';
import { tmdbApi } from '../../apis/tmdbApi';
import { Movie } from '../../components/interface';
import { Actor } from '../../components/interface';
import { useParams } from 'react-router-dom';
import { DetailsOverview } from '../../components/DetailsOverview';
import { ActorImage } from '../../components/ActorImage';
import { MovieCard } from '../../components/MovieCard';
import { RecommendMovie } from '../../components/RecommendMovie';
export function DetailsPage() {
  const [detailsMovie, setDetailsMovie] = useState<Movie>({} as Movie);
  const [recommendMovie, setRecommendMovie] = useState<Movie[]>([]);
  const [actors, setActors] = useState<Actor[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>() as { id: string };
  async function callAPI() {
    const params = { page: 1 };
    try {
      const [moviesDetailResponse, actorsResponse, recommendResponse] =
        await Promise.all([
          tmdbApi.getMoviesDetail(parseInt(id, 10), params),
          tmdbApi.getActors(parseInt(id, 10), params),
          tmdbApi.getMoviesRecommend(parseInt(id, 10), params),
        ]);

      return {
        moviesDetail: moviesDetailResponse.data,
        actors: actorsResponse.data.cast,
        recommendations: recommendResponse.data.results,
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await callAPI();
        setDetailsMovie(res.moviesDetail);
        setActors(res.actors);
        setRecommendMovie(res.recommendations);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  // console.log(detailsMovie);
  // useEffect(() => {
  //   const params = { page: 1 };
  //   async function fetchDetailsMovie() {
  //     if (id) {
  //       const res = await tmdbApi.getMoviesDetail(parseInt(id, 10), params);
  //       const actors = await tmdbApi.getActors(parseInt(id, 10), params);
  //       const recommend = await tmdbApi.getMoviesRecommend(
  //         parseInt(id, 10),
  //         params
  //       );
  //       setRecommendMovie(recommend.data.results);
  //       setDetailsMovie(res.data);
  //       setActors(actors.data.cast);
  //     }
  //   }
  //   fetchDetailsMovie();
  // }, []);
  return (
    <React.Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Box
            display='flex'
            alignItems='center'
            w='100%'
            h='600px'
            bgImage={`https://image.tmdb.org/t/p/original${detailsMovie.backdrop_path}`}
            bgRepeat='no-repeat'
            bgSize='cover'
            bgPosition='center center'
            opacity='0.3'
            position='relative'
          ></Box>
          <Container
            ml='auto'
            mr='auto'
            left='0'
            right='0'
            textAlign='center'
            maxW='1440px'
            top='50%'
            position='absolute'
          >
            <Grid
              h='200px'
              templateRows='repeat(2, 1fr)'
              templateColumns='repeat(5, 1fr)'
              gap={5}
            >
              <GridItem rowSpan={2} colSpan={1}>
                <Image
                  mb='12px'
                  src={`https://image.tmdb.org/t/p/w500${detailsMovie.poster_path}`}
                  h='430px'
                />
                <CustomButton
                  variant='solid'
                  content='Watch movie'
                  colorScheme='red'
                />
              </GridItem>
              <GridItem
                h='280px'
                lineHeight='32px'
                p='3%'
                textAlign='start'
                colSpan={4}
              >
                <DetailsTitle detailsMovie={detailsMovie} />
              </GridItem>
              <GridItem p='0 3% 3% 3%' textAlign='start' colSpan={4}>
                <DetailsOverview detailsMovie={detailsMovie} />
                <ActorImage actors={actors} />
                <RecommendMovie recommendMovie={recommendMovie} />
              </GridItem>
            </Grid>
          </Container>
        </>
      )}
    </React.Fragment>
  );
}
