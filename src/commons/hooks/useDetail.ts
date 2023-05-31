import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';

import { AuthorizedScreens, AuthorizedStackNavigation } from '@commons/types/navigation/types';
import { useEffect } from 'react';
import useFetchById from '@app/main/screens/tabs/home/hooks/useFetchById';

const useDetail = () => {
  const {
    params: { id },
  } = useRoute<RouteProp<AuthorizedScreens, 'Details'>>();

  const { setOptions } = useNavigation<AuthorizedStackNavigation>();

  const { show } = useFetchById({ id });

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
