import { Box, Container, Image, Flex, Button, Spacer } from '@chakra-ui/react';
import { CustomLink } from '../../../components/Link';
import { useState, useEffect } from 'react';
export function Header(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      bg={scrolled ? 'rgba(64,26,113, 0.8)' : 'transparent'}
      zIndex='100'
      w='100%'
      position='fixed'
      maxW='100%'
    >
      <Container maxW='1400px'>
        <Flex alignItems='center'>
          <Image
            mt='10px'
            w='110px'
            h='54px'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/2560px-Disney%2B_logo.svg.png'
          ></Image>
          <Spacer />
          <Flex placeItems='center' gap='10px'>
            <CustomLink color='#fff' to='/' text='Home' />
            <CustomLink color='#fff' to='/discover/movies' text='Discover' />
            <CustomLink color='#fff' to='/search' text='Search' />
          </Flex>
          <Spacer />
          <Flex gap={3} alignItems='center'>
            <Button textColor='#fff' variant='outline' mt='10px' size='md'>
              Login
            </Button>
            <Button mt='10px' size='md'>
              Sign up
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
