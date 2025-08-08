import Colors from '@src/configs/Colors';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const MAX_ITEMS = 5;
const MAX_LINES = 1; // bạn thay đổi thành 1,2...
const SCREEN_WIDTH = Dimensions.get('window').width;

type ViewTopicProps = {
  topics: string[]; //Mang cac chuoi topic
};

export default function TopicTags({topics}: ViewTopicProps) {
  const initial = topics.slice(0, MAX_ITEMS);
  const [displayed, setDisplayed] = useState(initial);

  // lưu thông tin layout của từng item: { index: { y, height, width } }
  const layoutsRef = useRef({});

  // để tránh vòng lặp vô hạn, nhớ chỉ cập nhật khi thực sự rút gọn
  const lastLengthRef = useRef(displayed.length);

  useEffect(() => {
    // reset đo khi danh sách thay đổi (ví dụ khi props topics thay đổi)
    layoutsRef.current = {};
    lastLengthRef.current = displayed.length;
  }, [displayed]);

  // gọi khi mỗi item có layout
  const onItemLayout = index => e => {
    const {y, height, width} = e.nativeEvent.layout;
    layoutsRef.current[index] = { y, height, width, index };

    // nếu đã đo đủ tất cả items hiện tại -> xử lý
    if (Object.keys(layoutsRef.current).length === displayed.length) {
      // lấy mảng y và làm tròn để tránh số float hơi khác
      const ys = Object.values(layoutsRef.current).map(l => Math.round(l.y));
      // lấy các y duy nhất theo thứ tự tăng dần
      const uniqueYs = [...new Set(ys)].sort((a, b) => a - b);

      if (uniqueYs.length <= MAX_LINES) {
        // ok, không cần cắt nữa
        return;
      }

      // chọn các y được chấp nhận (2 dòng đầu, hoặc MAX_LINES dòng)
      const allowedYs = uniqueYs.slice(0, MAX_LINES);

      // tìm index lớn nhất nằm trong allowedYs
      const allowedIndices = Object.values(layoutsRef.current)
        .filter(l => allowedYs.includes(Math.round(l.y)))
        .map(l => l.index);

      const maxAllowedIndex = Math.max(...allowedIndices);

      // nếu cần rút gọn (khi số item hiện > maxAllowedIndex+1)
      const newLen = maxAllowedIndex + 1;
      if (newLen < displayed.length) {
        const newDisplayed = displayed.slice(0, newLen);
        // cập nhật state (sẽ re-render và re-measure)
        setDisplayed(newDisplayed);
      }
      // reset layouts để chờ lần đo mới (an toàn cho lần re-render)
      layoutsRef.current = {};
    }
  };

  return (
    <View style={styles.wrapper}>
      {displayed.map((t, i) => (
        <View key={i} onLayout={onItemLayout(i)} style={styles.tag}>
          <Text style={styles.tagText} numberOfLines={2}>
            {t}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: SCREEN_WIDTH,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 2,
    backgroundColor: Colors.black1414,
    borderRadius: 35,
  },
  tagText: {
    color: Colors.grey8A8B,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 'bold',
  },
});
