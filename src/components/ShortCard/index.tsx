import {View} from 'react-native';
import {ShortModel} from '@src/models/ShortModel';
import OverlayCard from '@src/components/OverlayCard';

export const ShortCard = ({item}: {item: ShortModel}) => {
  return (
    <View className="w-[135] mr-[8]">
      <OverlayCard
        thump_url={item.thumb_url ?? ''}
        source={item.source ?? ''}
        title={item.name ?? ''}
        titleStyle="text-white text-sm"
        videoStyle={{
          width: '100%',
          height: 230,
          borderRadius: 12,
        }}
        imageStyle="h-[230] w-full rounded-xl"
      />
    </View>
  );
};
