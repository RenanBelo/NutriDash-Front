import React from 'react';
import { Background } from '../../components/Background';

import { styles } from './styles';
import { ImageBackground, LogBox, SafeAreaView, TouchableOpacity, View, Text, FlatList, Alert } from 'react-native';
import { MiniCard } from '../../components/MiniCard/Index';
import { TextInput } from 'react-native-paper';


import { db, auth, storage } from "../../firebase/FirebaseConfig";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

import { deleteMyUser, updateUser } from "../../context/auth";

import {
  getAuth,
  onAuthStateChanged,
  signOut,
  deleteUser,
} from "firebase/auth";
import { NavigationStackProp } from "react-navigation-stack";
import { CustomTextUser } from "../../components/CustomText";
import ModalDropdown from "react-native-modal-dropdown";
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();
export function Dairy() {
  const [food, setFood] = React.useState(Number);
  const [newFood, setNewFood] = React.useState(Number);

    
  

      const addCollection = async (food:Number) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        await addDoc(collection(db, "Usuarios", uid, "comida"),
        {
          
          alimento: Number(food)         
          
  
        }
        )

        Alert.alert("Item adicionado")
      
  }
  else {
    Alert.alert(
      "Erro, por favor, preencha todos os campos e tente novamente!"
    );
    return false;
  }
});
}

  // const eu = minhaLista()

const   objeto=[{"atributo":"Panetone", "atributo2":"Chicletes"}]


 //  const me = JSON.parse(objeto) 
  //   var result= ''







//   const addCollection = async () => {
//     onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         const uid = user.uid;
//         await addDoc(collection(db, "Usuarios", uid, "comida"),
//         {
          
//             alimento: newFood
         
          
  
//         }
//         )

//         Alert.alert("Item adicionado")
      
//   }
//   else {
//     Alert.alert(
//       "Erro, por favor, preencha todos os campos e tente novamente!"
//     );
//     return false;
//   }
// });
// }


  return (
      
    <Background>
      <ImageBackground
        source={require('../../assets/blob.png')}
        defaultSource={require('../../assets/blob.png')}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.card} >
      
    {/* <TextInput placeholder='digite algo' style={styles.input} 
            
                placeholderTextColor="#999"
                autoCorrect={true}
                maxLength={25}
                onChangeText={(text) => setNewFood(Number)}
>
    </TextInput> */}

    <View>
    <FlatList
                data={objeto}
                keyExtractor={(item) => item.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View >


                    <ModalDropdown  options={[item.atributo, item.atributo2]} dropdownStyle={styles.dropdown}
                style={styles.input}
                defaultValue="Selecione seu item"
                onSelect={(selected) => setFood(Number(selected))}/>
              
                  
                  </View>
                  
                )}
              />

      
            </View>

    <TouchableOpacity  onPress={() => addCollection(food)} style={styles.button}>
      <Text style={styles.textButton}>Adicione um item</Text>
        
    </TouchableOpacity>


    </View>
        
      </SafeAreaView>
    </Background>
  

      
  );
}