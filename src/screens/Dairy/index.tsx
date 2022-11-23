import React, { useEffect } from "react";
import { Background } from "../../components/Background";

import { taco } from "../../helpers/tabelaTaco";

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
  FlatList,
} from "react-native";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Picker } from "@react-native-picker/picker";
import { db } from "../../firebase/FirebaseConfig";

// Ignore log notification by message:
LogBox.ignoreLogs(["Warning: ..."]);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

export function Dairy() {
  useEffect(() => {
    const func = async () => {};

    func();
  }, []);

  const [food, setFood] = React.useState("");
  const [newFood, setNewFood] = React.useState("");
  const [proteinG, setProteinG] = React.useState("");
  const [lipidG, setLipidG] = React.useState("");
  const [carbohydrateG, setcarbohydrateG] = React.useState("");
  const [userItem, setUserItem] = React.useState("");
  const [newUserItem, setNewUserItem] = React.useState("");
  const [items, setItems] = React.useState("");

  // food, proteinG, lipidG, carbohydrateG, userItem]

  const [newModalVisible, setNewModalVisible] = React.useState(false);
  const [myModalVisible, setMyModalVisible] = React.useState(false);

  const [modalVisible, setModalVisible] = React.useState(false);

  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      const docRef = doc(db, "Alimentos", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const user = docSnap.data();
        const data = {
          // items:user.items,
          newcarbohydrateG: user.carbohydrateG,
          // lipidG: user.lipidG,
          // proteinG: user.proteingG,
          newUserItem: user.userItem,
          newFood: user.food,
        };

        // setItems(data.items)

        //  setNewcarbohydrateG(data.carboidrato)
        // setNewLipidG(data.lipidG)
        // setNewProteinG(data.proteinG);
        setNewUserItem(data.newUserItem);
        setNewFood(data.newFood);
      }
    }
  });

  function DateString() {
    let data = new Date(),
      dia = data.getDate().toString().padStart(2, "0"),
      mes = (data.getMonth() + 1).toString().padStart(2, "0"),
      ano = data.getFullYear();
    return `${ano}-${mes}-${dia}`;
  }
  const dateFormated = DateString();
  const addItemFood = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (food !== "") {
        if (user) {
          const uid = user.uid;
          setDoc(
            doc(db, "Alimentos", uid),
            {
              items: arrayUnion({ comida: food, data: dateFormated }),
            },
            { merge: true }
          );
        }
        Alert.alert("Item adicionado");
      } else {
        Alert.alert("Erro, tente novamente");
      }
    });
  };

  // const addUserItem = async () => {
  //   onAuthStateChanged(auth, async (user) => {
  //     if (
  //       userItem !== "" &&
  //       lipidG !== "" &&
  //       carbohydrateG !== "" &&
  //       proteinG !== ""
  //     ) {
  //       if (user) {
  //         const uid = user.uid;
  //         setDoc(
  //           doc(db, "Alimentos", uid),
  //           {
  //             items: arrayUnion({ userItem, lipidG, carbohydrateG, proteinG }),
  //           },
  //           { merge: true }
  //         );
  //       }

  //       Alert.alert("item adicionado");
  //     } else if (
  //       userItem === "" ||
  //       lipidG === "" ||
  //       carbohydrateG === "" ||
  //       proteinG === ""
  //     ) {
  //       Alert.alert("Campo vazio, digite um item");
  //     } else {
  //       Alert.alert("Erro, tente novamente");
  //     }
  //   });
  // };

  const displayItems = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;

        const docRef = doc(db, "Alimentos", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          const newUser = docSnap.data();
          console.log(docSnap);

          const data = {
            items: newUser.items,
          };

          setItems(data.items);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }
    });
  };

  const listFoods = () => {
    let arrayList = [];
    for (let i = 0; i < items.length; i++) {
      let array = items[i].comida;
      let count = array - 1;
      const table = taco[count];
      arrayList.push(table.description);
    }

    return arrayList;
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <View>
            <Picker
              selectedValue={food}
              onValueChange={(itemValue) => setFood(itemValue)}
            >
              {taco.map((cr) => {
                return (
                  <Picker.Item
                    label={cr.description.toString()}
                    value={cr.id}
                  />
                );
              })}
            </Picker>
          </View>

          <TouchableOpacity onPress={() => addItemFood()} style={styles.button}>
            <Text style={styles.textButton}>Adicione um item</Text>
          </TouchableOpacity>

          {/* <Modal
            animationType="slide"
            transparent={true}
            visible={myModalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!myModalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TextInput
                  placeholder="digite seu item"
                  style={styles.input}
                  placeholderTextColor="#999"
                  autoCorrect={true}
                  maxLength={25}
                  onChangeText={(text) => setUserItem(text)}
                ></TextInput>
                <TextInput
                  placeholder="digite  o nivel de proteína do item"
                  style={styles.input}
                  placeholderTextColor="#999"
                  autoCorrect={true}
                  maxLength={25}
                  keyboardType="numeric"
                  onChangeText={(text) => setProteinG(text)}
                ></TextInput>
                <TextInput
                  placeholder="digite nível de lipidios do item"
                  style={styles.input}
                  placeholderTextColor="#999"
                  autoCorrect={true}
                  keyboardType="numeric"
                  maxLength={25}
                  onChangeText={(text) => setLipidG(text)}
                ></TextInput>
                <TextInput
                  placeholder="digite o nivel de carboidratos "
                  style={styles.input}
                  placeholderTextColor="#999"
                  keyboardType="numeric"
                  autoCorrect={true}
                  maxLength={25}
                  onChangeText={(text) => setcarbohydrateG(text)}
                ></TextInput>
                <Pressable
                  style={[styles.button, styles.buttonAction]}
                  onPress={() => addUserItem()}
                >
                  <Text style={styles.textStyle}>Adicione um item</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonAction]}
                  onPress={() => [setMyModalVisible(!myModalVisible)]}
                >
                  <Text style={styles.textStyle}>Volta</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.buttonDelete, styles.buttonDelete]}
            onPress={() => setMyModalVisible(true)}
          >
            <Text style={styles.textStyle}>Adicione seu item</Text>
          </Pressable> */}

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
                <FlatList
                  data={listFoods()}
                  keyExtractor={(item) => item.toString()}
                  showsVerticalScrollIndicator={false}
                  style={styles.flatList}
                  renderItem={({ item }) => (
                    <View style={styles.containerView}>
                      <Text>{item}</Text>
                    </View>
                  )}
                />
                <Pressable
                  style={[styles.button, styles.buttonAction]}
                  onPress={() => [setNewModalVisible(!newModalVisible)]}
                >
                  <Text style={styles.textStyle}>Voltar</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <Pressable
            style={[styles.buttonDelete, styles.buttonDelete]}
            onPress={() => [setNewModalVisible(true), displayItems()]}
          >
            <Text style={styles.textStyle}>Verificar Histórico</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Background>
  );
}