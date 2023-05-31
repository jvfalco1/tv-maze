import styled, { css } from 'styled-components/native';

type ContainerProps = {
  big: boolean;
};

type TitleProps = {
  big: boolean;
};
export const Container = styled.View<ContainerProps>`
  padding: ${({ theme }) => `${theme.spacing.micro} ${theme.spacing.tiny}`};
  background-color: ${({ theme }) => theme.colors.gray_500};
  margin-right: ${({ theme }) => theme.spacing.micro};
  border-radius: ${({ theme }) => theme.spacing.huge};
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.tiny};
  ${({ big }) =>
    big &&
    css`
      font-size: 16px;
      border-radius: ${({ theme }) => theme.spacing.tiny};
      margin-right: ${({ theme }) => theme.spacing.tiny};
    `}
`;

export const Title = styled.Text<TitleProps>`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.inter.bold};
  font-size: 10px;

  ${({ big }) =>
    big &&
    css`
      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.inter.semibold};
    `}
`;
