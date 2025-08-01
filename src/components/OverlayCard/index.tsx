import {useState, useRef} from 'react';
import {ImageBackground, Text, StyleSheet, Pressable, View} from 'react-native';
import {StyleProps} from 'react-native-reanimated';
import Video, {VideoRef} from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import {convertNumberUnit} from '@src/util';

type OverlayCardProps = {
  thump_url?: string; // URL của hình ảnh thu nhỏ, nếu có
  source: string;
  title: string; // Ten video
  viewCount: number; // So luong view
  titleStyle?: string;
  videoStyle?: StyleProps;
  viewerStyle?: string;
  imageStyle?: string;
  onPress?: () => void;
};

export default function OverlayCard({
  thump_url,
  source,
  title,
  viewCount,
  titleStyle,
  viewerStyle,
  videoStyle,
  imageStyle,
  onPress,
}: OverlayCardProps) {
  const [previewing, setPreviewing] = useState(false);
  const videoRef = useRef<VideoRef>(null);

  return (
    <Pressable
      onPress={onPress}
      onLongPress={() => setPreviewing(true)}
      onPressOut={() => setPreviewing(false)}
      delayLongPress={300}>
      <View style={styles.defaultWrapper}>
        {previewing ? (
          <Video
            source={{uri: source}} // Sử dụng source từ props
            style={{flex: 1, ...videoStyle}} // Kết hợp với videoStyle
            resizeMode="cover"
            repeat
            muted
            paused={!previewing}
            ref={videoRef}
          />
        ) : (
          <ImageBackground
            source={{uri: thump_url}}
            style={styles.image}
            imageStyle={{borderRadius: 12}} // bo góc
            className={imageStyle}
          />
        )}
        <LinearGradient
          colors={['transparent', 'black']}
          style={styles.gradient}
        />
        <View style={styles.overlay}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.overlayText}
            className={titleStyle}>
            {title}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.overlayViewerText}
            className={viewerStyle}>
            {convertNumberUnit(viewCount)} lượt xem
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  defaultWrapper: {
    borderRadius: 12,
    overflow: 'hidden', // Đảm bảo các phần tử con không tràn ra ngoài viền bo gó
  },
  image: {
    justifyContent: 'flex-end', // Đặt Text dưới cùng
    padding: 10,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    height: '40%', // 👈 mờ từ 40% dưới ảnh
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    left: 16,
    right: 14,
    bottom: 16,
    backgroundColor: '#00000000', // nền trong suốt
    borderRadius: 8,
  },
  overlayText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    paddingBottom: 2,
    borderRadius: 6,
  },
  overlayViewerText: {
    color: '#fff',
    fontWeight: 'regular',
    fontSize: 12,
    borderRadius: 6,
  },
});
