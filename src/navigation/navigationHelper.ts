import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

import type {RootStackParamList, RoutesType} from './types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const refNavigation = createNavigationContainerRef<RootStackParamList>();

export const navigateFromCurrentScreen = (
  router: keyof RoutesType,
  params?: NativeStackScreenProps<RoutesType>['route']['params']
) => {
  if (refNavigation.isReady()) {
    refNavigation.dispatch(CommonActions.navigate(router, params));
  }
};

export const navigateGoback = () => {
  if (refNavigation.isReady()) {
    refNavigation.dispatch(CommonActions.goBack());
  }
};
