import useDetail from '@commons/hooks/useDetail';
import React from 'react';

import {
  Container,
  Content,
  Description,
  Gradient,
  Header,
  Hero,
  InfoContainer,
  Premiered,
  ShowName,
} from './styles';
import FastImage from 'react-native-fast-image';
import { format, parseISO } from 'date-fns';
import HeaderLeft from '@app/main/screens/tabs/home/components/navigation/headerLeft';

const Details: React.FC = () => {
  const { states } = useDetail();

  const heroImage = states.show?._embedded.images.find(
    (img) => img.type === 'background' && img.resolutions.original?.url !== undefined,
  );

  return (
    <Container>
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
      <Content>
        <Description>{states.show?.summary.replace(/<\/?[^>]+(>|$)/g, '')}</Description>
      </Content>
    </Container>
  );
};

export default Details;
