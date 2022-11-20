import React, { useEffect, useReducer, useState } from "react";
import { Background } from "../../components/Background";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  Image,
  Modal,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { db, auth, storage } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";

import { deleteMyUser, updateUser } from "../../context/auth";
import { styles } from "./styles";

import {
  getAuth,
  onAuthStateChanged,
  signOut,
  deleteUser,
} from "firebase/auth";
import { NavigationStackProp } from "react-navigation-stack";
import { CustomTextUser } from "../../components/CustomText";
import ModalDropdown from "react-native-modal-dropdown";
import { LogBox } from "react-native";

// Ignore log notification by message:
LogBox.ignoreLogs(["Warning: ..."]);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

type Props = {
  navigation: NavigationStackProp<{ userId: string }>;
};

export function Account(props: Props) {
  useEffect(() => {
    const func = async () => {
      setLoading(true);
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const uid = user.uid;
          const reference = ref(storage, `Pictures/` + uid);
          await getDownloadURL(reference).then((x) => {
            setLoading(false);
            setUrl(x);
          });
        }
      });
    };
    func();
  }, []);

  const [weight, setWeight] = React.useState("");
  const [physicalActivity, setPhysicalActivity] = React.useState("");
  const [name, setName] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [typeDiet, setTypeDiet] = React.useState("");
  const [newHeight, setNewHeight] = React.useState("");
  const [newWeight, setNewWeight] = React.useState("");
  const [newphysicalActivity, setNewPhysicalActivity] = React.useState("");
  const [newTypeDiet, setNewTypeDiet] = React.useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [upload, setUpload] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [newModalVisible, setNewModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(true);

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
          height: user.altura,
          weight: user.peso,
          physicalActivity: user.atividadeFisica,
          typeDiet: user.tipoDieta,
        };

        const physicalActivityResult = levelPhysicalActivity(
          data.physicalActivity
        );

        const typeDietResult = levelDiet(data.typeDiet);

        setHeight(data.height);
        setWeight(data.weight);
        setName(data.name);
        setPhysicalActivity(physicalActivityResult);
        setTypeDiet(typeDietResult);
      }
    } else {
      console.log("Algo deu errado, por favor faça o login novamente!");
    }
  });

  const logOut = async () => {
    signOut(auth)
      .then(() => {
        Alert.alert("Você deslogou!");
        props.navigation.navigate("SignIn");
      })
      .catch((error) => {
        Alert.alert("An error happened");
      });
  };

  const deleteAccount = () => {
    deleteMyUser();
    props.navigation.navigate("SignIn");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        if (!result.cancelled) {
          setImage(result.uri);
          const reference = ref(storage, `Pictures/` + uid);
          const img = await fetch(result.uri);
          const bytes = await img.blob();

          setLoading(true);
          await uploadBytes(reference, bytes);

          console.log("download bem sucedido");
          await getDownloadURL(reference).then((x) => {
            setUrl(x);
            setLoading(false);
          });
        }
      }
    });
  };

  const updateAccount = async (
    newHeight: string,
    newWeight: string,
    newphysicalActivity: string,
    newTypeDiet: string
  ) => {
    const update = await updateUser(
      newHeight,
      newWeight,
      newphysicalActivity,
      newTypeDiet
    );

    if (newHeight == "" && newWeight == "") {
      Alert.alert("Por favor, verifique os campos e tente novamente!");
    } else {
      setModalVisible(!modalVisible);
      return update;
    }
  };

  const levelPhysicalActivity = (physicalActivity: number) => {
    switch (physicalActivity) {
      case 0:
        return "Sedentário";
        break;
      case 1:
        return "Moderado";
        break;
      case 2:
        return "Ativo";
        break;
      default:
        return "Verifique seus dados";
        break;
    }
  };

  const levelDiet = (typeDiet: number) => {
    switch (typeDiet) {
      case 0:
        return "Perder peso";
        break;
      case 1:
        return "Manter peso";
        break;
      case 2:
        return "Aumentar peso";
        break;
      default:
        return "Verifique seus dados";
        break;
    }
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.backgroundProfile}>
            <Image
              source={require("../../assets/profiles.png")}
              style={styles.profiles}
            />
          </View>

          {isLoading ? (
            <View
              style={styles.loading}>
              <ActivityIndicator 
              style={{marginTop: 30}}
              color="#000" 
              size="large" />
            </View>
          ) : (
            <>
              <Image source={{ uri: url }} style={styles.picture} />
            </>
          )}

          <View style={styles.addPic}>
            <TouchableOpacity onPress={pickImage}>
              <Image
                source={require("../../assets/camera.png")}
                style={styles.picCamera}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.nameUser}>{name}</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.sectionOne}>
            <CustomTextUser title={"Altura(cm)"} content={height} />
            <CustomTextUser title={"Peso(Kg)"} content={weight} />
            <CustomTextUser title={"Tipo da dieta"} content={typeDiet} />
            <CustomTextUser
              title={"Nivel de atividade"}
              content={physicalActivity}
            />
          </View>
          <View style={styles.sectionTwo}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("A modal foi fechada");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Altura</Text>
                  <TextInput
                    placeholder="Digite sua altura"
                    keyboardType="numeric"
                    onChangeText={(newHeight) => setNewHeight(newHeight)}
                    value={newHeight}
                    style={styles.modalInput}
                  />
                  <Text style={styles.modalWeight}>Peso</Text>
                  <TextInput
                    placeholder="Digite seu peso"
                    keyboardType="numeric"
                    onChangeText={(newWeight) => setNewWeight(newWeight)}
                    value={newWeight}
                    style={styles.modalInput}
                  />
                  <Text style={styles.modalText}>
                    Qual é o seu nivel de atividade fisica
                  </Text>
                  <ModalDropdown
                    options={[
                      "Leve (caminhadas leves)",
                      "Moderado (Atividades fisicas regulares)",
                      "Ativo (Atividades fisicas intensas)",
                    ]}
                    dropdownStyle={styles.dropdown}
                    style={styles.modalDropdown}
                    defaultValue="Selecione o seu tipo"
                    onSelect={(selected) => setNewPhysicalActivity(selected)}
                  />
                  <Text style={styles.modalText}>
                    Selecione o que você deseja
                  </Text>
                  <ModalDropdown
                    options={["Perder peso", "Manter peso", "Aumentar peso"]}
                    dropdownStyle={styles.dropdown}
                    style={styles.modalDropdown}
                    defaultValue="Selecione o seu tipo"
                    onSelect={(selected) => setNewTypeDiet(selected)}
                  />
                  <View style={styles.modalButtom}>
                    <Pressable
                      style={[styles.updatebutton]}
                      onPress={() => [
                        updateAccount(
                          newHeight,
                          newWeight,
                          newphysicalActivity,
                          newTypeDiet
                        ),
                      ]}
                    >
                      <Text style={styles.textStyle}>Atualizar</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button, styles.buttonAction]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>Cancelar</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Modal>

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
                  <Text style={styles.modalText}>
                    Tem certeza que deseja excluir sua conta?
                  </Text>

                  <Pressable
                    style={[styles.updatebutton]}
                    onPress={() => [
                      deleteAccount(),
                      props.navigation.navigate("SignIn"),
                    ]}
                  >
                    <Text style={styles.textStyle}>Confirmar</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonAction]}
                    onPress={() => setNewModalVisible(!newModalVisible)}
                  >
                    <Text style={styles.textStyle}>Cancelar</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>

            <Pressable
              style={[styles.buttonDelete, styles.buttonDelete]}
              onPress={() => setNewModalVisible(true)}
            >
              <Text style={styles.textStyle}>Excluir Conta</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.textStyle}>Editar Dados</Text>
            </Pressable>

            <TouchableOpacity
              style={[styles.button, styles.buttonOpen]}
              onPress={logOut}
            >
              <Text style={styles.textStyle}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Background>
  );
}
