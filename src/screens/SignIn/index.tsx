import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { Background } from '../../components/Background';

import { styles } from './styles';

import { NavigationStackProp } from 'react-navigation-stack';

import { loginUser } from '../../context/auth';

type Props = {
  navigation: NavigationStackProp<{ userId: string }>;
};

export function SignIn(props: Props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Background>
      <KeyboardAvoidingView>
        <SafeAreaView style={styles.container}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />

          <View style={styles.card}>
            <Text style={styles.text}>Digite seu E-mail</Text>
            <TextInput
              placeholder='E-mail'
              onChangeText={email => setEmail(email)} value={email}
              style={styles.input}
            />

            <Text style={styles.text}>Digite sua senha</Text>
            <TextInput
              placeholder='Senha'
              onChangeText={password => setPassword(password)}
              value={password}
              style={styles.input}
              secureTextEntry
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => loginUser(email, password)}
            >
              <Text style={styles.textButton}>Acessar</Text>
            </TouchableOpacity>
             <View>
            <TouchableOpacity
              style={styles.buttonRegister}
              onPress={() => props.navigation.navigate('SignUp')}>
              <Text style={styles.textButton}>Criar conta</Text>
            </TouchableOpacity>


            <View style={styles.linha}></View>
            <TouchableOpacity onPress={()=>props.navigation.navigate('SignUp')}>
              <Text style={styles.textSignIn}>Deseja recuperar sua senha? <Text style={styles.textSignUp} onPress={() => props.navigation.navigate('ForgetPassword')}>Clique aqui</Text></Text>
            </TouchableOpacity>
          </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Background>
  );
}
