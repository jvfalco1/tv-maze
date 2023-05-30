import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;

  margin-top: ${({ theme }) => theme.spacing.small};
  border-radius: 12px;
  width: 100%;

  elevation: 5;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
`;

export const Avatar = styled(FastImage).attrs({
  resizeMode: 'cover',
})`
  width: 120px;
  height: 96px;

  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;

  margin-right: ${({ theme }) => theme.spacing.small};
`;

export const Name = styled(Animated.Text)`
  font-size: 22px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const ChipsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;
`;
