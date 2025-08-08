import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {UIDevice} from '@src/common/devices';
import Colors from '@src/configs/Colors';

const MAX_TOPICS = 5;
const MAX_LINES = 1;
const SCREEN_WIDTH = 323; // Giả định chiều rộng

type ViewTopicProps = {
  topics: string[]; //Mang cac chuoi topic
};

export default function ViewTopics({topics}: ViewTopicProps) {
  const [displayedTopics, setDisplayedTopics] = useState(
    topics.slice(0, MAX_TOPICS)
  );

  return (
    <View
      style={styles.wrapper}
      onLayout={event => {
        const {height} = event.nativeEvent.layout;
        const lineHeight = 22; // Giả định 1 dòng cao khoảng 22
        const maxHeight = lineHeight * MAX_LINES;
        console.log('height', height, 'maxHeight', maxHeight);
        if (height > maxHeight) {
          // Loại bớt topic nếu vượt quá chiều cao cho phép
          for (let i = displayedTopics.length - 1; i >= 0; i--) {
            console.log('i', displayedTopics[i]);
            const newList = topics.slice(0, i);
            setDisplayedTopics(newList);
            break;
          }
        }
      }}>
      {displayedTopics.map((topic, index) => (
        <View key={index} style={styles.topic}>
          <Text style={styles.text}>{topic}</Text>
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
    // backgroundColor: Colors.blue,
  },
  topic: {
    paddingHorizontal: 12,
    paddingVertical: 2,
    backgroundColor: Colors.black1414,
    borderRadius: 35,
  },
  text: {
    color: Colors.grey8A8B,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 'bold',
  },
});
