import { Alert } from "react-native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  getAuth,
  onAuthStateChanged,
  deleteUser,
} from "firebase/auth";
import { deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase/FirebaseConfig";

const loginUser = async (email: string, password: string) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return true;
      })
      .catch(() => {
        Alert.alert(
          "Falha ao logar, verifique suas credenciais e tente novamente!"
        );
        return false;
      });

    return response;
  } catch {
    Alert.alert(
      "Falha ao logar, por favor, verifique seus dados e tente novamente!"
    );
    return false;
  }
};

const validateLoginUser = async (email: string, password: string) => {
  if (email && password) {
    return await loginUser(email, password);
  } else {
    Alert.alert("Erro, por favor, preencha todos os campos e tente novamente!");
    return false;
  }
};

const insertUser = async (
  name: string,
  email: string,
  password: string,
  weight: number,
  height: number,
  genre: string,
  birthDate: string,
  physicalActivity: number,
  typeDiet : number,
) => {
  try {
    const getGenre = Number(genre)
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (data) => {
        console.log(
          name,
          email,
          weight,
          height,
          genre,
          birthDate,
          physicalActivity,
          typeDiet
        );
        await setDoc(doc(db, "Usuarios", data.user.uid), {
          nome: name,
          email: email,
          peso: weight,
          altura: height,
          sexo: getGenre,
          dataNascimento: birthDate,
          atividadeFisica: physicalActivity,
          tipoDieta : typeDiet
        }).catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            Alert.alert("Email já existe, digite um e-mail válido");
            return false;
          } else if (error.code === "auth/invalid-email") {
            Alert.alert("O e-mail digitado não corresponde aos padrões");
            return false;
          }
        });
      })
      .catch((error) => {
        if (error.code == "auth/email-already-in-use") {
          Alert.alert("Email já existe, digite um e-mail válido");
          return false;
        } else if (error.code == "auth/invalid-email") {
          Alert.alert("O e-mail digitado não corresponde aos padrões");
          return false;
        }
      });

    Alert.alert("Usuario criado com sucesso!");
    return true;
  } catch {
    Alert.alert("Erro, por favor tente novamente mais tarde");
    return false;
  }
};

const validateUserInsertion = async (
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  weight: number,
  height: number,
  genre: string,
  birthDate: string,
  physicalActivity: number,
  typeDiet : number
) => {
  const number = 0;
  if (
    name &&
    email &&
    password &&
    confirmPassword &&
    weight &&
    height &&
    genre &&
    birthDate &&
    String(physicalActivity), 
    String(typeDiet)
  ) {
    if (height <= number || weight <= number) {
      Alert.alert("O Valor digitado deve ser maior que 0");
      return false;
    } else if (password.length < 6) {
      Alert.alert("A senha deve ter no minimo 6 digitos");
    } else {
      const user = await insertUser(
        name,
        email,
        password,
        weight,
        height,
        genre,
        birthDate,
        physicalActivity,
        typeDiet
      );

      console.log(user);

      return user;
    }
  } else {
    Alert.alert("Erro, por favor, preencha todos os campos e tente novamente!");
    return false;
  }
};

const forgetPassword = (email: string) => {
  if (email) {
    try {
      sendPasswordResetEmail(auth, email).then(() =>
        Alert.alert("Redefinir senha", "E-mail enviado com sucesso")
      );
    } catch {
      Alert.alert(
        "Falha ao cadastrar usuário, por favor, verifique seus dados e tente novamente!"
      );
    }
  } else {
    Alert.alert("Erro, por favor, preencha todos os campos e tente novamente!");
  }
};

const updateUser = async (
  height: string,
  weight: string,
  physicalActivity: string,
  typeDiet : string
) => {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (height && weight) {
      if (user) {
        const uid = user.uid;
        await updateDoc(doc(db, "Usuarios", uid), {
          altura: Number(height),
          peso: Number(weight),
          atividadeFisica: Number(physicalActivity),
          tipoDieta: Number(typeDiet)
        });
      }
    } else if (height) {
      onAuthStateChanged(auth, async (user) => {
        {
          if (user) {
            const uid = user.uid;
            await updateDoc(doc(db, "Usuarios", uid), {
              altura: height,
            });
          }
        }
      });
    } else if (weight) {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const uid = user.uid;
          await updateDoc(doc(db, "Usuarios", uid), {
            peso: weight,
          });
        } else {
          Alert.alert(
            "Erro, por favor, preencha todos os campos e tente novamente!"
          );
          return false;
        }
      });
    }
  });
};

const deleteMyUser = async () => {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      deleteUser(user)
        .then(async () => {
          const uid = user.uid;
          const docRef = doc(db, "Usuarios", uid);
          await deleteDoc(docRef);
          Alert.alert("Conta excluida");
        })
        .catch((error) => {});
    }
  });
};

export {
  validateUserInsertion,
  validateLoginUser,
  forgetPassword,
  updateUser,
  deleteMyUser,
};
