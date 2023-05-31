import { useQuery } from '@tanstack/react-query';

import getShowById from '../services/getShowById';

// type UseFetchShowsReturnType = {};

type UseFetchByIdParams = {
  id: number;
};

export default function useFetchById({ id }: UseFetchByIdParams) {
  const { isLoading, data } = useQuery(['show', id], () => getShowById({ id }));

  return {
    isLoading,
    show: data?.data,
  };
}
