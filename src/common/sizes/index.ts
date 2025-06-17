import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

export const f = (size: number) => moderateScale(size, 0.3);
export const w = (size: number, factor?: number) => moderateScale(size, factor);
export const h = (size: number, factor?: number) =>
  moderateVerticalScale(size, factor);
