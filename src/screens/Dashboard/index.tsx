import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { doc, getDoc } from '@firebase/firestore';
import React, { useState } from 'react';
import { Text, View, SafeAreaView, Alert } from 'react-native';
import { Background } from '../../components/Background';
import { SmallCard } from '../../components/SmallCard/Index';
import { calcBasalMetabolicRate, calcCarb, calcFatness, calcProtein } from '../../context/calc';
import { db } from '../../firebase/FirebaseConfig';

import { styles } from './styles';
import { LogBox } from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();
export function Dashboard() {
  const [name, setName] = React.useState("")
  const [weight, setWeight] = React.useState(Number)
  const [height, setHeight] = React.useState(Number)
  const [birthDate, setBirthDate] = React.useState("")
  const [genre, setGenre] = React.useState(Number)
  const [typeDiet, setTypeDiet] = React.useState(Number)
  const [physicalActivity, setPhysicalActivity] = React.useState(Number)

  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      const docRef = doc(db, "Usuarios", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const user = docSnap.data();
        const data = {
          name: user.nome,
          weight : user.peso,
          height : user.altura,
          birthDate : user.dataNascimento,
          genre : user.sexo,
          physicalActivity : user.atividadeFisica,
          typeDiete : user.tipoDieta
        }

        setName(data.name);
        setWeight(data.weight);
        setHeight(data.height);
        setBirthDate(data.birthDate);
        setGenre(data.genre);
        setPhysicalActivity(data.physicalActivity);
        setTypeDiet(data.typeDiete)
      }

    }
  });

  const getCalories = calcBasalMetabolicRate(genre, weight,height, birthDate, physicalActivity) === NaN ? 0 : calcBasalMetabolicRate(genre, weight,height, birthDate, physicalActivity)
  const getFatness = calcFatness(weight) === NaN ? 0 : calcFatness(weight)
  const getProtein = calcProtein(weight, physicalActivity) === null ? 0 : calcProtein(weight, physicalActivity)
  const getCarb = calcCarb(weight, physicalActivity) === null ? 0 : calcCarb(weight, physicalActivity)

  return (
    <Background>
      <SafeAreaView style={styles.adroidSafeArea} >
        <Text style={styles.helloUser}>Bem vindo, {name}!</Text>
        <View style={styles.container} >
          <SmallCard title={'Calorias'} content={`Você consumiu 100cal de ${getCalories?.toFixed(0)} Kcal`} />
          <SmallCard title={'Carboidratos'} content={`Você consumiu 100g de ${getCarb?.toFixed(0)} Kcal`} />
          <SmallCard title={'Gordura'} content={`Você consumiu 100g de ${getFatness.toFixed(0)} Kcal`} />
          <SmallCard title={'Proteina'} content={`Você consumiu 100g de ${getProtein?.toFixed(0)} Kcal`} />
          <SmallCard title={'Água'} content={'Você consumiu 100ml de 2000ml'} />
        </View>
      </SafeAreaView>
    </Background>
  );
}