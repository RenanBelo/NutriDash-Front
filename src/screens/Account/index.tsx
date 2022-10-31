import React, { useEffect, useReducer, useState } from 'react';
import { Background } from '../../components/Background';
import { View, SafeAreaView, TouchableOpacity, Text,TextInput, Alert, Image,Modal, Pressable} from 'react-native';
import { db, auth, storage } from "../../service/FirebaseConfig";
import { doc, setDoc, collection , getDoc, addDoc, onSnapshot, deleteDoc, } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import  * as ImagePicker from 'expo-image-picker';


import {  deleteMyUser, updateUser } from '../../context/auth';
import { styles } from './styles';
import { stringify } from '@firebase/util';
import { getAuth, onAuthStateChanged, signOut, deleteUser } from 'firebase/auth';
import { NavigationStackProp } from 'react-navigation-stack';
import { Card } from '@rneui/themed';
import { goOffline } from 'firebase/database';




const number = '0';
parseFloat(number);



type Props = {
  navigation: NavigationStackProp<{ userId: string }>;
};

  
export function Account(props: Props) {

  useEffect(() =>{
    const func = async () =>{
      const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
      const reference = ref(storage, `newfolder/ ` + uid)
      await getDownloadURL(reference).then ((x) => {
        setUrl(x)
      })}
    })
  } 
  func ();
}, [])

  const [weight, setWeight] = React.useState()
  const [height, setHeight] = React.useState()
  const [newHeight, setNewHeight] = React.useState("")
  const [newWeight, setNewWeight] = React.useState("")
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [upload, setUpload] = useState();
  

  

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
          height : user.altura,
          weight : user.peso
        }

      
        setHeight(data.height);
        setWeight(data.weight);
      }

    } else {
      console.log('Algo deu errado, por favor faça o login novamente!');
    }
  });

  const logOut = () => {

  if (auth){
signOut(auth).then(() => {
  
  Alert.alert( 'Você deslogou!')
  props.navigation.navigate('SignIn')
  goOffline
    }).catch((error) => {
  Alert.alert('An error happened')
}

)

}
  };
 
const deleteAccount = () =>{

    deleteMyUser();
    props.navigation.navigate('SignIn')

  }    
  const pickImage = async () => {
   
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

   //  console.log(result);
 const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
    if (!result.cancelled) {
      setImage(result.uri)

      const uploadUri = url;     
      
    const reference = ref(storage, `newfolder/ ` + uid)
        const img = await fetch (result.uri);
        const bytes = await img.blob();

        await uploadBytes (reference, bytes)

        console.log("download bem sucedido")
      
        await getDownloadURL(reference).then ((x) => {
          isLoading: true;
          setUrl(x)
      })
    }
  }
})
  }
  


  const updateAccount = async (newHeight: string, newWeight:string) => {
    const update = await updateUser(newHeight, newWeight)

    if(newHeight == "" && newWeight == "" ){

      Alert.alert("Os dois campos estão vazios!")
      
    }

    else {

      setModalVisible(!modalVisible)
      return update
      
          
    }


  }
  
  const [modalVisible, setModalVisible] = useState(false);

  const [imageVisible, setImageVisible] = useState(false)

  return (
    <Background>
     <SafeAreaView style={styles.container}>
      <View style= {styles.backgr}>

     
      <View style = {styles.sectionOne}> 
    
          <Image source={{uri: url}} style={styles.picture} />
     
     <View style = {styles.addPic}>
      
      <TouchableOpacity  onPress={pickImage}>
                          <Image source={require('../../assets/camera.png')}   style={styles.picCamera} />
        </TouchableOpacity>
        </View>
      

      <Text style={styles.textInfo}>Altura: {height} </Text>       
      <Text style={styles.textInfo}>Peso: {weight} </Text>       
        </View>
      <View style={styles.sectionTwo}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
         
          <Text style={styles.modalText}>Altura</Text>
          <TextInput  placeholder=""   keyboardType='numeric'
          onChangeText={newHeight => setNewHeight(newHeight)} value={newHeight} style={styles.modalInput}  />
            <Text style={styles.modalWeight}>Peso</Text>
            <TextInput placeholder=""   keyboardType='numeric'
            onChangeText={newWeight => setNewWeight(newWeight)} value={newWeight} style={styles.modalInput}  />
          
            <Pressable style={[styles.updatebutton]}  onPress={() => [updateAccount( newHeight, newWeight)]}>
            <Text style={styles.textStyle}>Atualizar</Text>
              
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancelar</Text>

            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Editar Dados</Text>
      </Pressable>
    
            <TouchableOpacity   style={styles.buttondelete}  onPress={() => deleteAccount()}>
          <Text style={styles.textButton}>Excluir Conta</Text>
        </TouchableOpacity>
        </View>
       
    
        <View style = {styles.sectionThree}>
        <TouchableOpacity style={styles.buttonlogout} onPress={logOut}>
        <Text style ={styles.textLogout}  >Sair</Text>
        </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>

    </Background>
  );

}

