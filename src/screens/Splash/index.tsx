import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import { LogBox } from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();
type Props = {
  navigation: NavigationStackProp<{ userId: string }>;
};

export function Splash(props: Props) {
  return (
    <Background>
      <View style={styles.header}>
        <LottieView
          source={require("../../assets/splash.json")}
          autoPlay
          loop={false}
          onAnimationFinish={() => props.navigation.navigate("SignIn")}
        />
      </View>
    </Background>
  );
}
