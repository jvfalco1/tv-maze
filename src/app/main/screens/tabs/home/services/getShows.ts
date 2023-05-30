import api from '@configs/axios';
import { Show } from '@commons/types/responses/shows';

type GetShowsParam = {
  pageParam: number;
};

export type GetShowsParamReturn = {
  data: Show[];
  nextPage: number;
};

async function getShows({ pageParam = 1 }: GetShowsParam): Promise<GetShowsParamReturn> {
  const url = `/shows?page=${pageParam}`;

  const { data } = await api.get(url);

  return {
    data,
    nextPage: pageParam + 1,
  };
}

export default getShows;
