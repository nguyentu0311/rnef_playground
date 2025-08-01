import {View, StyleSheet} from 'react-native';
import {ShortModel} from '@src/models/ShortModel';
import OverlayCard from '@src/components/OverlayCard';

export const ShortCard = ({item}: {item: ShortModel}) => {
  return (
    <View className="w-[135] mr-[8]">
      <OverlayCard
        thump_url={item.thumb_url ?? ''}
        source={item.source ?? ''}
        title={item.name ?? ''}
        titleStyle="text-white text-xs"
        videoStyle={styles.videoStyle}
        viewCount={79123} // item.view_count ?? 0
        imageStyle="h-[230] w-full rounded-xl"
        viewerStyle="text-white text-xs"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  videoStyle: {
    width: '100%',
    height: 230,
    borderRadius: 12,
  },
});
