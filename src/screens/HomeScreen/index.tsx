import {View} from 'react-native';
import React from 'react';
import {BottomStackScreenProps, TopStackParamList} from '@src/navigation/types';
import Header from './components/Header';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {UIDevice} from '@src/common/devices';
import {ROUTER_TOP} from '@src/navigation/routers';
import SuggestScreen from '@src/screens/SuggestScreen';
import MovieScreen from '@src/screens/MovieScreen';
import TopTab from '@src/screens/HomeScreen/components/TopTab';

const Stack = createMaterialTopTabNavigator<TopStackParamList>();

export interface HomeScreenProps
  extends BottomStackScreenProps<'HOME_SCREEN'> {}
export type HomeScreenRef = {};

const HomeScreen = React.forwardRef<HomeScreenRef, HomeScreenProps>(
  (props, _ref) => {
    const {} = props;
    // STATE

    //
    // FUNCTION

    //
    return (
      <View className="flex-1 bg-[#141414] p-safe">
        <Header />
        <Stack.Navigator
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBar={p => <TopTab {...p} />}
          initialLayout={{width: UIDevice.width}}
          initialRouteName={ROUTER_TOP.SUGGEST_SCREEN}>
          <Stack.Screen
            name={ROUTER_TOP.SUGGEST_SCREEN}
            component={SuggestScreen}
          />
          <Stack.Screen
            name={ROUTER_TOP.MOVIE_SCREEN}
            component={MovieScreen}
          />
        </Stack.Navigator>
      </View>
    );
  }
);

export default React.memo(HomeScreen);
