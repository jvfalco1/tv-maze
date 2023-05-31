import React from 'react';
import FastImage from 'react-native-fast-image';
import { format, parseISO } from 'date-fns';

import HeaderLeft from '@app/main/screens/tabs/home/components/navigation/headerLeft';
import { Show } from '@commons/types/responses/shows';

import {
  Gradient,
  Header,
  Hero,
  InfoContainer,
  Premiered,
  ShowName,
} from '@app/home/screens/showDetails/styles';

type Props = {
  backgroundImage: string;
  show: Show | undefined;
};

const DetailHeader: React.FC<Props> = ({ backgroundImage, show }: Props) => {
  return (
    <Header>
      <HeaderLeft />
      <Hero
        source={{
          uri: backgroundImage,
          priority: FastImage.priority.high,
        }}>
        <Gradient />
      </Hero>
      <InfoContainer>
        <ShowName>{show?.name}</ShowName>
        <Premiered>
          {show?.premiered ? format(parseISO(show?.premiered), 'MMMM dd, yyyy') : '--'}
        </Premiered>
      </InfoContainer>
    </Header>
  );
};

export default DetailHeader;
