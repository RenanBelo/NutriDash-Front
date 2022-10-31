import { Alert } from "react-native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, getAuth, signOut, deleteUser, onAuthStateChanged} from "firebase/auth";
import { db, auth } from "../service/FirebaseConfig";
import { doc, setDoc, collection , getDoc, deleteDoc, updateDoc} from "firebase/firestore";
import {getDatabase, ref, set } from "firebase/database";

const number = '0';
parseFloat(number);

const loginUser = async (email: string, password: string) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return true
      })
      .catch(() => {
        Alert.alert('Falha ao logar, verifique suas credenciais e tente novamente!')
        return false
      })

      return response
  } catch {
    Alert.alert('Falha ao logar, por favor, verifique seus dados e tente novamente!')
    return false
  }
}

const validateLoginUser = async (email: string, password: string) => {
  if (email && password) {
    return await loginUser(email, password)
  } else {
    Alert.alert("Erro, por favor, preencha todos os campos e tente novamente!")
    return false
  }
}

const insertUser = async (name: string, email: string, password: string, weight: string, height: string) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password)
      .then(async data => {
        await setDoc(doc(db, "Usuarios", data.user.uid), {
          nome: name,
          email: email,
          peso: weight,
          altura: height
        })
        Alert.alert("Usuario criado com sucesso!")
      })

      .catch((error)=> {
        if (error.code == "auth/email-already-in-use"){
        Alert.alert('Email já existe, digite um e-mail válido')
        return false
        }
        else if(error.code == "auth/invalid-email"){
          Alert.alert('O e-mail digitado não corresponde aos padrões')
        return false
        }
        });

      } catch {
        Alert.alert('Erro, por favor tente novamente mais tarde')
        return false
      }
    }


const validateUserInsertion = async (name: string, email: string, password: string, confirmPassword: string, weight: string, height: string) => {
  Number(height)
  if (name && email && password && confirmPassword && weight && height) {
    if (password !== confirmPassword) {
      Alert.alert("Por favor, verifique o campo senha e tente novamente!")
      return false
    }
   else if ( height <= number || weight <= number ){
      Alert.alert ("O Valor digitado deve ser maior que 0")
      return false

    }
    else if (password.length < 6){
            Alert.alert ("A senha deve ter no minimo 6 digitos")
    }
    
    else {
      return await insertUser(name, email, password, weight, height)
    }
    
  } else {
    Alert.alert("Erro, por favor, preencha todos os campos e tente novamente!")
    return false
  }
}

const forgetPassword = ( email: string) => {
  if (email) {
    try {
      sendPasswordResetEmail(auth, email).
     then(() =>  Alert.alert( 'Redefinir senha', "E-mail enviado com sucesso"))
    }
   catch {
      Alert.alert('Falha ao cadastrar usuário, por favor, verifique seus dados e tente novamente!')
    }
  } else {
    Alert.alert("Erro, por favor, preencha todos os campos e tente novamente!")
  }
}

const updateUser = async ( height: string, weight: string) => {

    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if ( height && weight){
      if (user) {
          const uid = user.uid;
          await updateDoc(doc(db, "Usuarios", uid), {
            altura: height,
            peso: weight
            
          })
        }
        
              }   
           else if(height) {
            onAuthStateChanged(auth, async (user) => {
             {
              if (user) {
                  const uid = user.uid;
                  await updateDoc(doc(db, "Usuarios", uid), {
                    altura: height
                   
                  })
        
       
                }
              }})}


      else if(weight) {

          onAuthStateChanged(auth, async (user) => {
          if (user) {
            const uid = user.uid;
             await updateDoc(doc(db, "Usuarios", uid), {
              peso: weight

      })
      
    }else {
        Alert.alert("Erro, por favor, preencha todos os campos e tente novamente!")
        return false
    }

    })
    
  }

    })
  }



const deleteMyUser = async () => {
   
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      deleteUser(user).then(async () => {
        const uid = user.uid;
        const docRef = doc(db, "Usuarios", uid)
        console.log(uid)
        console.log(docRef)
        
        
         await deleteDoc(docRef);

          Alert.alert("Conta excluida")
           
      }).catch((error) => {
            });


    }
  }
  )
}


  
export { validateUserInsertion, validateLoginUser, forgetPassword,insertUser, loginUser, deleteMyUser, updateUser }