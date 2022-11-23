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
    height: 800,
    borderRadius: 5,
  },
  
  input:{
  width: "100%",
  height: 55,
  marginTop: 20,
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

  flatList: {
    flex: 1,
    marginTop: 5,
  },
  
  textFlatList: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
    marginTop: 4,
    textAlign: "center",
  },

  containerView: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 4,
    backgroundColor: "#eee",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#eee",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 120,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },

  updatebutton:{

    backgroundColor: "#267D39",
    marginTop: 32,
    borderRadius: 9,
    padding: 15,
    marginRight: 10

  },

  textStyle:{

    color: "white",
    fontWeight: "bold",
    textAlign: "center",

  
  },

  buttonAction:{

    height: 50,
    width: 300,
    backgroundColor: "#246",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",

  },

  
  buttonBack:{

    height: 50,
    width: 300,
    backgroundColor: "#00c176",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",

  },

  buttonDelete:{
    height: 50,
    marginTop: 5,
    backgroundColor: "#267D39",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",

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