import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

interface Props {
  title: React.ReactNode;
  content: React.ReactNode;
}

function CustomTextUser({ title, content }: Props) {
  return (
      <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>{`${title}: ${content}`}</Text>
      </View>
    </View>
  );
}

export { CustomTextUser };
