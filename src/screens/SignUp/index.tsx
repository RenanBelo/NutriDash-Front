import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

import { Background } from "../../components/Background";

import { styles } from "./styles";
import { Icon } from "@rneui/themed";
import { validateUserInsertion } from "../../context/auth";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";
import { MaskedTextInput } from "react-native-mask-text";
import ModalDropdown from "react-native-modal-dropdown";
import { LogBox } from "react-native";

// Ignore log notification by message:
LogBox.ignoreLogs(["Warning: ..."]);

// Ignore all log notifications:
LogBox.ignoreAllLogs();
type Props = {
  navigation: NavigationStackProp<{ userId: string }>;
};

const radioButtonsData: RadioButtonProps[] = [
  {
    id: "1", // acts as primary key, should be unique and non-empty string
    label: "Feminino",
    value: "Feminino",
  },
  {
    id: "2",
    label: "Masculino",
    value: "Masculino",
  },
];

export function SignUp(props: Props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [weight, setWeight] = React.useState(Number);
  const [height, setHeight] = React.useState(Number);
  const [birthDate, setBirthDate] = React.useState("");
  const [typeDiet, setTypeDiet] = React.useState(Number);
  const [physicalActivity, setPhysicalActivity] = React.useState(Number);
  const [genre, setGenre] = React.useState("");

  const createUser = async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    weight: Number,
    height: Number,
    genre: string,
    birthDate: string,
    physicalActivity: Number,
    typeDiet: Number
  ) => {
    const user = await validateUserInsertion(
      name,
      email,
      password,
      confirmPassword,
      Number(weight),
      Number(height),
      genre,
      birthDate,
      Number(physicalActivity),
      Number(typeDiet)
    );

    if (user) {
      props.navigation.navigate("SignIn");
    }
  };
  return (
    <Background>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity>
              <Icon
                name="arrow-back"
                color="#FFF"
                onPress={() => props.navigation.navigate("SignIn")}
                style={styles.arrow}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Cadastro</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>Digite seu nome</Text>
            <TextInput
              placeholder="Nome"
              onChangeText={(name) => setName(name)}
              value={name}
              style={styles.input}
            />

            <Text style={styles.text}>Digite seu E-mail</Text>
            <TextInput
              placeholder="E-mail"
              onChangeText={(email) => setEmail(email)}
              value={email}
              style={styles.input}
            />

            <Text style={styles.text}>Digite sua senha</Text>
            <TextInput
              placeholder="Senha"
              onChangeText={(password) => setPassword(password)}
              value={password}
              style={styles.input}
              secureTextEntry
            />

            <Text style={styles.text}>Confirme sua senha</Text>
            <TextInput
              placeholder="Confirme a senha"
              value={confirmPassword}
              onChangeText={(confirmPassword) =>
                setConfirmPassword(confirmPassword)
              }
              style={styles.input}
              secureTextEntry
            />

            <Text style={styles.text}>Digite sua data de nascimento</Text>
            <MaskedTextInput
              value={birthDate}
              onChangeText={(birthDate) => setBirthDate(birthDate)}
              mask="99/99/9999"
              placeholder="DD/MM/AAAA"
              style={styles.input}
            />

            <View style={styles.customInput}>
              <Text style={styles.text}>Digite sua altura (cm)</Text>
              <Text style={styles.textWeight}>Digite sua peso(Kg)</Text>
            </View>

            <View style={styles.customInput}>
              <TextInput
                placeholder="Altura"
                keyboardType="numeric"
                onChangeText={(height) => setHeight(Number(height))}
                style={styles.inputSmallHeight}
                maxLength={3}
              />
              <TextInput
                placeholder="Peso"
                keyboardType="numeric"
                onChangeText={(weight) => setWeight(Number(weight))}
                style={styles.inputSmallWeight}
                maxLength={3}
              />
            </View>
            <View>
              <Text style={styles.textRadioButton}>Qual o seu sexo?</Text>
              <View>
                <ModalDropdown
                  options={["Feminino", "Masculino","menino","menino",
                ]}
                  dropdownStyle={styles.dropdown}
                  style={styles.input}
                  defaultValue="Selecione o seu sexo"
                  onSelect={(selected) => setGenre(selected)}
                />
              </View>
            </View>
            <View>
              <Text style={styles.text}>
                Selecione qual é o seu nivel de atividade fisica
              </Text>
              <ModalDropdown
                options={[
                  "Leve (caminhadas leves)",
                  "Moderado (Atividades fisicas regulares)",
                  "Ativo (Atividades fisicas intensas)",
                ]}
                dropdownStyle={styles.dropdown}
                style={styles.input}
                defaultValue="Selecione o seu tipo"
                onSelect={(selected) => setPhysicalActivity(Number(selected))}
              />
            </View>
            <View>
              <Text style={styles.text}>Selecione o que você deseja</Text>
              <ModalDropdown
                options={["Perder peso", "Manter peso", "Aumentar peso"]}
                dropdownStyle={styles.dropdown}
                style={styles.input}
                defaultValue="Selecione o seu tipo"
                onSelect={(selected) => setTypeDiet(Number(selected))}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                createUser(
                  name,
                  email,
                  password,
                  confirmPassword,
                  weight,
                  height,
                  genre,
                  birthDate,
                  physicalActivity,
                  typeDiet
                )
              }
            >
              <Text style={styles.textButton}>Finalizar cadastro</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}
