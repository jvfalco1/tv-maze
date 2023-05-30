import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  background-color: ${({ theme }) => theme.colors.gray_800};
  width: 100%;
  height: 200px;
`;

export const AnimatableView = styled(Animated.View)``;

export const Content = styled(SafeAreaView)`
  padding: 16px;
`;

export const SearchContainer = styled(Animated.View)`
  align-items: center;
  background-color: aliceblue;
  border-radius: 12px;
  height: 44px;
  padding: 4px;
  width: 100%;
`;

export const SearchInput = styled.TextInput`
  padding: 8px;
  height: 100%;
  width: 100%;
  background-color: white;
  color: black;
  border-radius: 20px;
`;

export const CompanySlogan = styled.Text`
  color: white;
  font-size: 16px;
  margin-bottom: 12px;
  text-align: center;
`;

export const CompanyName = styled.Text`
  color: white;
  font-size: 24px;

  text-align: center;
  font-weight: 700;
`;
