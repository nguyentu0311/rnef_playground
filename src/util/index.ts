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

export function formatTimeAgo(timestamp: string): string {
  const now = new Date();
  const past = new Date(timestamp);
  const diffMs = now.getTime() - past.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 60) {
    return 'Vừa xong';
  } else if (diffMin < 60) {
    return `${diffMin} phút trước`;
  } else if (diffHour < 24) {
    return `${diffHour} giờ trước`;
  } else {
    return `${diffDay} ngày trước`;
  }
}

export function convertNumberUnit(value: number): string {
  if (value < 1000) return value.toString();
  if (value < 1_000_000)
    return `${(value / 1000).toFixed(value >= 10_000 ? 0 : 1)}K`;
  if (value < 1_000_000_000)
    return `${(value / 1_000_000).toFixed(value >= 10_000_000 ? 0 : 1)}M`;
  return `${(value / 1_000_000_000).toFixed(value >= 10_000_000_000 ? 0 : 1)}B`;
}
