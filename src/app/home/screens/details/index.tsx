import useDetail from '@commons/hooks/useDetail';
import React from 'react';

import {
  ChipsContainer,
  Container,
  Description,
  Gradient,
  Header,
  Hero,
  InfoContainer,
  Premiered,
  ScheduleTime,
  Scroll,
  Section,
  SectionTitle,
  ShowName,
} from './styles';
import FastImage from 'react-native-fast-image';
import { format, parseISO } from 'date-fns';
import HeaderLeft from '@app/main/screens/tabs/home/components/navigation/headerLeft';
import Chip from '@commons/components/chips';

const Details: React.FC = () => {
  const { states } = useDetail();

  const heroImage = states.show?._embedded.images.find(
    (img) => img.type === 'background' && img.resolutions.original?.url !== undefined,
  );

  return (
    <Container>
      <Scroll>
        <Header>
          <HeaderLeft />
          <Hero
            source={{
              uri: heroImage
                ? heroImage.resolutions.original.url
                : (states.show?.image.original as string),
              priority: FastImage.priority.high,
            }}>
            <Gradient />
          </Hero>
          <InfoContainer>
            <ShowName>{states.show?.name}</ShowName>
            <Premiered>
              {states.show?.premiered
                ? format(parseISO(states.show?.premiered), 'MMMM dd, yyyy')
                : '--'}
            </Premiered>
          </InfoContainer>
        </Header>
        <Section>
          <Description>{states.show?.summary.replace(/<\/?[^>]+(>|$)/g, '')}</Description>
        </Section>
        <Section>
          <SectionTitle>Schedule</SectionTitle>
          <ScheduleTime>{states.show?.schedule.time}</ScheduleTime>
          <ChipsContainer>
            {React.Children.toArray(
              states.show?.schedule.days.map((day) => <Chip title={day} big />),
            )}
          </ChipsContainer>
        </Section>
        <Section>
          <SectionTitle>Genres</SectionTitle>
          <ChipsContainer>
            {React.Children.toArray(states.show?.genres.map((genre) => <Chip title={genre} big />))}
          </ChipsContainer>
        </Section>
      </Scroll>
    </Container>
  );
};

export default Details;
