import {Text, View} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '@src/navigation/types';
import DefaultActionBar from '@src/components/DefaultActionBar';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {UIDevice} from '@src/common/devices';

export interface ReAnimatedScreenProps
  extends RootStackScreenProps<'REANIMATED_SCREEN'> {}
export type ReAnimatedScreenRef = {};

const ReAnimatedScreen = React.forwardRef<
  ReAnimatedScreenRef,
  ReAnimatedScreenProps
>(() => {
  const offset = useSharedValue(UIDevice.width / 2 - 100);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offset.value,
        },
      ],
    };
  });
  React.useEffect(() => {
    offset.value = withRepeat(
      withTiming(-offset.value, {
        duration: 500,
        easing: Easing.ease,
      }),
      -1,
      true
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View className="flex-1">
      <DefaultActionBar text="ReAnimated" />
      <Text>index</Text>
      <Animated.View
        className="w-[100] h-[100] bg-red-400 rounded-[8] self-center"
        style={animatedStyle}
      />
    </View>
  );
});

export default React.memo(ReAnimatedScreen);
