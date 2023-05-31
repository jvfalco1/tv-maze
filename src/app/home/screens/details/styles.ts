import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

export const Scroll = styled(ScrollView).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 30,
  },
})`
  background-color: ${({ theme }) => theme.colors.gray_900};
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_900};
`;

export const Header = styled.View`
  position: relative;
  height: 300px;

  justify-content: space-between;
`;

export const Hero = styled(FastImage).attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['rgba(0,0,0,.1)', '#070709'],
})`
  width: 100%;
  height: 100%;
`;

export const ShowName = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.inter.bold};
  font-size: 24px;
  margin-bottom: ${({ theme }) => theme.spacing.tiny};
`;

export const Premiered = styled.Text`
  color: ${({ theme }) => theme.colors.gray_300};
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: 14px;
`;

export const InfoContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.small};
`;

export const Section = styled.View`
  padding: ${({ theme }) => theme.spacing.small};
`;

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.inter.semibold};
  font-size: 24px;
  margin-bottom: ${({ theme }) => theme.spacing.tiny};
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.gray_300};
  font-family: ${({ theme }) => theme.fonts.inter.semibold};
  font-size: 14px;
`;

export const ChipsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;
`;

export const ScheduleTime = styled.Text`
  color: ${({ theme }) => theme.colors.gray_300};
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: 14px;
  margin-bottom: ${({ theme }) => theme.spacing.tiny};
`;
