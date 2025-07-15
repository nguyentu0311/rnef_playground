import VideoThumbnail from '@src/components/ViewThumpnails';
import {Item} from '@src/models/VideoModel';

export const VideoCard = ({item}: {item: Item}) => {
  return (
    <VideoThumbnail
      title={item.name ?? ''}
      thumbnailUrl={item.thumb_url ?? ''}
      channel={String(item.year)}
      duration={item.modified?.time ?? ''}
      size="large" // bạn có thể đổi thành 'small' hoặc 'horizontal'
      onPress={() => console.log('Đã nhấn:', item.name)}
      viewCount={'0'} // giả sử không có dữ liệu viewCount)}
    />
  );
};
