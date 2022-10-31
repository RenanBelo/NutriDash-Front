import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  logo: {
    marginTop: 60
  },

  card: {
    marginTop: '25%',
    width: '100%',
    height: '100%',
    borderRadius: 30,
    backgroundColor: '#F1EBed',
    padding: 10
  },

  text: {
    marginTop: 25,
    marginLeft: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '12%'
  },
  arrow: {
    marginTop: Platform.Version === 'android' ? '5%' : 0, 
    marginRight:345
  },

  title: {
    fontSize: 23,
    marginRight: 25,
    color: '#FFFFFF',
    alignSelf: 'center',
  },

  input: {
    width: "100%",
    height: 50,
    marginTop: 38,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#CDCDCD",
    padding: 16,
    backgroundColor: "#EEEEEE",
    fontWeight: "bold"
  },

  button: {
    height: 50,
    marginTop: 15,
    backgroundColor: "#4FAAF6",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },

  textButton: {
    color: "#FFFFFF",
    fontWeight: "bold"
  },

});