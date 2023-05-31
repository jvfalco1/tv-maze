import useEpisodeDetail from '@commons/hooks/useEpisodeDetails';
import React from 'react';

import { Container, Description, PlayButton, PlayButtonText, Scroll, Section } from './styles';

import DetailHeader from '@app/home/components/episodeDetails/header';

const Details: React.FC = () => {
  const {
    states: { episode },
  } = useEpisodeDetail();

  return (
    <Container>
      <DetailHeader episode={episode} />

      <Section>
        <Description>{episode.summary.replace(/<\/?[^>]+(>|$)/g, '')}</Description>
      </Section>

      <PlayButton>
        <PlayButtonText> Watch episode</PlayButtonText>
      </PlayButton>
    </Container>
  );
};

export default Details;
