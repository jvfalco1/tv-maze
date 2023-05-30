import React, { useEffect, useState } from 'react';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

import useDebounce from '@commons/hooks/useDebounce';

import {
  AnimatableView,
  CompanyName,
  CompanySlogan,
  Container,
  Content,
  SearchContainer,
  SearchInput,
} from './styles';
import { Platform } from 'react-native';

type HeaderProps = {
  scrolledValue: Animated.SharedValue<number>;
  onSearch(q: string): void;
};

const _MAX_HEIGHT = Platform.OS === 'ios' ? 200 : 180;
const _MIN_HEIGHT = Platform.OS === 'ios' ? 140 : 100;
const _START_ANIMATION_AT = Platform.OS === 'ios' ? 80 : 90;
const _INITIAL_SCROLL_VALUE = 0;

const inputRange = [_INITIAL_SCROLL_VALUE, _START_ANIMATION_AT];
const outputRange = [_MAX_HEIGHT, _MIN_HEIGHT];

const Header: React.FC<HeaderProps> = ({ scrolledValue, onSearch }) => {
  const [search, setSearch] = useState('');

  const headerAnimated = useAnimatedStyle(() => {
    const height = interpolate(scrolledValue.value, inputRange, outputRange, Extrapolate.CLAMP);

    return {
      height,
    };
  });

  const translateAnimation = useAnimatedStyle(() => {
    const translateY = interpolate(scrolledValue.value, inputRange, [0, -65], Extrapolate.CLAMP);

    return {
      transform: [{ translateY }],
    };
  });

  const opacityAnimation = useAnimatedStyle(() => {
    const opacity = interpolate(scrolledValue.value, inputRange, [1, 0], Extrapolate.CLAMP);

    return {
      opacity,
    };
  });

  const debouncedQuery = useDebounce({ value: search, delay: 500 });

  useEffect(() => {
    if (!debouncedQuery) {
      onSearch('');
    }
    if (debouncedQuery) {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery, onSearch]);

  return (
    <Container style={headerAnimated}>
      <Content>
        <AnimatableView style={[opacityAnimation, translateAnimation]}>
          <CompanyName>MazeSity</CompanyName>
          <CompanySlogan>Find the best TV show.</CompanySlogan>
        </AnimatableView>
        <SearchContainer style={translateAnimation}>
          <SearchInput onChangeText={setSearch} value={search} placeholder="Search" />
        </SearchContainer>
      </Content>
    </Container>
  );
};

export default Header;
