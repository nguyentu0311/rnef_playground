import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TopStackScreenProps} from '@src/navigation/types';

export interface SuggestScreenProps
  extends TopStackScreenProps<'SUGGEST_SCREEN'> {}
export type SuggestScreenRef = {};

const SuggestScreen = React.forwardRef<SuggestScreenRef, SuggestScreenProps>(
  (props, _ref) => {
    const {} = props;
    return (
      <View className="flex-1 bg-[#141414]">
        <Text>SuggestScreen</Text>
      </View>
    );
  }
);

export default React.memo(SuggestScreen);

const styles = StyleSheet.create({});
