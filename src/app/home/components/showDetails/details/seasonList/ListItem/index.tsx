import React from 'react';

import { Container, Image, Name, Touchable } from './styles';
import { Episodes } from '@commons/types/responses/shows';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { AuthorizedStackNavigation } from '@commons/types/navigation/types';

type Props = {
  item: Episodes;
};

const ListItem: React.FC<Props> = ({ item }: Props) => {
  const { navigate } = useNavigation<AuthorizedStackNavigation>();

  return (
    <Touchable onPress={() => navigate('EpisodeDetails', { episode: item })}>
      <Container>
        <Image source={{ uri: item.image?.medium, priority: FastImage.priority.high }} />
        <Name>Episode {item.number}</Name>
      </Container>
    </Touchable>
  );
};

export default ListItem;
