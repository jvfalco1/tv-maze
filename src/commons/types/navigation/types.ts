import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { HomeScreensProps } from '@app/home/types';
import { BottomTabProps } from '@app/main/types/navigation';

export type AuthorizedScreens = HomeScreensProps & BottomTabProps;
export type AuthorizedStackNavigation = NativeStackNavigationProp<AuthorizedScreens>;
