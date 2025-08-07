import {View} from 'react-native';
import {LiveStreamModel} from '@src/models/LiveStreamModel';
import VideoThumbnail from '@src/components/ViewThumpnails';

export const LiveStreamCard = ({item}: {item: LiveStreamModel}) => {
  return (
    <View className="rounded-md w-[323] mr-2 rounded-tl-2xl rounded-tr-2xl">
      <VideoThumbnail
        title={item.name ?? ''}
        thumbnailUrl={item.thumb_url ?? ''}
        channel={''}
        duration={''}
        size="small"
        onPress={() => console.log('Đã nhấn:', item.name)}
        viewCount={125}
      />
    </View>
  );
};
