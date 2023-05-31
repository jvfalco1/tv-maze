import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';

import { AuthorizedScreens, AuthorizedStackNavigation } from '@commons/types/navigation/types';
import { useEffect } from 'react';

const useEpisodeDetail = () => {
  const {
    params: { episode },
  } = useRoute<RouteProp<AuthorizedScreens, 'EpisodeDetails'>>();

  const { setOptions } = useNavigation<AuthorizedStackNavigation>();

  useEffect(() => {
    setOptions({ title: episode?.name, headerBackTitleVisible: false });
  }, [setOptions, episode]);

  return {
    states: {
      episode,
    },
  };
};

export default useEpisodeDetail;
