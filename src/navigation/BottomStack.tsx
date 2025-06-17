import {View} from 'react-native';
import React from 'react';
import {
  BottomStackParamList,
  RootStackScreenProps,
} from '@src/navigation/types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTER_BOTTOM} from '@src/navigation/routers';
import BottomBar from '@src/navigation/components/BottomBar';
import HomeScreen from '@src/screens/HomeScreen';

export interface BottomStackProps
  extends RootStackScreenProps<'BOTTOM_STACK'> {}
export type BottomStackRef = {};

const Stack = createBottomTabNavigator<BottomStackParamList>();
const BottomStack = React.forwardRef<BottomStackRef, BottomStackProps>(
  (props, _ref) => {
    const {} = props;
    return (
      <Stack.Navigator
        // eslint-disable-next-line react/no-unstable-nested-components, @typescript-eslint/no-shadow
        tabBar={props => <BottomBar {...props} />}
        screenOptions={{
          headerShown: false,
          lazy: true,
        }}>
        <Stack.Screen name={ROUTER_BOTTOM.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen
          name={ROUTER_BOTTOM.SHORT_VIDEO_SCREEN}
          component={() => <View className="flex-1 bg-red-400" />}
        />
        <Stack.Screen
          name={ROUTER_BOTTOM.LIVE_SCREEN}
          component={() => <View className="flex-1 bg-red-400" />}
        />
        <Stack.Screen
          name={ROUTER_BOTTOM.FAVORITE_SCREEN}
          component={() => <View className="flex-1 bg-red-400" />}
        />
        <Stack.Screen
          name={ROUTER_BOTTOM.PROFILE_SCREEN}
          component={() => <View className="flex-1 bg-red-400" />}
        />
      </Stack.Navigator>
    );
  }
);

export default React.memo(BottomStack);
