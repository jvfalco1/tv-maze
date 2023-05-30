import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import Chip from '@commons/components/chips';

import { Show } from '@commons/types/responses/shows';

import { Avatar, ChipsContainer, Container, Name, Content } from './styles';
import Animated, { FadeInRight, FadeOutRight, Layout } from 'react-native-reanimated';

const Touchable = Animated.createAnimatedComponent(TouchableWithoutFeedback);

type ListItemProps = {
  item: Show;
};

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <Touchable
      entering={FadeInRight.duration(500)}
      exiting={FadeOutRight.duration(500)}
      layout={Layout.springify()}>
      <Container>
        <Avatar source={{ uri: item.image?.medium }} />
        <Content>
          <Name>{item.name}</Name>
          <ChipsContainer>
            {React.Children.toArray(item.genres.map((genre) => <Chip title={genre} />))}
          </ChipsContainer>
        </Content>
      </Container>
    </Touchable>
  );
};

export default React.memo(ListItem, (prevProps, nextProps) => Object.is(prevProps, nextProps));
