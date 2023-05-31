import useDetail from '@commons/hooks/useDetail';
import React from 'react';

import { Container, Description, Scroll, Section } from './styles';

import SeasonList from '@app/home/components/showDetails/details/seasonList';
import Genres from '@app/home/components/showDetails/details/genres';
import Schedule from '@app/home/components/showDetails/details/schedule';
import DetailHeader from '@app/home/components/showDetails/header';

const Details: React.FC = () => {
  const { states } = useDetail();

  return (
    <Container>
      <DetailHeader backgroundImage={states.backgroundImage} show={states.show} />
      <Scroll>
        <Section>
          <Description>{states.show?.summary.replace(/<\/?[^>]+(>|$)/g, '')}</Description>
        </Section>
        <Section>
          <Schedule schedule={states.show?.schedule} />
        </Section>
        <Section>
          <Genres genres={states.show?.genres} />
        </Section>
        <Section>
          <SeasonList list={states.sectionList} />
        </Section>
      </Scroll>
    </Container>
  );
};

export default Details;
