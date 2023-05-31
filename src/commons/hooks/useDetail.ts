import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';

import { AuthorizedScreens, AuthorizedStackNavigation } from '@commons/types/navigation/types';
import { useEffect, useMemo } from 'react';
import useFetchById from '@app/main/screens/tabs/home/hooks/useFetchById';
import { Season } from '@commons/types/responses/shows';

const useDetail = () => {
  const {
    params: { id },
  } = useRoute<RouteProp<AuthorizedScreens, 'Details'>>();

  const { setOptions } = useNavigation<AuthorizedStackNavigation>();

  const { show } = useFetchById({ id });

  const sectionList = useMemo(() => {
    const result = show?._embedded.episodes.reduce((acc: Season[], ep) => {
      const seasonTitle = `Season ${ep.season}`;

      const seasonAlreadyExistIndex = acc.findIndex((season: any) => season.title === seasonTitle);

      if (seasonAlreadyExistIndex > -1) {
        const currentSeason: Season = acc[seasonAlreadyExistIndex];

        acc[seasonAlreadyExistIndex] = {
          title: currentSeason.title,
          data: currentSeason.data.concat(ep),
        };

        return acc;
      }

      acc.push({
        title: seasonTitle,
        data: [].concat(ep),
      });

      return acc;
    }, []);

    return result;
  }, [show?._embedded.episodes]);

  console.log({ sectionList });

  useEffect(() => {
    setOptions({ title: show?.name, headerBackTitleVisible: false });
  }, [setOptions, show]);

  return {
    states: {
      show,
    },
  };
};

export default useDetail;
