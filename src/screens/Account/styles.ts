import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  picture: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#FFF",
    marginTop: Platform.OS === "ios" ? "8%" : "15%",
    marginLeft: "5%",
  },

  loading: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#FFF",
    marginTop: Platform.OS === "ios" ? "8%" : "15%",
    marginLeft: "5%",
  },

  backgroundProfile: {
    color: "#fff",
    backgroundColor: "#fff",
    height: 100,
    width: 100,
    borderRadius: 100,
    overflow: "hidden",
    position: "absolute",
    top: Platform.OS === "ios" ? "23%" : "35%",
    left: "5%",
  },
  
  profiles: {
    width: 110,
    height: 110,
    position: "relative",
    right: "4%",
  },

  addPic: {
    width: 40,
    height: 40,
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 2,
    marginLeft: 90,
    marginTop: -30,
    borderColor: "#FFF",
    backgroundColor: "#6FBBF8",
  },

  picCamera: {
    marginLeft: 8,
    marginTop: 8,
    height: 20,
    width: 20,
  },

  nameUser: {
    position: "absolute",
    top: "50%",
    left: "40%",
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
  },
  
  card: {
    marginTop: "2%",
    width: "100%",
    height: "100%",
    borderRadius: 30,
    backgroundColor: "#F1EBed",
    padding: 10,
  },

  sectionOne: {
    margin: "5%",
  },

  textInfo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginTop: 28,
    marginBottom: 10,
  },

  sectionTwo: {
    width: "100%",
    marginTop: 10,
    padding: 16,
  },

  textButton: {
    color: "#FFFFFF",
    fontWeight: "bold",
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
    padding: 35,
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
  button: {
    borderRadius: 9,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
  buttonOpen: {
    backgroundColor: "#246",
    height: 50,
    marginTop: 31,
    borderRadius: 15,

    alignItems: "center",
    justifyContent: "center",
  },
  buttonAction: {
    height: 50,
    marginTop: 31,
    backgroundColor: "#246",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonDelete: {
    height: 50,
    marginTop: 5,
    backgroundColor: "#ff0f50",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  updatebutton: {
    backgroundColor: "#267D39",
    marginTop: 32,
    borderRadius: 9,
    padding: 15,
    marginRight: 10
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },

  modalWeight: {
    marginTop: 8,
    padding: 10,
  },

  modalInput: {
    width: 300,
    height: 35,
    padding: 9,
    borderRadius: 15,
    borderColor: "#CDCDCD",
    backgroundColor: "#f1ebed",
    fontWeight: "bold",
  },

  modalDropdown: {
    width: 300,
    height: 35,
    borderRadius: 15,
    borderColor: "#CDCDCD",
    padding: 9,
    backgroundColor: "#f1ebed",
    fontWeight: "bold",
  },

  dropdown : {
    width: "60%",
    height: 110,
    borderRadius: 5,
  },
  
  modalButtom: {
    flexDirection: "row"
  }
});
