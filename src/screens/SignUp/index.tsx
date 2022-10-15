import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import { Background } from '../../components/Background';

import { styles } from './styles';
import { Icon } from "@rneui/themed";
import { createUser } from '../../context/auth';

type Props = {
  navigation: NavigationStackProp<{ userId: string }>;
};

export function SignUp(props: Props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [height, setHeight] = React.useState("");

  return (
    <Background>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon
              name='arrow-back'
              color='#FFF'
              onPress={() => props.navigation.navigate('SignIn')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Cadastro</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.text}>Digite seu nome</Text>
          <TextInput
            placeholder='Nome'
            onChangeText={name => setName(name)} value={name}
            style={styles.input}
          />

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

          <Text style={styles.text}>Confirme sua senha</Text>
          <TextInput
            placeholder='Confirme a senha'
            value={confirmPassword}
            onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
            style={styles.input}
            secureTextEntry
          />

          <View style={styles.customInput}>
            <Text style={styles.text}>Digite sua altura (cm)</Text>
            <Text style={styles.textWeight}>Digite sua peso</Text>
          </View>

          <View style={styles.customInput}>
            <TextInput
              placeholder='Altura'
              keyboardType='numeric'
              onChangeText={height => setHeight(height)}
              style={styles.inputSmallHeight}
              maxLength={3}
            />
            <TextInput
              placeholder='Peso'
              keyboardType='numeric'
              onChangeText={weight => setWeight(weight)}
              style={styles.inputSmallWeight}
              maxLength={3}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => createUser(name, email, password, weight, height)} 
          >
            <Text style={styles.textButton}>Finalizar cadastro</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Background>
  );
}
