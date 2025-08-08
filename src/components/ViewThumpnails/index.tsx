import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {IconButton} from '@src/components/IconButton';
import Color from '@src/configs/Colors';
import {formatTimeAgo, convertNumberUnit} from '@src/util';
import ViewTopics from '../ViewTopics';

type ThumpnailProps = {
  title: string; //Ten video
  thumbnailUrl: string;
  channel: string; //Ten kenh
  duration: string; //Thoi gian
  viewCount: number; //So luong nguoi xem
  seenTime?: string; //Thoi gian da xem
  size?: 'small' | 'large';
  onPress?: () => void;
};

export default function VideoThumbnail({
  title,
  thumbnailUrl,
  channel,
  duration,
  viewCount,
  size = 'large',
  onPress,
}: ThumpnailProps) {
  // const isHorizontal = size === 'horizontal';
  const isSmall = size === 'small';

  // STATE
  // console.log(
  //   'VideoThumbnail render ==== ',
  //   title,
  //   thumbnailUrl,
  //   channel,
  //   duration,
  //   size
  // );
  // FUNCTION

  //
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, isSmall && styles.containerBorder]}>
      {/* //isHorizontal && styles.row */}
      <View>
        <Image
          source={{uri: thumbnailUrl}}
          style={[styles.thumbnail, isSmall && styles.containerBorder]}
        />
        {isSmall && (
          <View style={styles.leftPosition}>
            <View style={styles.liveStreamWrapper}>
              <Image
                source={require('@src/assets/images/icons/ic_live_stream.png')}
                style={styles.icon}
              />
              <Text style={styles.textWithSpace}>TRỰC TIẾP</Text>
            </View>
            <View style={styles.viewerLiveStreamWrapper}>
              <Image
                source={require('@src/assets/images/icons/ic_eye_on.png')}
                style={styles.icon}
              />
              <Text style={styles.textWithSpace}>
                {convertNumberUnit(viewCount)} lượt xem
              </Text>
            </View>
          </View>
        )}
        {!isSmall && (
          <View style={styles.timeWrapper}>
            <Text style={styles.textWithoutSpace}>03:53</Text>
          </View>
        )}
      </View>
      <View
        style={[styles.containerInfo, isSmall && styles.containerInfoSmall]}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/f6/aa/24/f6aa2407d3ca6532e0304d6cd0e9291d.jpg',
          }} // Placeholder for channel avatar
          style={styles.avatarImage}
        />
        <View style={styles.info}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
            {title} {/* Movie name */}
          </Text>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.meta}>
            {'Mr.Siro'} {/* Channel name */}
            {!isSmall && viewCount
              ? ` • ${convertNumberUnit(viewCount)} lượt xem`
              : ''}
            {' • '} {/* Channel view */}
            {formatTimeAgo(duration)} {/* Channel last time upload */}
          </Text>
          {isSmall && (
            <ViewTopics
              topics={['Game', 'Esports', 'Free Fire', 'Liên Quân', 'Valorant']}
            />
          )}
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
  containerBorder: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    width: 16,
    height: 16,
  },
  thumbnail: {
    width: '100%',
    height: 198,
    backgroundColor: '#eee',
  },
  thumbnailSmall: {
    height: 188,
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
  containerInfoSmall: {
    height: 100, //88 height + 12 padding top
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
  leftPosition: {
    position: 'absolute',
    top: 8,
    left: 8,
    flexDirection: 'row',
  },
  liveStreamWrapper: {
    backgroundColor: Color.redD21,
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    flexDirection: 'row',
  },
  viewerLiveStreamWrapper: {
    marginLeft: 8,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    flexDirection: 'row',
  },
  timeWrapper: {
    position: 'absolute',
    right: 12,
    bottom: 8,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  textWithSpace: {
    fontSize: 12,
    color: 'white',
    fontWeight: '600',
    lineHeight: 16,
    marginLeft: 4,
  },
  textWithoutSpace: {
    fontSize: 12,
    color: 'white',
    fontWeight: '600',
    lineHeight: 16,
  },
});
