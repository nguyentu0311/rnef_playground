import React from 'react';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import RootStack from '@src/navigation/RootStack';
import {refNavigation} from '@src/navigation/navigationHelper';
import {RootStackParamList} from '@src/navigation/types';

const Navigator = () => {
  const linking: LinkingOptions<RootStackParamList> = {
    prefixes: ['playground://'],
  };
  return (
    <NavigationContainer ref={refNavigation} linking={linking}>
      <RootStack />
    </NavigationContainer>
  );
};

export default Navigator;
