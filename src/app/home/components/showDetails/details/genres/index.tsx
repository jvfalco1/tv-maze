import { ChipsContainer, SectionTitle } from '@app/home/screens/showDetails/styles';
import Chip from '@commons/components/chips';
import React from 'react';

// import { Container } from './styles';

type Props = {
  genres: string[] | undefined;
};

const Genres: React.FC<Props> = ({ genres }: Props) => {
  if (!genres) {
    return null;
  }

  return (
    <>
      <SectionTitle>Genres</SectionTitle>
      <ChipsContainer>
        {React.Children.toArray(genres?.map((genre) => <Chip title={genre} big />))}
      </ChipsContainer>
    </>
  );
};

export default Genres;
