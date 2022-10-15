<h1>**NutriDash**</h1><br/>
Aplicativo para monitoramento da refeição do usuario<br/>

------------------------------------------------------

**Dependencias - https://www.npmjs.com**<br/>

  "@expo-google-fonts/inter"<br/>
  "@expo/metro-config"<br/>
  "@firebase/auth"<br/>
  "@firebase/firestore"<br/>
  "@react-native-community/masked-view"<br/>
  "@react-navigation/native"<br/>
  "@react-navigation/native-stack"<br/>
  "@react-navigation/stack"<br/>
  "@rneui/themed"<br/>
  "firebase": "^9.10.0"<br/>
  "react-native-gesture-handler"<br/>
  "react-native-radio-buttons-group"<br/>
  "react-native-reanimated"<br/>
  "react-native-safe-area-context"<br/>
  "react-native-screens"<br/>
  "react-native-svg"<br/>
  "react-native-web"<br/>
  "react-navigation"<br/>
  "react-navigation-stack"<br/>
     
------------------------------------------------------

Adicionar arquivo FirebaseConfig.js<br/>

import firebase from 'firebase/compat/app';<br/>
import 'firebase/compat/auth';<br/>
import 'firebase/compat/firestore';<br/>

const firebaseConfig = {<br/>
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",<br/>
  authDomain: "XXXXXXXXXX.firebaseapp.com",<br/>
  projectId: "XXXXXXXXXX",<br/>
  storageBucket: "XXXXXXXXX.appspot.com",<br/>
  messagingSenderId: "XXXXXXXXXXXXXXXX",<br/>
  appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX"<br/>
};<br/>
<br/>
let app;<br/>
<br/>
if (firebase.apps.length === 0) {<br/>
  app = firebase.initializeApp(firebaseConfig)<br/>
} else {<br/>
  app = firebase.app();<br/>
}
<br/>
const db = app.firestore();<br/>
const auth = firebase.auth();
<br/>
export { db, auth };<br/>
