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
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { Platform } from 'react-native';

type Props = {
  backgroundImage: string;
  show: Show | undefined;
  scrolledValue: Animated.SharedValue<number>;
};

const _MAX_HEIGHT = Platform.OS === 'ios' ? 400 : 360;
const _MIN_HEIGHT = Platform.OS === 'ios' ? 200 : 250;
const _START_ANIMATION_AT = Platform.OS === 'ios' ? 200 : 200;
const _INITIAL_SCROLL_VALUE = 0;

const inputRange = [_INITIAL_SCROLL_VALUE, _START_ANIMATION_AT];
const outputRange = [_MAX_HEIGHT, _MIN_HEIGHT];

const DetailHeader: React.FC<Props> = ({ backgroundImage, show, scrolledValue }: Props) => {
  const headerAnimated = useAnimatedStyle(() => {
    const height = interpolate(scrolledValue.value, inputRange, outputRange, Extrapolate.CLAMP);

    return {
      height,
    };
  });

  return (
    <Header style={headerAnimated}>
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
