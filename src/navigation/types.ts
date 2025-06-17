import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
export type RootStackParamList = {
  SCRATCH_TICKETS_SCREEN: undefined;
  REANIMATED_SCREEN: undefined;
  ONBOARD_SCREEN: undefined;
  LOGIN_SCREEN: undefined;
  BOTTOM_STACK: NavigatorScreenParams<BottomStackParamList>;
};

export type BottomStackParamList = {
  HOME_SCREEN: NavigatorScreenParams<TopStackParamList>;
  SHORT_VIDEO_SCREEN: undefined;
  LIVE_SCREEN: undefined;
  FAVORITE_SCREEN: undefined;
  PROFILE_SCREEN: undefined;
};

export type TopStackParamList = {
  SUGGEST_SCREEN: undefined;
  MOVIE_SCREEN: undefined;
};
export type RoutesType = RootStackParamList;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type BottomStackScreenProps<T extends keyof BottomStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomStackParamList, T>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type TopStackScreenProps<T extends keyof TopStackParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<TopStackParamList, T>,
    CompositeScreenProps<
      BottomTabScreenProps<BottomStackParamList>,
      NativeStackScreenProps<RootStackParamList>
    >
  >;
