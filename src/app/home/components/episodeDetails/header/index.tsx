import React, { useMemo } from 'react';
import FastImage from 'react-native-fast-image';

import HeaderLeft from '@app/main/screens/tabs/home/components/navigation/headerLeft';
import { Episodes } from '@commons/types/responses/shows';

import {
  Gradient,
  Header,
  Hero,
  InfoContainer,
  Premiered,
  ShowName,
} from '@app/home/screens/showDetails/styles';

type Props = {
  episode: Episodes | undefined;
};

const DetailHeader: React.FC<Props> = ({ episode }: Props) => {
  const season = useMemo(() => `Season ${episode?.season}, Episode ${episode?.number}`, [episode]);

  return (
    <Header>
      <HeaderLeft />
      {episode?.image.original ? (
        <Hero
          source={{
            uri: episode?.image.original,
            priority: FastImage.priority.high,
          }}>
          <Gradient />
        </Hero>
      ) : null}

      <InfoContainer>
        <ShowName>{episode?.name}</ShowName>
        <Premiered>{season}</Premiered>
      </InfoContainer>
    </Header>
  );
};

export default DetailHeader;
