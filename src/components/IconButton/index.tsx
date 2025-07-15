// src/components/IconButton.tsx
import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
  ViewStyle,
  ImageStyle,
} from 'react-native';

type Props = {
  icon: ImageSourcePropType;
  onPress: () => void;
  size?: number;
  tintColor?: string;
  style?: ViewStyle;
  iconStyle?: ImageStyle;
  disabled?: boolean;
};

export const IconButton: React.FC<Props> = ({
  icon,
  onPress,
  size = 24,
  tintColor,
  style,
  iconStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, style, disabled && styles.disabled]}>
      <Image
        source={icon}
        style={[{width: size, height: size, tintColor}, iconStyle]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.4,
  },
});
