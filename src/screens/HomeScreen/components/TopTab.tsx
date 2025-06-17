import {LayoutChangeEvent, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import Icon from '@react-native-vector-icons/fontawesome6';
import {h, w} from '@src/common/sizes';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import {ROUTER_TOP} from '@src/navigation/routers';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const rectBtnConfig = {
  underlayColor: '#FFFFFF',
  activeOpacity: 0.1,
  rippleColor: '#FFFFFF1A',
  foreground: true,
};

export interface TopTabProps extends MaterialTopTabBarProps {}
export type TopTabRef = {};

const TopTab = React.forwardRef<TopTabRef, TopTabProps>((props, _ref) => {
  const {state, navigation} = props;
  const {routes, index} = state;

  // REF
  const layouts = React.useRef<{x: number; width: number}[]>([]);
  //
  // Animated
  const translateX = useSharedValue(0);
  const width = useSharedValue(0);
  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
    width: width.value,
  }));
  //

  // FUNC
  const mappingLabel = React.useCallback((value: string) => {
    switch (value) {
      case ROUTER_TOP.SUGGEST_SCREEN:
        return 'Đề xuất';
      case ROUTER_TOP.MOVIE_SCREEN:
        return 'Phim';
      default:
        '';
    }
  }, []);
  const onItemLayout = (idx: number) => (event: LayoutChangeEvent) => {
    const {x, width: tw} = event.nativeEvent.layout;
    layouts.current[idx] = {x, width: tw};
    if (idx === state.index) {
      translateX.value = x;
      width.value = tw;
    }
  };
  //

  // EFFECT
  React.useEffect(() => {
    const layout = layouts.current[index];
    if (layout) {
      translateX.value = withTiming(layout.x, {duration: 200});
      width.value = withTiming(layout.width, {duration: 200});
    }
  }, [index, translateX, width]);

  //
  return (
    <View className="flex-row items-center ml-16">
      <View className="flex-row items-center justify-center">
        <Icon iconStyle="solid" name="compass" color="#B0B0B8" size={w(20)} />
        <Text className="text-sm font-bold color-[#B0B0B8] ml-4">Khám phá</Text>
      </View>
      <ScrollView
        horizontal
        className="flex-1"
        contentContainerClassName="grow h-26">
        {routes.map((e, i) => {
          return (
            <View key={e.key} onLayout={onItemLayout(i)}>
              <RectButton
                onPress={() => navigation.navigate(e.name)}
                style={styles.btn}
                {...rectBtnConfig}>
                <Text className="text-sm font-bold color-[#B0B0B8] ">
                  {mappingLabel(e.name)}
                </Text>
              </RectButton>
            </View>
          );
        })}
        <Animated.View
          pointerEvents="box-none"
          className="absolute h-3 bg-[#D21F3C] w-100 bottom-0 rounded-full"
          style={indicatorStyle}
        />
      </ScrollView>
    </View>
  );
});

export default React.memo(TopTab);

const styles = StyleSheet.create({
  btn: {
    height: h(26),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: w(8),
    marginHorizontal: w(4),
  },
});
