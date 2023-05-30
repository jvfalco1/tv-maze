import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${({ theme }) => `${theme.spacing.micro} ${theme.spacing.tiny}`};
  background-color: ${({ theme }) => theme.colors.gray_500};
  margin-right: ${({ theme }) => theme.spacing.micro};
  border-radius: ${({ theme }) => theme.spacing.huge};
  align-items: flex-start;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.inter.bold};
  font-size: 10px;
`;
