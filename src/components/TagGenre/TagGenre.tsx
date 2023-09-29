import { Tag } from '@chakra-ui/react';
interface Props {
  genre: {
    name: string;
  };
}
export function TagGenre({ genre }: Props): JSX.Element {
  return (
    <Tag
      key={genre.name}
      bgColor='#000'
      color='#fff'
      size='sm'
      borderRadius='full'
      p='6px'
      mr='8px'
    >
      {genre.name}
    </Tag>
  );
}
