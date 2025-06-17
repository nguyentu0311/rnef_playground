import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Canvas, Rect, BlurMask} from '@shopify/react-native-skia';
import {RectButton} from 'react-native-gesture-handler';
import {ROUTER_BOTTOM} from '@src/navigation/routers';
import Icon from '@react-native-vector-icons/fontawesome6';
import {h, w} from '@src/common/sizes';
import {UIDevice} from '@src/common/devices';

export interface BottomBarProps extends BottomTabBarProps {}
export type BottomBarRef = {};

const BottomBar = React.forwardRef<BottomBarRef, BottomBarProps>(
  (props, _ref) => {
    const {state, navigation, insets} = props;
    const mappingData = React.useCallback((name: string) => {
      switch (name) {
        case ROUTER_BOTTOM.HOME_SCREEN:
          return {
            name: 'Home',
            icon: 'house',
          };
        case ROUTER_BOTTOM.SHORT_VIDEO_SCREEN:
          return {
            name: 'Video ngắn',
            icon: 'fire',
          };
        case ROUTER_BOTTOM.LIVE_SCREEN:
          return {
            name: 'Trực tiếp',
            icon: 'podcast',
          };
        case ROUTER_BOTTOM.FAVORITE_SCREEN:
          return {
            name: 'Yêu thích',
            icon: 'heart',
          };
        case ROUTER_BOTTOM.PROFILE_SCREEN:
          return {
            name: 'Tài khoản',
            icon: 'user',
          };
        default:
          return null;
      }
    }, []);

    return (
      <View className="absolute min-w-full bottom-0 pb-safe  rounded-tl-[12] rounded-tr-[12] overflow-hidden bg-[#101010CC]">
        <Canvas pointerEvents="none" style={StyleSheet.absoluteFill}>
          <Rect
            x={0}
            y={0}
            width={UIDevice.width}
            height={h(64) + insets.bottom}
            color="#000000">
            <BlurMask blur={54} style="normal" />
          </Rect>
        </Canvas>
        <View className="h-64 flex-row items-center">
          {state.routes.map((e, i) => {
            const data = mappingData(e.name);
            const isFocused = state.index === i;
            const color = isFocused ? '#D21F3C' : '#B0B0B8';
            return (
              <RectButton
                key={e.key}
                onPress={() => {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: e.key,
                    canPreventDefault: true,
                  });

                  if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(e.name);
                  }
                }}
                underlayColor="#FFFFFF"
                activeOpacity={0.1}
                rippleColor="#FFFFFF1A"
                foreground
                style={styles.btn}>
                <Icon
                  iconStyle="solid"
                  name={data?.icon as any}
                  size={w(24)}
                  color={color}
                />
                <Text
                  className="text-sx font-bold mt-4"
                  style={{color}}
                  numberOfLines={1}>
                  {data?.name}
                </Text>
              </RectButton>
            );
          })}
        </View>
      </View>
    );
  }
);
export default React.memo(BottomBar);

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: h(64),
    borderRadius: 8,
  },
});
