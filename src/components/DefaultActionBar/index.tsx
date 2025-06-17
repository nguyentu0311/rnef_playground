import {ColorValue, TextProps, View} from 'react-native';
import React from 'react';
import Icon from '@react-native-vector-icons/fontawesome6';
import {navigateGoback} from '@src/navigation/navigationHelper';
import {BaseButton, Text} from 'react-native-gesture-handler';

export type DefaultActionBarProps = {
  iconSize?: number;
  iconColor?: ColorValue;
  iconName?: string;
  textProps?: TextProps;
  text?: string;
  onPressLeft?: () => void;
  bgColor?: string;
  iconRightName?: string;
  onPressRight?: () => void;
};
export type DefaultActionBarRef = {};

const DefaultActionBar = React.forwardRef<
  DefaultActionBarRef,
  DefaultActionBarProps
>((props, ref) => {
  const {
    iconColor = '#000000',
    iconName = 'chevron-left',
    iconSize = 24,
    textProps,
    text,
    onPressLeft,
    bgColor = '#FFFFFF',
    iconRightName,
    onPressRight,
  } = props;

  React.useImperativeHandle(ref, () => ({}));
  return (
    <View
      className="flex-row items-center w-full pt-safe-or-[var(--h-10)] pb-[var(--h-10)] px-16"
      style={{backgroundColor: bgColor}}>
      <BaseButton
        onPress={() => {
          if (onPressLeft) {
            onPressLeft();
          } else {
            navigateGoback();
          }
        }}>
        <Icon
          name={iconName as any}
          iconStyle="solid"
          color={iconColor}
          size={iconSize}
        />
      </BaseButton>
      <Text
        className="flex-1 mx-[10] text-center text-xl text-black font-semibold"
        numberOfLines={1}
        {...textProps}>
        {text}
      </Text>
      {iconRightName ? (
        <BaseButton
          onPress={() => {
            if (onPressRight) {
              onPressRight();
            }
          }}>
          <Icon name={iconRightName as any} color={iconColor} size={iconSize} />
        </BaseButton>
      ) : (
        <View style={{width: iconSize}} />
      )}
    </View>
  );
});

export default React.memo(DefaultActionBar);
