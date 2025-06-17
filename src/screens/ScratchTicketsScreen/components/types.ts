import {SkPath} from '@shopify/react-native-skia';
import {SharedValue} from 'react-native-reanimated';

export type PathType = {
  id: string;
};

export type PathMaskProps = {
  id: string;
  activeId: SharedValue<string | undefined>;
  activePath: SharedValue<SkPath>;
};
