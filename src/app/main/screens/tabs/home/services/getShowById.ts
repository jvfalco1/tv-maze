import api from '@configs/axios';
import { Show } from '@commons/types/responses/shows';

type GetShowsParam = {
  id: number;
};

export type GetShowsParamReturn = {
  data: Show;
};

async function getShowById({ id }: GetShowsParam): Promise<GetShowsParamReturn> {
  const url = `shows/${id}?embed[]=images&embed[]=seasons&embed[]=cast`;

  const { data } = await api.get(url);

  return {
    data,
  };
}

export default getShowById;
