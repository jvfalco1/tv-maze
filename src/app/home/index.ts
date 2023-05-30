import ScreensInterface from '@commons/types/navigation/screens';

import Search from './screens/search';

const authorizedScreens: ScreensInterface[] = [
  {
    component: Search,
    name: 'SearchScreen',
    options: {
      headerShown: false,
      animation: 'fade',
      animationDuration: 750,
    },
  },
];

export default authorizedScreens;
