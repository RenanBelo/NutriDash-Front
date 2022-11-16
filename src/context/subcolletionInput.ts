// import React, { useState } from "react";


// import { ImageBackground, LogBox, SafeAreaView, TouchableOpacity, TextInput, View, Text, FlatList } from 'react-native';


// import { db, auth, storage } from "../../firebase/FirebaseConfig";
// import { addDoc, collection, doc, getDoc } from "firebase/firestore";
// import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

// import { deleteMyUser, updateUser } from "../../context/auth";

// import {
//   getAuth,
//   onAuthStateChanged,
//   signOut,
//   deleteUser,
// } from "firebase/auth";
// import { NavigationStackProp } from "react-navigation-stack";
// import { CustomTextUser } from "../../components/CustomText";
// import ModalDropdown from "react-native-modal-dropdown";

// // Ignore log notification by message:
// LogBox.ignoreLogs(['Warning: ...']);

// // Ignore all log notifications:
// LogBox.ignoreAllLogs();

// export  function Dairy() {
//   const [food, setFood] = React.useState([]);
//   const [newFood, setNewFood] = React.useState("");

//   const addFood =  () => {
   
    

//     food.filter((food) => food === newFood);
//     setFood([... food, ]);
//     setNewFood("");
//   }
    

// const addCollection = async () => {
//   onAuthStateChanged(auth, async (user) => {
//     if (user) {
//       const uid = user.uid;
//       await addDoc(collection(db, "Usuarios", uid, "comida"),
//       {
        
//           alimento: newFood
         
        

//       }
//       )
    
// }
//   })
// }





//   let removeFood = (item:any) => {
//     return setFood(food.filter((foods) => foods !== item));
//   }

//   const deleteList = () => {
//     setFood([])
//   }

//   return (
//     <>
//     <Background>
//       <View style={styles.container}>
//          <View style={styles.card}>

//           <FlatList
//             data={food}
//             keyExtractor={(item) => food.toString()}
//             showsVerticalScrollIndicator={false}
//             style={styles.FlatList}
//             renderItem={({ item }) => (
//               <View style={styles.ContainerView}>
//                 <Text style={styles.Texto}>{item}</Text>
//                 <TouchableOpacity onPress={() => removeFood(item)}>
//                   <MaterialIcons
//                     name="delete-forever"
//                     size={25}
//                     color="red"
//                   />
//                 </TouchableOpacity>
//               </View>
//             )}
//           />

//         <View style={styles.Form}>
//           <TextInput
//             style={styles.Input}
//             placeholderTextColor="#999"
//             autoCorrect={true}
//             value={newFood}
//             placeholder="Digite um novo item"
//             maxLength={25}
//             onChangeText={(text) => setNewFood(text)}
//           />
//         </View>
//         <View style={styles.Botoes}>
//           <TouchableOpacity
//             style={styles.BotaoAdicionar}
//             onPress={addCollection}
//           >
//             <Text style={styles.TextoBotao}>Inseir</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.BotaoLimpar}
//             onPress={() => deleteList()}
//           >
//             <Text style={styles.TextoBotao}>Limpar lista</Text>
//           </TouchableOpacity>
//         </View>
//         </View>
//       </View>
//       </Background>
//     </>
//   )
//             }

