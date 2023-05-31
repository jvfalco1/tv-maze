import React, { useCallback, useRef } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Tabs from '@app/main/screens';
import { ShowDetails, EpisodeDetails } from '@app/home';

const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => {
  const navigationRef = useRef<NavigationContainerRef<any>>(null);

  const screenOptions = useCallback((): NativeStackNavigationOptions => {
    return {
      animation: 'fade',
      animationDuration: 500,
      headerShown: false,
    };
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Group>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{
              headerShown: false,
              animation: 'fade',
              headerBackTitleVisible: false,
              headerBackTitle: '',
            }}
          />

          <Stack.Screen
            component={ShowDetails}
            name={'ShowDetails'}
            options={{ headerBackTitleVisible: false }}
          />
          <Stack.Screen
            component={EpisodeDetails}
            name={'EpisodeDetails'}
            options={{ headerBackTitleVisible: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
