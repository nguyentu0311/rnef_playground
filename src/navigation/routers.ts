import {
  BottomStackParamList,
  RootStackParamList,
  TopStackParamList,
} from './types';

type Entries<T> = {
  [K in keyof T]: K;
};
export const ROUTER_ROOT: Entries<RootStackParamList> = {
  SCRATCH_TICKETS_SCREEN: 'SCRATCH_TICKETS_SCREEN',
  REANIMATED_SCREEN: 'REANIMATED_SCREEN',
  ONBOARD_SCREEN: 'ONBOARD_SCREEN',
  LOGIN_SCREEN: 'LOGIN_SCREEN',
  BOTTOM_STACK: 'BOTTOM_STACK',
};
export const ROUTER_BOTTOM: Entries<BottomStackParamList> = {
  HOME_SCREEN: 'HOME_SCREEN',
  SHORT_VIDEO_SCREEN: 'SHORT_VIDEO_SCREEN',
  LIVE_SCREEN: 'LIVE_SCREEN',
  FAVORITE_SCREEN: 'FAVORITE_SCREEN',
  PROFILE_SCREEN: 'PROFILE_SCREEN',
};

export const ROUTER_TOP: Entries<TopStackParamList> = {
  SUGGEST_SCREEN: 'SUGGEST_SCREEN',
  MOVIE_SCREEN: 'MOVIE_SCREEN',
};
