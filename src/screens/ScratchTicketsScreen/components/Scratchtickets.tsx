import React, {useState} from 'react';
import {LayoutChangeEvent, useWindowDimensions, View} from 'react-native';

import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {runOnJS, useSharedValue} from 'react-native-reanimated';

import {
  Canvas,
  Group,
  Image,
  Mask,
  Skia,
  useImage,
} from '@shopify/react-native-skia';
import {PathMask} from './Pathmask';
import {PathType} from './types';
import {randomUUID} from '@src/util';
import defaultStyles from '@src/common/styles';

export const ScratchTicket = () => {
  const {width} = useWindowDimensions();

  const cat = useImage(require('@src/assets/images/cat.jpg'));

  const scratch_me = useImage(require('@src/assets/images/scratch_me.png'));

  const [paths, setPaths] = useState<Array<PathType>>([]);

  const activePath = useSharedValue(Skia.Path.Make());

  const activePathID = useSharedValue<string | undefined>(undefined);

  const [heightCanvas, setHeightCanvas] = useState(0);

  const createPath = (x: number, y: number) => {
    const newId = randomUUID();

    setPaths(d => d.concat([{id: newId}]));

    const path = Skia.Path.Make();

    path.moveTo(x, y);

    activePath.value = path;

    activePathID.value = newId;
  };

  const lineToPath = (x: number, y: number) => {
    activePath.value = activePath.value.lineTo(x, y);
  };

  const closePath = () => {
    activePathID.value = undefined;
  };

  const gesture = Gesture.Pan()
    .shouldCancelWhenOutside(false)
    .onStart(({x, y}) => {
      runOnJS(createPath)(x, y);
    })
    .onChange(({x, y}) => {
      runOnJS(lineToPath)(x, y);
    })
    .onEnd(() => {
      runOnJS(closePath)();
    });

  const renderPath = (item: PathType) => {
    return (
      <PathMask
        key={item.id}
        activeId={activePathID}
        activePath={activePath}
        id={item.id}
      />
    );
  };

  const onLayoutCanvas = (e: LayoutChangeEvent) => {
    setHeightCanvas(e.nativeEvent.layout.height);
  };

  if (!cat || !scratch_me) {
    return null;
  }
  return (
    <GestureDetector gesture={gesture}>
      <View onLayout={onLayoutCanvas} className="flex-1 bg-red-400">
        <Canvas style={defaultStyles.flex_1}>
          {heightCanvas ? (
            <>
              <Image
                x={width / 2 - 150}
                y={heightCanvas / 2 - 50}
                width={300}
                height={100}
                image={scratch_me}
                fit="fill"
              />
              <Mask mask={<Group>{paths.map(renderPath)}</Group>}>
                <Image
                  x={0}
                  y={0}
                  width={width}
                  height={heightCanvas}
                  image={cat}
                  fit="cover"
                />
              </Mask>
            </>
          ) : null}
        </Canvas>
      </View>
    </GestureDetector>
  );
};
