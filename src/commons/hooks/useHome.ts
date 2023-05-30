import useFetchCharacters from '@app/main/screens/tabs/home/hooks/useFetchShows';

const useHome = () => {
  const { shows, fetchNextPage, isFetchingNextPage, handleSearch, filter } = useFetchCharacters();

  return {
    functions: {
      fetchNextPage,
      handleSearch,
    },
    states: {
      shows,
      isFetchingNextPage,
      filter,
    },
  };
};

export default useHome;
