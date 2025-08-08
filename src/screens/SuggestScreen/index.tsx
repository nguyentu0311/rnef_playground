import {
  ActivityIndicator,
  FlatList,
  View,
  RefreshControl,
  Text,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {TopStackScreenProps} from '@src/navigation/types';
import apiInstance from '../../api/baseApiService';
// import {uniqBy} from 'lodash';
import Colors from '@src/configs/Colors';
import {Root, Item, mapToRoot} from '@src/models/VideoModel';
import {ShortModel} from '@src/models/ShortModel';
import {LiveStreamModel} from '@src/models/LiveStreamModel';
import {ShortCard} from '@src/components/ShortCard';
import {LiveStreamCard} from '@src/components/LiveStreamCard';
import {VideoCard} from '@src/components/VideoCard';

export interface SuggestScreenProps
  extends TopStackScreenProps<'SUGGEST_SCREEN'> {}
export type SuggestScreenRef = {};
const PAGE_SIZE = 10;
type VideoItem = {
  type: 'video';
  data: Item; // dữ liệu video
};
type ModuleItem = {
  type: 'module';
  data: React.ReactElement;
};

type ListItem = VideoItem | ModuleItem;

const SuggestScreen = React.forwardRef<SuggestScreenRef, SuggestScreenProps>(
  (props, _ref) => {
    const {} = props;
    const [videos, setVideos] = useState<Item[]>([]);
    const [page, setPage] = useState<number>(1);
    const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [isEnd, setIsEnd] = useState<boolean>(false);

    const fetchVideos = async (p: number) => {
      try {
        const response = await apiInstance.get(
          `danh-sach/phim-moi-cap-nhat?page=${p}`
        );
        console.log('page = ', p, 'response= ', response.data);
        const responseModel: Root = mapToRoot(response.data);
        console.log('responseModel= ', responseModel);
        return responseModel.items;
      } catch (error: any) {
        // Xử lý lỗi chi tiết
        if (error.response) {
          // Lỗi từ server
          throw new Error(error.response.data.message || 'Server Error');
        } else if (error.request) {
          // Không nhận được phản hồi
          throw new Error('Không thể kết nối đến máy chủ');
        } else {
          // Lỗi setup request
          throw new Error('Lỗi không xác định');
        }
      }
    };

    const loadVideos = useCallback(async () => {
      console.log('loadVideo called', page);
      if (loading || isEnd) return;
      setLoading(true);
      const newVideos: Item[] = (await fetchVideos(page)) || [];
      if (newVideos.length < PAGE_SIZE) setIsEnd(true);
      setVideos(prev => [...prev, ...newVideos]);
      setLoading(false);
    }, [loading, isEnd, page]);

    const handleLoadMore = useCallback(async () => {
      try {
        console.log('handle load more called');
        await loadVideos();
      } catch (e) {}
    }, [loadVideos]); // loadVideos cũng nên useCallback

    useEffect(() => {
      if (isFirstLoad || page > 1) {
        handleLoadMore();
        setIsFirstLoad(false);
      }
    }, [page, handleLoadMore, isFirstLoad]);

    useEffect(() => {
      for (let i = 0; i < videos.length; i++) {
        console.log('video = ', i, videos[i].name);
      }
      console.log('video count = ', videos.length);
    }, [videos]);

    // const handleLoadMore = async () => {
    //   try {
    //     console.log('handle load more called 1');
    //     await loadVideos();
    //   } catch (e) {}
    // };

    // Hàm chèn module mỗi 5 item
    const injectModules = (videoList: Item[]) => {
      const modules = [
        <ShortsList key="shorts" />,
        <LiveStreamList key="live" />,
      ];
      let moduleIndex = 0;
      const result = [];

      for (let i = 0; i < videoList.length; i++) {
        let videoItem: VideoItem = {type: 'video', data: videoList[i]};
        result.push(videoItem);

        if ((i + 1) % 5 === 0 && moduleIndex < modules.length) {
          let moduleItem: ModuleItem = {
            type: 'module',
            data: modules[moduleIndex],
          };
          result.push(moduleItem);
          moduleIndex++;
        }
      }

      return result;
    };

    const finalList = injectModules(videos) as ListItem[];

    const onEndReached = () => {
      // console.log('onEndReached called 1');
      if (!loading) {
        // console.log('onEndReached called 2');
        setPage(prev => prev + 1);
      }
    };

    const onRefresh = useCallback(() => {
      setRefreshing(true);
      setPage(1);
      setVideos([]);
      handleLoadMore();
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, [handleLoadMore]);

    return (
      <View className="flex-1 bg-[#141414]">
        <View className="bg-[#141414] h-4 w-full" />
        <FlatList
          data={finalList}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => {
            if (item.type === 'video') {
              // item.data is of type Item, and VideoCard expects a prop 'item' of type Item
              return <VideoCard item={item.data} />;
            } else {
              // item.data is a React element (<ShortsList /> or <LiveStreamList />)
              return item.data as React.ReactElement;
            }
          }}
          showsVerticalScrollIndicator={false}
          onEndReached={onEndReached}
          initialNumToRender={10}
          windowSize={3}
          onEndReachedThreshold={0.5}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              // tintColor={Colors.orange}
              // colors={[Colors.white, Colors.orange]}
            />
          }
          ListFooterComponent={
            loading ? (
              <ActivityIndicator size="large" style={{margin: 20}} />
            ) : null
          }
        />
      </View>
    );
  }
);

const url_shorts =
  'https://m.media-amazon.com/images/I/91-UCbbhoiL._AC_SL1500_.jpg';
const source = 'https://www.w3schools.com/html/mov_bbb.mp4';

const dummyData: ShortModel[] = [
  {
    thumb_url: url_shorts,
    source: source,
    name: 'Chuẩn không cần chỉnh',
  },
  {thumb_url: url_shorts, source: source, name: 'Topgun trở lại'},
  {thumb_url: url_shorts, source: source, name: 'Trào lưu mới'},
  {thumb_url: url_shorts, source: source, name: 'Topgun trở lại'},
  {thumb_url: url_shorts, source: source, name: 'Trào lưu mới'},
];

export const ShortsList = () => {
  return (
    <View className="bg-black">
      <View className="flex-row justify-between px-[12] mb-3 bg-transparent">
        <Text className="text-white text-xl font-bold">Video ngắn</Text>
        <Text
          className="text-sm"
          style={{color: '#D21F3C'}}
          onPress={() => {
            // Handle "Xem thêm" press
            console.log('Xem thêm pressed');
          }}>
          Xem thêm
        </Text>
      </View>
      <FlatList
        horizontal
        data={dummyData}
        renderItem={({item}) => <ShortCard item={item} />}
        keyExtractor={(_, i) => 'short-' + i}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 12, paddingBottom: 12}}
      />
    </View>
  );
};

const dummyDataLiveStream: LiveStreamModel[] = [
  {
    thumb_url: url_shorts,
    name: 'LIVE RUNETERRA | DUO CÙNG VỚI GM AME - KHÔNG LÊN MA...',
  },
  {
    thumb_url: url_shorts,
    name: 'LIVE RUNETERRA | DUO CÙNG VỚI GM AME - KHÔNG LÊN MA...',
  },
];

export const LiveStreamList = () => {
  return (
    <View className="bg-black">
      <Text className="text-white text-xl font-bold px-[12] mt-4 mb-3">
        Hot livestream
      </Text>
      <FlatList
        horizontal
        data={dummyDataLiveStream}
        renderItem={({item}) => <LiveStreamCard item={item} />}
        keyExtractor={(_, i) => 'live-' + i}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 12, paddingBottom: 12}}
      />
    </View>
  );
};

export default React.memo(SuggestScreen);
