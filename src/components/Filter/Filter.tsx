import { Box, Flex, Heading, Select } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { tmdbApi } from '../../apis/tmdbApi';
import { Movie } from '../interface';
import { useSearchParams } from 'react-router-dom';

interface Props {
  setGenres: React.Dispatch<React.SetStateAction<string>>;
  setReleaseYear: React.Dispatch<React.SetStateAction<string>>;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}
export function Filter({
  setGenres,
  setReleaseYear,
  setSortBy,
  setCountry,
}: Props): JSX.Element {
  const [options, setOptions] = useState<Movie[]>([]);
  const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
  const sortBy = [
    {
      value: 'popularity.desc',
      name: 'Popularity',
    },
    {
      value: 'vote_average.desc',
      name: 'Rating',
    },
    {
      value: 'revenue.desc',
      name: 'Revenue',
    },
  ];
  const country = [
    {
      value: 'US',
      name: 'United States of America',
    },
    {
      value: 'KR',
      name: 'Korea',
    },
    {
      value: 'JP',
      name: 'Japan',
    },
    {
      value: 'VN',
      name: 'Vietnam',
    },
    {
      value: 'CN',
      name: 'China',
    },
  ];
  const params = { page: 1 };
  useEffect(() => {
    async function fetchGenres() {
      try {
        const res = await tmdbApi.getGenres(params);
        setOptions(res.data.genres);
      } catch (err) {
        console.log(err);
      }
    }
    fetchGenres();
  }, []);
  return (
    <Flex mb='24px' alignItems='center' gap={3} p={4} bgColor='#091c2d'>
      <Select
        onChange={(e) => setGenres(e.target.value)}
        bgColor='#fff'
        color='#000'
        w='sm'
      >
        <option value='none' selected disabled>
          Select an Genre
        </option>
        {options.map((option) => (
          <option value={option.id}>{option.name}</option>
        ))}
      </Select>
      <Select
        onChange={(e) => setReleaseYear(e.target.value)}
        bgColor='#fff'
        color='#000'
        w='sm'
      >
        <option value='none' selected disabled>
          Years
        </option>
        {years.map((year) => (
          <option value={year}>{year}</option>
        ))}
      </Select>
      <Select
        onChange={(e) => setSortBy(e.target.value)}
        bgColor='#fff'
        color='#000'
        w='sm'
      >
        <option value='none' selected disabled>
          Sort By
        </option>
        {sortBy.map((value) => (
          <option value={value.value}>{value.name}</option>
        ))}
      </Select>
      <Select
        onChange={(e) => setCountry(e.target.value)}
        bgColor='#fff'
        color='#000'
        w='sm'
      >
        <option value='none' selected disabled>
          Country
        </option>
        {country.map((value) => (
          <option value={value.value}>{value.name}</option>
        ))}
      </Select>
    </Flex>
  );
}
