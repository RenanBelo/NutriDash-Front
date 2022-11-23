import React from 'react';
import { View, Text } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

import { styles } from './styles';

interface Props {
  content: string;
}

export function CardVideo({ content }: Props) {
  return (
    <View style={styles.card}>
      <YoutubePlayer
        height={200}
        width={350}
        play={false}
        videoId={content}
      />
    </View>
  );
}