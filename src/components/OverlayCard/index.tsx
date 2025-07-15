import {useState, useRef} from 'react';
import {ImageBackground, Text, StyleSheet, Pressable, View} from 'react-native';
import Video, {VideoRef} from 'react-native-video';

type OverlayCardProps = {
  thump_url?: string; // URL của hình ảnh thu nhỏ, nếu có
  source: string;
  title: string; // Ten video
  titleStyle?: string;
  containerStyle?: string;
  imageStyle?: string;
  onPress?: () => void;
};

export default function OverlayCard({
  thump_url,
  source,
  title,
  titleStyle,
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
      <View>
        {previewing ? (
          <Video
            source={{uri: source}} // Sử dụng source từ props
            className={imageStyle}
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
            className={imageStyle}>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.text}
              className={titleStyle}>
              {title}
            </Text>
          </ImageBackground>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    // width: 200,
    // height: 300,
    justifyContent: 'flex-end', // Đặt Text dưới cùng
    padding: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    backgroundColor: 'rgba(0,0,0,0.4)', // nền mờ
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
});
