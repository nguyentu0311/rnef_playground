import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LogoSvg from '@src/assets/svgs/LogoSvg';
import {w} from '@src/common/sizes';
import {RectButton} from 'react-native-gesture-handler';
import Icon from '@react-native-vector-icons/fontawesome6';

const rectBtnConfig = {
  underlayColor: '#FFFFFF',
  activeOpacity: 0.1,
  rippleColor: '#FFFFFF1A',
  foreground: true,
};

export type HeaderProps = {};
export type HeaderRef = {};

const Header = React.forwardRef<HeaderRef, HeaderProps>((props, ref) => {
  React.useImperativeHandle(ref, () => ({}));
  return (
    <View className="h-64 flex-row items-center px-16">
      <View className="flex-1 flex-row items-center">
        <LogoSvg width={w(32)} height={w(32)} />
        <Text className="text-xl font-bold color-white ml-8">Watchify</Text>
      </View>
      <View className="flex-row items-center">
        <RectButton {...rectBtnConfig} style={styles.btn}>
          <Icon name="tv" iconStyle="solid" size={w(24)} color="#FFFFFF" />
        </RectButton>
        <View className="w-10" />
        <RectButton {...rectBtnConfig} style={styles.btn}>
          <Icon name="plus" iconStyle="solid" size={w(24)} color="#FFFFFF" />
        </RectButton>
        <View className="w-10" />
        <RectButton {...rectBtnConfig} style={styles.btn}>
          <Icon name="bell" iconStyle="solid" size={w(24)} color="#FFFFFF" />
        </RectButton>
        <View className="w-10" />
        <RectButton {...rectBtnConfig} style={styles.btn}>
          <Icon
            name="magnifying-glass"
            iconStyle="solid"
            size={w(24)}
            color="#FFFFFF"
          />
        </RectButton>
      </View>
    </View>
  );
});

export default React.memo(Header);

const styles = StyleSheet.create({
  btn: {
    padding: w(4),
    borderRadius: 8,
  },
});
