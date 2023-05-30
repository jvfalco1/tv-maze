import React from 'react';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { Blur, Button, Container, Icon, Title } from './styles';

const CustomBottomTab: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const icons = {
    HomeTabScreen: 'home',
    MyListTabScreen: 'list',
    ProfileTabScreen: 'user',
  };

  return (
    <Container>
      <Blur />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Button key={route.name} onPress={onPress} onLongPress={onLongPress}>
            <Icon name={icons[route.name as keyof typeof icons]} selected={isFocused} />
            <Title selected={isFocused}>{label}</Title>
          </Button>
        );
      })}
    </Container>
  );
};

export default CustomBottomTab;
