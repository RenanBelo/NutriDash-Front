import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

interface Props {
  title: React.ReactNode;
  content: React.ReactNode;
}

export function MiniCard({ title, content }: Props) {
  return (
    <View style={styles.card} >
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}