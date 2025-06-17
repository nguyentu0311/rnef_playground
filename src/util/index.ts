/* eslint-disable eqeqeq */
/* eslint-disable no-bitwise */
import React from 'react';
import {BackHandler} from 'react-native';

export const randomUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });
};

export function useMounted(callback: () => void, deps: any[] = []) {
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (mounted) {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);
}

export const sharedClamp = (
  value: number,
  lowerValue: number,
  upperValue: number
) => {
  'worklet';

  return Math.min(Math.max(lowerValue, value), upperValue);
};

export function useDisableBackHandler(
  disabled: boolean,
  callback?: () => void
) {
  const onBackPress = React.useCallback(() => {
    if (typeof callback === 'function') {
      callback();
    }
    return true;
  }, [callback]);

  React.useEffect(() => {
    let subscription: {remove: () => void} | undefined;

    if (disabled) {
      subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );
    }

    return () => {
      subscription?.remove();
    };
  }, [disabled, onBackPress]);
}
