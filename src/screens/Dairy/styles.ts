import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
 card: {
    marginTop: "20%",
    width: "100%",
    height: "100%",
    borderRadius: 30,
    backgroundColor: "#F1EBed",
    padding: 10,
  },

  text:{
  
      marginTop: 15,
      marginLeft: 5,


  },

  dropdown : {
    width: "85%",
    height: 90,
    borderRadius: 5,
  },
  
  input:{
  width: "100%",
  height: 55,
  marginTop: 160,
  borderWidth: 1,
  borderRadius: 15,
  borderColor: "#CDCDCD",
  padding: 16,
  backgroundColor: "#EEEEEE",
  fontWeight: "bold"
  },

  textButton: {
    color: "#FFFFFF",
    fontWeight: "bold"
  },

  button: {
    height: 50,
    marginTop: 20,
    backgroundColor: "#4FAAF6",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});
