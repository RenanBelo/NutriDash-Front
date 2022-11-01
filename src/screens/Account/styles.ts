import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { Background } from '../../components/Background';

export const styles = StyleSheet.create({
  container: {
    flex: 1
    
   
  },

  backgr:  {
    height: '85%',
    backgroundColor: '#f1ebed',
    position: 'relative',
    top: 170,
    borderRadius:33

  },
 
  sectionOne: {
  
    marginTop:38,
    marginLeft:39
   
  },

  textInfo:{

    fontSize: 16,
    fontWeight: "bold",
    color: '#000',
    marginTop: 28,
    marginBottom: 10

  },

  sectionTwo:{
    width: '100%',
    marginTop: 29,
    padding: 16,

  },


  buttondelete: {
    height: 50,
    marginTop: 31,
    backgroundColor: "#ff0f50",
    borderRadius: 15,
    
    alignItems: "center",
    justifyContent: "center"
  },

  textButton: {
    color: "#FFFFFF",
    fontWeight: "bold"
  
  },

  sectionThree: {
  
    marginTop: 39,
    alignItems: "center",
    justifyContent: "center"


  },

  picture: {
    width: 180,
    height: 180,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    marginLeft: 83,
    borderColor: "#0e079d",
    marginTop: -118,
    
    
    
  },

  backgroundProfile: {
      color:"#fff",
      backgroundColor:"#fff",
      height:178,
      width: 174,
      borderRadius: 150 / 2,
    overflow: "hidden",
    marginTop:-170,
    position: 'relative',
    top:60,
    left:85
    
  },
  profiles: 
  {
    width: 150,
    height: 150,
   
    overflow: "hidden",
    marginTop: -160,
    position: 'relative',
    top: 177,
    left:13,
    
    

  },
 
  addPic:{
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    marginLeft: 98,
    borderColor: "#0e079d",
    marginTop: -40,
    backgroundColor:"#4FAAF6"

  },

  picCamera:{

    marginLeft:11,
    height:  22,
    width: 22,
    marginTop: 11


  },
  circleText:{

  },


   textLogout:{
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold"

  },

  buttonlogout: {
    width: 70,
    height: 60,
    backgroundColor: "#4FAAF6",
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center"
  },

     centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
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
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 9,
      padding: 10,
      elevation: 2,
      marginTop: 20
    },
    buttonOpen: {
      backgroundColor: "#4FAAF6",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },

   updatebutton:{
    backgroundColor: "#68B05F",
    marginTop: 15,
    borderRadius:9,
    padding:10
    },

    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 10,
      textAlign: "center"
    },

    buttonImage:{

    },

    modalWeight:{
      marginTop:8,
      padding:10,
      
    },

    modalInput:{
   width: "100%",
    height: 50,
    marginTop: 1,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#CDCDCD",
    padding: 16,
    backgroundColor: "#f1ebed",
    fontWeight: "bold"
    }
  });