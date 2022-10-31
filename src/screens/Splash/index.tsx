import React from "react";

import {Text, View} from "react-native";

import LottieView from 'lottie-react-native';

import { NavigationStackProp } from 'react-navigation-stack';

type Props = {
    navigation: NavigationStackProp<{ userId: string }>;
  };

import { Background } from '../../components/Background';
import { styles } from "./styles";

export function Splash( props: Props){
    return(
    <Background>
    <View style={styles.header}>
    <LottieView
     source={require('../../assets/splash.json')} 
     autoPlay 
     loop={false}
     onAnimationFinish={() => props.navigation.navigate('SignIn')}
     />
    </View>
    </Background>
    );
}
