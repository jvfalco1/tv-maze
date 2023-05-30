import { useCallback, useMemo, useState } from 'react';
import { useInfiniteQuery, FetchNextPageOptions } from '@tanstack/react-query';

import getShows from '@app/main/screens/tabs/home/services/getShows';
import { Show } from '@commons/types/responses/shows';
import searchShows from '../services/searchShows';

type UseFetchShowsReturnType = {
  shows: Show[];
  isLoading: boolean;
  fetchNextPage(options?: FetchNextPageOptions): void;
  isFetchingNextPage: boolean;
  handleSearch(q: string): void;
  filter: string;
};

export default function useFetchShows(): UseFetchShowsReturnType {
  const [query, setQuery] = useState('');

  const handleSearch = useCallback((q: string) => {
    setQuery(q);
  }, []);

  const handleFetch = useCallback(
    ({ pageParam }: any) => {
      if (query) {
        return searchShows({ query });
      }
      return getShows({ pageParam });
    },
    [query],
  );

  const { isLoading, data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['shows', query],
    ({ pageParam }) => handleFetch({ pageParam }),
    {
      getNextPageParam: (lastPage) => {
        return query ? undefined : lastPage.nextPage;
      },
    },
  );

  const shows = useMemo(
    () => (data?.pages ? data?.pages?.flatMap((page) => page.data) : []),
    [data],
  );

  return {
    isLoading,
    shows,
    fetchNextPage,
    isFetchingNextPage,
    handleSearch,
    filter: query,
  };
}
