import api from '@configs/axios';
import { SearchShowResponseData, Show } from '@commons/types/responses/shows';

type GetShowsParam = {
  query: string;
};

export type GetShowsParamReturn = {
  data: Show[];
  nextPage: number;
};

async function searchShows({ query }: GetShowsParam): Promise<GetShowsParamReturn> {
  const params = new URLSearchParams({ q: query });

  const url = `search/shows?${params}`;

  const { data } = await api.get<SearchShowResponseData[]>(url);

  const shows: Show[] = data.map(
    (dt) =>
      ({
        ...dt.show,
        score: dt.score,
      } as Show),
  );

  return {
    data: shows,
    nextPage: 1,
  };
}

export default searchShows;
