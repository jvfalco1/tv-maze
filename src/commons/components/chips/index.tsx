import React from 'react';

import { Container, Title } from './styles';

type ChipProps = {
  title: string;
  big?: boolean;
};

const Chip: React.FC<ChipProps> = ({ title, big = false }: ChipProps) => {
  return (
    <Container big={big}>
      <Title big={big}>{title}</Title>
    </Container>
  );
};

export default Chip;
