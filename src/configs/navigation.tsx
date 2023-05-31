import React, { useCallback, useRef } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Tabs from '@app/main/screens';
import { Details } from '@app/home';

import { useTheme } from 'styled-components/native';

import HeaderLeft from '@app/main/screens/tabs/home/components/navigation/headerLeft';
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';

const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => {
  const navigationRef = useRef<NavigationContainerRef<any>>(null);
  const { colors, fonts } = useTheme();

  const headerLeft = useCallback(({ canGoBack }: HeaderBackButtonProps) => {
    return canGoBack ? <HeaderLeft /> : null;
  }, []);

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
            component={Details}
            name={'Details'}
            options={{ headerBackTitleVisible: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
