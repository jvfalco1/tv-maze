import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_800};
  flex-direction: row;

  margin-top: ${({ theme }) => theme.spacing.small};
  border-radius: 12px;
  width: 100%;

  elevation: 5;
  box-shadow: 0px 5px 8px rgba(255, 255, 255, 0.05);
`;

export const Avatar = styled(FastImage).attrs({
  resizeMode: 'cover',
})`
  align-items: flex-start;
  width: 120px;
  height: 120px;

  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;

  margin-right: ${({ theme }) => theme.spacing.small};
`;

export const Name = styled(Animated.Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.inter.regular};
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
