import {View} from 'react-native';
import React from 'react';

import DefaultActionBar from '@src/components/DefaultActionBar';
import {ScratchTicket} from './components/Scratchtickets';
import {RootStackScreenProps} from '@src/navigation/types';

export interface ScratchTicketsScreenProps
  extends RootStackScreenProps<'SCRATCH_TICKETS_SCREEN'> {}
export type ScratchTicketsScreenRef = {};

const ScratchTicketsScreen = React.forwardRef<
  ScratchTicketsScreenRef,
  ScratchTicketsScreenProps
>((props, _ref) => {
  const {} = props;
  return (
    <View className="flex-1">
      <DefaultActionBar text="Scratch-tickets" />
      <ScratchTicket />
    </View>
  );
});

export default React.memo(ScratchTicketsScreen);
