import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {ROUTER_ROOT} from './routers';
import ScratchTicketsScreen from '@src/screens/ScratchTicketsScreen';
import ReAnimatedScreen from '@src/screens/ReAnimatedScreen';
import OnBoardScreen from '@src/screens/OnBoardScreen';
import LoginScreen from '@src/screens/LoginScreen';
import BottomStack from '@src/navigation/BottomStack';

const Stack = createNativeStackNavigator<RootStackParamList>();
const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ROUTER_ROOT.ONBOARD_SCREEN}>
      <Stack.Screen
        name={ROUTER_ROOT.SCRATCH_TICKETS_SCREEN}
        component={ScratchTicketsScreen}
      />
      <Stack.Screen
        name={ROUTER_ROOT.REANIMATED_SCREEN}
        component={ReAnimatedScreen}
      />
      <Stack.Screen
        name={ROUTER_ROOT.ONBOARD_SCREEN}
        component={OnBoardScreen}
      />
      <Stack.Screen name={ROUTER_ROOT.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={ROUTER_ROOT.BOTTOM_STACK} component={BottomStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
