import { useCallback } from 'react';
import useFetchCharacters from '@app/main/screens/tabs/home/hooks/useFetchShows';
import getShowById from '@app/main/screens/tabs/home/services/getShowById';
import { ViewToken } from '@shopify/flash-list';
import { useQueryClient } from '@tanstack/react-query';

type ViewabilityChangeParams = {
  viewableItems: ViewToken[];
};

const useHome = () => {
  const { shows, fetchNextPage, isFetchingNextPage, handleSearch, filter, isLoading } =
    useFetchCharacters();

  const queryClient = useQueryClient();

  const handleViewabilityChange = useCallback(
    async ({ viewableItems }: ViewabilityChangeParams) => {
      const promises: any = [];

      viewableItems.map(async ({ item }) => {
        return await queryClient.prefetchQuery({
          queryKey: ['show', item.id],
          queryFn: () => getShowById({ id: item.id }),
        });
      });

      await Promise.all(promises);
    },
    [queryClient],
  );

  return {
    functions: {
      fetchNextPage,
      handleSearch,
      handleViewabilityChange,
    },
    states: {
      shows,
      isFetchingNextPage,
      filter,
      isLoading,
    },
  };
};

export default useHome;
