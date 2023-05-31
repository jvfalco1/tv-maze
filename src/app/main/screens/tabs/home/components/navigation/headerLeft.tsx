import React, { useCallback } from 'react';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { Container, Icon } from './styles';
import { useNavigation } from '@react-navigation/native';

const HeaderLeft: React.FC = () => {
  const { goBack } = useNavigation();

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Animated.View entering={FadeIn.duration(750).delay(200)} exiting={FadeOut.duration(500)}>
      <Container onPress={handleGoBack}>
        <Icon />
      </Container>
    </Animated.View>
  );
};

export default HeaderLeft;
