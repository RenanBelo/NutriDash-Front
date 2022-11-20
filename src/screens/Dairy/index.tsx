import React, { useEffect } from "react";
import { Background } from "../../components/Background";

import { objeto } from "../../helpers/tabelaTaco";

import { styles } from "./styles";
import {
  LogBox,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Alert,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import { addDoc, arrayUnion, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Picker } from "@react-native-picker/picker";
import { db } from "../../firebase/FirebaseConfig";




// Ignore log notification by message:
LogBox.ignoreLogs(["Warning: ..."]);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

export function Dairy() {
 

  const [food, setFood] = React.useState("");
  const [newFood, setNewFood] = React.useState("");
  const [userItem, setUserItem]= React.useState("")
  const [newModalVisible, setNewModalVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);



 

  const auth = getAuth();
  const addItemFood = async () => {
    onAuthStateChanged(auth, async (user) => {
      
      
        if(food !== "" ){
      if (user) {
        const uid = user.uid;
        setDoc(doc(db, "Alimentos", uid), {
          items: arrayUnion({ food })
        }, { merge: true })

      }
    }
  

    else {

          Alert.alert("Campo vazio, adicione um item")
    
              }

  })

 
  }

  const addUserItem = async () => {
    onAuthStateChanged(auth, async (user) => {
      
      
        if(userItem  !== "" ){
      if (user) {
        const uid = user.uid;
        setDoc(doc(db, "Alimentos", uid), {
          items: arrayUnion({ userItem })
        }, { merge: true })

      }
     
    }


    else {

          Alert.alert("Campo vazio, adicione um item")
    
              }

  })

 
  }


  const displayItem =() =>{
    onAuthStateChanged(auth, async (user) => {
      
      
      if(userItem  !== "" ){
    if (user) {
      const uid = user.uid;
      const docRef = doc(db, "Usuarios", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const user = docSnap.data();
        const data = {
          food: user.food,
          userItem: user.userItem,
        
        };

     setFood(data.food)
     setUserItem(data.userItem)
    

    }
  }
    }
  })
}

    
    
  

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <View>
            <Picker
              selectedValue={food}
              onValueChange={(itemValue) => setFood(itemValue)}
              
            >
              {objeto.map((cr) => {
                return <Picker.Item label={cr.toString()} value={cr} />;
              })}
            </Picker>
          </View>

          <TouchableOpacity
          onPress={()=> addItemFood()}
            style={styles.button}
            
          >
            <Text style={styles.textButton}>Adicione um item</Text>
          </TouchableOpacity>

          <TextInput placeholder='digite seu item' style={styles.input} 
            
            placeholderTextColor="#999"
            autoCorrect={true}
            maxLength={25}
            onChangeText={(text) => setUserItem(text)}
>
</TextInput>
<TouchableOpacity
            onPress={() => addUserItem()}
            style={styles.button}
          >
            <Text style={styles.textButton}>Adicione um item</Text>
          </TouchableOpacity>

          



          <Modal
              animationType="slide"
              transparent={true}
              visible={newModalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!newModalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
          
                <Text style={styles.modalText}>{food}</Text>
                  <Pressable
                    style={[styles.button, styles.buttonAction]}
                    onPress={() => [setNewModalVisible(!newModalVisible), displayItem() ]}
                  >
                  

                    <Text style={styles.textStyle}>Voltar</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>

            <Pressable
              style={[styles.buttonDelete, styles.buttonDelete]}
              onPress={() => setNewModalVisible(true)}
            >
              <Text style={styles.textStyle}>Verificar Histórico</Text>
            </Pressable>

          
        </View>
      </SafeAreaView>
    </Background>
  );
}