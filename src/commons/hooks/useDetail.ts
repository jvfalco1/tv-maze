import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';

import { AuthorizedScreens, AuthorizedStackNavigation } from '@commons/types/navigation/types';
import { useEffect, useMemo } from 'react';
import useFetchById from '@app/main/screens/tabs/home/hooks/useFetchById';
import { Episodes, Season } from '@commons/types/responses/shows';
import { SectionListData } from 'react-native/types';

const useDetail = () => {
  const {
    params: { id },
  } = useRoute<RouteProp<AuthorizedScreens, 'ShowDetails'>>();

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
        data: [].concat(ep as any),
      });

      return acc;
    }, []);

    return result as SectionListData<Episodes, Season>[];
  }, [show?._embedded.episodes]);

  useEffect(() => {
    setOptions({ title: show?.name, headerBackTitleVisible: false });
  }, [setOptions, show]);

  const heroImage = show?._embedded.images.find(
    (img) => img.type === 'background' && img.resolutions.original?.url !== undefined,
  );

  return {
    states: {
      sectionList,
      show,
      backgroundImage: heroImage
        ? heroImage.resolutions.original.url
        : (show?.image.original as string),
    },
  };
};

export default useDetail;
