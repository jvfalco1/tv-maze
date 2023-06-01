import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.99,
})`
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-top: ${({ theme }) => theme.spacing.large};
  margin-left: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.gray_800};
  border-radius: 16px;
`;

export const Icon = styled(Feather).attrs({
  name: 'chevron-left',
})`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
`;
