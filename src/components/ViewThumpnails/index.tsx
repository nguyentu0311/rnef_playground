import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {IconButton} from '@src/components/IconButton';
import Color from '@src/configs/Colors';
import {formatTimeAgo} from '@src/util';

type ThumpnailProps = {
  title: string; //Ten video
  thumbnailUrl: string;
  channel: string; //Ten kenh
  duration: string; //Thoi gian
  viewCount: string; //So luong nguoi xem
  seenTime?: string; //Thoi gian da xem
  size?: 'small' | 'large' | 'horizontal';
  onPress?: () => void;
};

export default function VideoThumbnail({
  title,
  thumbnailUrl,
  channel,
  duration,
  size = 'large',
  onPress,
}: ThumpnailProps) {
  const isHorizontal = size === 'horizontal';
  // STATE
  console.log(
    'VideoThumbnail render ==== ',
    title,
    thumbnailUrl,
    channel,
    duration,
    size
  );
  //
  // FUNCTION

  //
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, isHorizontal && styles.row]}>
      <Image
        source={{uri: thumbnailUrl}}
        style={[
          styles.thumbnail,
          size === 'small' && styles.thumbnailSmall,
          isHorizontal && styles.thumbnailHorizontal,
        ]}
      />
      <View style={styles.containerInfo}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/f6/aa/24/f6aa2407d3ca6532e0304d6cd0e9291d.jpg',
          }} // Placeholder for channel avatar
          style={styles.avatarImage}
        />
        <View style={styles.info}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.meta}>
            {'MyClip'} • {'1.2 Tr lượt xem'} • {formatTimeAgo(duration)}
          </Text>
        </View>
        <IconButton
          icon={require('@src/assets/images/icons/ic_more.png')}
          onPress={() => console.log('Liked')}
          tintColor={Color.white}
          style={styles.buttonMore}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
  },
  row: {
    flexDirection: 'row',
  },
  thumbnail: {
    width: '100%',
    height: 200,
    backgroundColor: '#eee',
  },
  thumbnailSmall: {
    height: 120,
  },
  thumbnailHorizontal: {
    width: 150,
    height: 90,
    borderRadius: 6,
    marginRight: 10,
  },
  containerInfo: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
  },
  info: {
    flex: 1,
  },
  avatarImage: {
    width: 32,
    height: 32,
    borderRadius: 20,
    marginRight: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
    color: Color.white,
    fontFamily: 'Inter-Bold',
  },
  meta: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '500',
    color: Color.greyB0,
    fontFamily: 'Inter-Bold',
  },
  buttonMore: {
    padding: 0,
    paddingTop: 2.5,
    marginLeft: 12,
    justifyContent: 'flex-start',
  },
});
