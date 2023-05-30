import React, { useRef } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from '@app/main/screens';
import authorizedScreens from '@app/home';

const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => {
  const navigationRef = useRef<NavigationContainerRef<any>>(null);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerBackTitleVisible: false }}>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false, animation: 'fade' }}
          />
          {authorizedScreens.map(({ component, name, options }, index) => (
            <Stack.Screen component={component} key={index} name={name} options={options} />
          ))}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
