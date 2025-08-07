import VideoThumbnail from '@src/components/ViewThumpnails';
import {Item} from '@src/models/VideoModel';

export const VideoCard = ({item}: {item: Item}) => {
  return (
    <VideoThumbnail
      title={item.name ?? ''}
      thumbnailUrl={item.thumb_url ?? ''}
      channel={String(item.year)}
      duration={item.modified?.time ?? ''}
      size="large"
      onPress={() => console.log('Đã nhấn:', item.name)}
      viewCount={11230} // giả sử có dữ liệu
    />
  );
};
