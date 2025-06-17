import React from 'react';
import Navigator from '@src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import './global.css';
import {StatusBar} from 'react-native';
import {VarProvider} from '@src/provider/VarProvider';
import {
  textScaling,
  heightScaling,
  widthScaling,
  heightScalingW,
} from '@src/common/sizes/nativewind';
import {PaperProvider} from 'react-native-paper';
import Icon from '@react-native-vector-icons/fontawesome6';
import {KeyboardProvider} from 'react-native-keyboard-controller';
const App = () => {
  return (
    <VarProvider
      variables={{
        ...textScaling,
        ...widthScaling,
        ...heightScaling,
        ...heightScalingW,
      }}>
      <KeyboardProvider>
        <PaperProvider
          settings={{
            // eslint-disable-next-line react/no-unstable-nested-components
            icon: props => <Icon {...props} />,
          }}>
          <SafeAreaProvider>
            <GestureHandlerRootView className="flex-1">
              <StatusBar
                translucent
                backgroundColor="#00000000"
                barStyle="light-content"
              />
              <Navigator />
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </PaperProvider>
      </KeyboardProvider>
    </VarProvider>
  );
};

export default App;
