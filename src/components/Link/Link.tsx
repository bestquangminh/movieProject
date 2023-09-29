import { Link as ReactRouterLink } from 'react-router-dom';
import { Button as CharkaLink } from '@chakra-ui/react';

interface Link {
    color: string;
    to: string;
    text: string;
}

export function CustomLink({ color, to, text }: Link): JSX.Element {
    return (
        <CharkaLink _hover={{ bg: '#12486B' }} variant='ghost' color={color} as={ReactRouterLink} to={to}>
            {text}
        </CharkaLink>
    )
}