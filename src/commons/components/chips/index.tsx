import React from 'react';

import { Container, Title } from './styles';

type ChipProps = {
  title: string;
};

const Chip: React.FC<ChipProps> = ({ title }: ChipProps) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Chip;
