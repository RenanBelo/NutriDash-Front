import React, { useEffect } from 'react';
import { View, ImageBackground, SafeAreaView } from 'react-native';
import { Background } from '../../components/Background';
import { MiniCard } from '../../components/MiniCard/Index';

import { styles } from './styles';

export function Dashboard() {

  useEffect(() =>{
    const func = async () =>{
     
      

      }
  
  
  func ();
}, [])

  return (
    <Background>
      <ImageBackground
        source={require('../../assets/blob.png')}
        defaultSource={require('../../assets/blob.png')}
        style={styles.blob}
      />
      <SafeAreaView style={styles.adroidSafeArea} >
        <View style={styles.container} >
          <MiniCard title={'Calorias'} content={'Você consumiu 100cal de 2000cal'} />
          <MiniCard title={'Carboidratos'} content={'Você consumiu 100g de 2000g'} />
          <MiniCard title={'Gordura'} content={'Você consumiu 100g de 2000g'} />
          <MiniCard title={'Proteina'} content={'Você consumiu 100g de 2000g'} />
          <MiniCard title={'Água'} content={'Você consumiu 100ml de 2000ml'} />
        </View>
      </SafeAreaView>
    </Background>
  );
}