import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TopStackScreenProps} from '@src/navigation/types';
import LogoSvg from '@src/assets/svgs/LogoSvg';

export interface MovieScreenProps extends TopStackScreenProps<'MOVIE_SCREEN'> {}
export type MovieScreenRef = {};

const MovieScreen = React.forwardRef<MovieScreenRef, MovieScreenProps>(
  (props, _ref) => {
    const {} = props;
    return (
      <View className="flex-1 bg-[#141414] justify-end">
        <Text className="color-white">MovieScreen</Text>
        <LogoSvg width={30} height={30} />
      </View>
    );
  }
);

export default React.memo(MovieScreen);

const styles = StyleSheet.create({});
