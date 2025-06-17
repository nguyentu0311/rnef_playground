import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '@src/navigation/types';
import Carousel, {
  CarouselRenderItem,
  Pagination,
} from 'react-native-reanimated-carousel';
import {UIDevice} from '@src/common/devices';
import {useSharedValue} from 'react-native-reanimated';
import {RectButton} from 'react-native-gesture-handler';
import {ROUTER_ROOT} from '@src/navigation/routers';
import {useIsFocused} from '@react-navigation/native';
const DATA_SPLASH = [
  {
    title: 'Xem hàng triệu video đặc sắc hấp dẫn',
    des: 'Đa dạng chủ đề Nhạc, Phim, TVShow, Tin Tức, Sao',
    img: require('@src/assets/images/onboard/sp_2.png'),
  },
  {
    title: 'Phát sóng trực tiếp các sự kiện giải trí hot',
    des: 'Hội tụ top streamers, KOLs và giải đấu Esport đỉnh cao',
    img: require('@src/assets/images/onboard/sp_1.png'),
  },
  {
    title: 'Đăng tải và chia sẻ video mọi lúc mọi nơi',
    des: 'Dễ dàng lưu trữ và chia sẻ video với bạn bè',
    img: require('@src/assets/images/onboard/sp_3.png'),
  },
];

export interface OnboardScreenProps
  extends RootStackScreenProps<'ONBOARD_SCREEN'> {}
export type OnboardScreenRef = {};

const OnboardScreen = React.forwardRef<OnboardScreenRef, OnboardScreenProps>(
  (props, _ref) => {
    const {navigation} = props;
    const isFocused = useIsFocused();
    // STATE

    //
    const progress = useSharedValue<number>(0);
    // FUNC
    const renderItem: CarouselRenderItem<{
      title: string;
      des: string;
      img: any;
    }> = React.useCallback(info => {
      const item = info.item;
      return (
        <View className="items-center justify-around flex-1">
          <Image
            source={item.img}
            resizeMode="cover"
            className="w-300  h-332"
          />
          <Text className="text-2xl text-white font-bold text-center w-300">
            {item.title}
          </Text>
          <Text className="text-lg text-white font-normal text-center w-300">
            {item.des}
          </Text>
        </View>
      );
    }, []);
    //
    return (
      <View className="flex-1 bg-[#D21F3C] p-safe">
        <Carousel
          autoPlay={isFocused}
          loop={true}
          pagingEnabled
          snapEnabled={false}
          onProgressChange={progress}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          width={UIDevice.width}
          height={UIDevice.height * (4 / 5)}
          data={DATA_SPLASH}
          renderItem={renderItem}
        />

        <Pagination.Custom
          data={DATA_SPLASH}
          progress={progress}
          dotStyle={styles.dot}
          size={8}
          activeDotStyle={styles.activeDot}
        />

        <View className="flex-1 justify-end">
          <RectButton
            style={styles.btn}
            onPress={() => {
              navigation.navigate(ROUTER_ROOT.LOGIN_SCREEN);
            }}
            underlayColor="#FFFFFF"
            activeOpacity={0.1}
            rippleColor="#FFFFFF1A"
            foreground>
            <Text className="text-base color-white font-bold">Bắt đầu</Text>
          </RectButton>
        </View>
      </View>
    );
  }
);

export default React.memo(OnboardScreen);

const styles = StyleSheet.create({
  btn: {
    marginHorizontal: 32,
    marginBottom: 10,
    backgroundColor: '#141414',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 10,
  },

  dot: {
    backgroundColor: '#FFFFFF66',
    borderRadius: 100,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
    width: 20,
  },
});
