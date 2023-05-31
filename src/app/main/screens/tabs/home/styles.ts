import styled from 'styled-components/native';

import { Show } from '@commons/types/responses/shows';
import { FlashList } from '@shopify/flash-list';

export const Container = styled.View`
  flex: 1;
  padding-bottom: ${({ theme }) => theme.spacing.huge};
  background-color: ${({ theme }) => theme.colors.gray_700};
`;

export const List = styled(FlashList<Show>).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
