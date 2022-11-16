import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

import { Icon } from "@rneui/themed";
import { Background } from '../../components/Background';

import { forgetPassword } from '../../context/auth';

import { NavigationStackProp } from 'react-navigation-stack';

import { styles } from './styles';
import { LogBox } from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();
type Props = {
  navigation: NavigationStackProp<{ userId: string }>;
};


export function ForgetPassword(props: Props) {
    const [email, setEmail] = React.useState("");

    return (
        <Background>
          <KeyboardAvoidingView>
            <SafeAreaView style={styles.container}>
            <View style={styles.header}>
          <TouchableOpacity>
            <Icon
              name='arrow-back'
              color='#FFF'
              onPress={() => props.navigation.navigate('SignIn')}
              style={styles.arrow}
            />
          </TouchableOpacity>
      
        </View>

              <Image source={require('../../assets/logo.png')} style={styles.logo} />
    
              <View style={styles.card}>
                <Text style={styles.text}>Digite seu E-mail</Text>
                <TextInput
                  placeholder='E-mail'
                  onChangeText={email => setEmail(email)} value={email}
                  style={styles.input}
                />
 
      <TouchableOpacity onPress={() => forgetPassword(email)}
              style={styles.button}
              ><Text style={styles.textButton}>Recuperar Senha</Text>
            </TouchableOpacity>
                        
            </View>
            </SafeAreaView>
          </KeyboardAvoidingView>
        </Background>
      );
    }
    