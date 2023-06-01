import React, { useCallback, useMemo } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import Chip from '@commons/components/chips';

import { Show } from '@commons/types/responses/shows';

import {
  Avatar,
  ChipsContainer,
  Container,
  Name,
  Content,
  HeartIcon,
  FavoriteContainer,
} from './styles';
import Animated, { FadeInRight, FadeOutRight, Layout } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { AuthorizedStackNavigation } from '@commons/types/navigation/types';
import { useMMKVString } from 'react-native-mmkv';

const Touchable = Animated.createAnimatedComponent(TouchableWithoutFeedback);

type ListItemProps = {
  item: Show;

  onFavorite(show: Show): void;
};

const ListItem: React.FC<ListItemProps> = ({ item, onFavorite }) => {
  const { navigate } = useNavigation<AuthorizedStackNavigation>();

  const [favorites] = useMMKVString('favorites');

  const isFavorited = useMemo(() => {
    if (!favorites) {
      return false;
    }
    const parsed: Show[] = JSON.parse(favorites);

    return parsed.some((it) => it.id === item.id);
  }, [favorites, item.id]);

  const handleNavigate = useCallback(() => {
    navigate('ShowDetails', { id: item.id });
  }, [item, navigate]);

  return (
    <Touchable
      entering={FadeInRight.duration(500)}
      exiting={FadeOutRight.duration(500)}
      layout={Layout.springify()}
      onPress={handleNavigate}>
      <Container>
        <Avatar source={{ uri: item.image?.medium }} />
        <Content>
          <Name>{item.name}</Name>
          <ChipsContainer>
            {React.Children.toArray(item.genres.map((genre) => <Chip title={genre} />))}
          </ChipsContainer>
        </Content>
        <FavoriteContainer onPress={() => onFavorite(item)}>
          <HeartIcon isFavorited={isFavorited} />
        </FavoriteContainer>
      </Container>
    </Touchable>
  );
};

export default React.memo(ListItem, (prevProps, nextProps) => Object.is(prevProps, nextProps));
