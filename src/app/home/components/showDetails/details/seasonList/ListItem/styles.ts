import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Touchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})``;

export const Container = styled.View`
  margin-right: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const Image = styled(FastImage)`
  width: 96px;
  height: 96px;
  border-radius: 4px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.gray_300};
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: 14px;
  margin-top: ${({ theme }) => theme.spacing.tiny};
  text-align: center;
`;
