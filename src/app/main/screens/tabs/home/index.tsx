import React, { useCallback } from 'react';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { ListRenderItem } from '@shopify/flash-list';

import Loader from '@commons/components/loader';

import Header from './components/home/header';
import ListItem from '@commons/components/list/ListItem';

import useHome from '@commons/hooks/useHome';

import { Show } from '@commons/types/responses/shows';

import { Container, List } from './styles';
import useFavorites from '@commons/hooks/useFavorites';

const AnimatedList = Animated.createAnimatedComponent(List);

const Home: React.FC = () => {
  const { states, functions } = useHome();
  const {
    functions: { handleAddFavorite },
  } = useFavorites();

  const scrollValue = useSharedValue(0);

  const handler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollValue.value = event.contentOffset.y;
    },
  });

  const renderItem: ListRenderItem<Show> = useCallback(
    ({ item }) => <ListItem item={item} onFavorite={handleAddFavorite} />,
    [handleAddFavorite],
  );
  const listFooterComponent: ListRenderItem<Show> = useCallback(
    () => <Loader isLoading={states.isFetchingNextPage} />,
    [states.isFetchingNextPage],
  );

  return (
    <Container>
      <Header scrolledValue={scrollValue} onSearch={functions.handleSearch} />

      {states.isLoading ? (
        <Loader isLoading />
      ) : (
        <AnimatedList
          keyExtractor={(item: Show, idx: number) => String(item.id + idx)}
          data={states.shows}
          onScroll={handler}
          scrollEventThrottle={16}
          renderItem={renderItem}
          onEndReachedThreshold={0.5}
          onEndReached={functions.fetchNextPage}
          ListFooterComponent={listFooterComponent}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={110}
          onViewableItemsChanged={functions.handleViewabilityChange}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 75,
            minimumViewTime: 2000,
          }}
        />
      )}
    </Container>
  );
};

export default Home;
