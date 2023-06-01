import React, { useCallback } from 'react';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { ListRenderItem } from '@shopify/flash-list';

import Header from './components/home/header';
import ListItem from '@commons/components/list/ListItem';

import { Show } from '@commons/types/responses/shows';

import { Container, List } from './styles';
import useFavorites from '@commons/hooks/useFavorites';

const AnimatedList = Animated.createAnimatedComponent(List);

const MyListTab: React.FC = () => {
  const { states, functions } = useFavorites();

  const scrollValue = useSharedValue(0);

  const handler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollValue.value = event.contentOffset.y;
    },
  });

  const renderItem: ListRenderItem<Show> = useCallback(
    ({ item }) => <ListItem item={item} onFavorite={functions.handleAddFavorite} />,
    [functions.handleAddFavorite],
  );

  return (
    <Container>
      <Header scrolledValue={scrollValue} onSearch={functions.handleSearch} />

      <AnimatedList
        keyExtractor={(item: Show, idx: number) => String(item.id + idx)}
        data={states.filteredData ? states.filteredData : states.favorites}
        onScroll={handler}
        scrollEventThrottle={16}
        renderItem={renderItem}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={110}
      />
    </Container>
  );
};

export default MyListTab;
