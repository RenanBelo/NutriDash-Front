import { SafeAreaView, Image, ActivityIndicator, Modal } from 'react-native';
import { Background } from '../Background';

import { styles } from './styles';

export function Loading() {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={require('../../assets/logo.png')} />
        <ActivityIndicator size="large" color="#FFA500" style={styles.loading} />
      </SafeAreaView>
    </Background>
  );
}