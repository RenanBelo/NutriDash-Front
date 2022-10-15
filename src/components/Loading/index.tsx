import { SafeAreaView, Image, ActivityIndicator, Modal } from 'react-native';
import { Background } from '../Background';

import { styles } from './styles';

type Props = { 
  visible: boolean
}

export function Loading(props : Props) {
  return (
    <Modal visible={props.visible}>
      <Background>
        <SafeAreaView style={styles.container}>
          <Image source={require('../../assets/logo.png')} />
          <ActivityIndicator size="large" color="#FFA500" style={styles.loading} />
        </SafeAreaView>
      </Background>
    </Modal>
  );
}