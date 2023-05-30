import { BlurView } from '@react-native-community/blur';
import styled, { css } from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

type IconProps = {
  selected: boolean;
};

type TitleProps = {
  selected: boolean;
};

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  background-color: rgba(33, 33, 33, 0.2);

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 16px 24px;

  ${() =>
    isAndroid &&
    css`
      padding: 12px 16px;
      background-color: rgba(33, 33, 33, 0.5);
    `}
`;

export const Blur = styled(BlurView).attrs({
  blurType: 'dark',
  blurAmount: 15,
  overlayColor: 'transparent',
})`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  align-items: center;
  padding: 0 12px;
`;

export const Icon = styled(Feather)<IconProps>`
  color: ${({ theme, selected }) => (selected ? theme.colors.white : theme.colors.black)};
  font-size: 24px;
  margin-bottom: ${({ theme }) => theme.spacing.micro};
`;

export const Title = styled.Text<TitleProps>`
  color: ${({ theme, selected }) => (selected ? theme.colors.white : theme.colors.black)};
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: 12px;
`;
