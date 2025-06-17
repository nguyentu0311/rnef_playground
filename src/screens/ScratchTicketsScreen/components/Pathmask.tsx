import React, {useState} from 'react';
import {Skia, SkPath} from '@shopify/react-native-skia';
import {Path} from '@shopify/react-native-skia';
import {PathMaskProps} from './types';
import {useDerivedValue, runOnJS} from 'react-native-reanimated';

export const PathMask = ({activeId, activePath, id}: PathMaskProps) => {
  const [path, setPath] = useState<SkPath>(Skia.Path.Make());

  useDerivedValue(() => {
    if (activeId.value === id) {
      runOnJS(setPath)(activePath.value);
    }
  }, [activeId, activePath]);

  return (
    <Path
      style="stroke"
      strokeJoin="round"
      strokeCap="round"
      path={path}
      strokeWidth={80}
    />
  );
};
