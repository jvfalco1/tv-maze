import React, { useCallback } from 'react';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';

import HomeTabScreen from '@app/main/screens/tabs/home';
import MyListTab from '@app/main/screens/tabs/myListTab';

import CustomBottomTab from '../components/bottomTab';

const BottomTab = createBottomTabNavigator();

const Tabs: React.FC = () => {
  const renderTab = useCallback((props: BottomTabBarProps) => {
    return <CustomBottomTab {...props} />;
  }, []);

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={renderTab}>
      <BottomTab.Screen
        name="HomeTabScreen"
        component={HomeTabScreen}
        options={{ title: 'Home' }}
      />
      <BottomTab.Screen
        name="MyListTabScreen"
        component={MyListTab}
        options={{ title: 'Favorites' }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
