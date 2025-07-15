import {View, Text, Image} from 'react-native';
import {LiveStreamModel} from '@src/models/LiveStreamModel';

export const LiveStreamCard = ({item}: {item: LiveStreamModel}) => {
  return (
    <View className="w-[135] mr-3">
      <Image
        source={{uri: item.thumb_url}}
        className="h-[230] w-full rounded-xl"
      />
      <Text className="text-red-500 mt-1 font-semibold">TRỰC TIẾP</Text>
      <Text className="text-white" numberOfLines={2}>
        {item.name}
      </Text>
    </View>
  );
};
