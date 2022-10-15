import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    marginTop: '4%',
    width: '100%',
    height: '100%',
    borderRadius: 30,
    backgroundColor: '#F1EBed',
    padding: 10
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '12%'
  },

  title: {
    fontSize: 23,
    marginRight: 25,
    color: '#FFFFFF',
    alignSelf: 'center',
  },

  arrow: {
    marginTop: Platform.OS === 'android' ? '5%' : 0,
    marginLeft: 20,
  },

  text: {
    marginTop: 15,
    marginLeft: 5,
  },

  input: {
    width: "100%",
    height: 50,
    marginTop: 18,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#CDCDCD",
    padding: 16,
    backgroundColor: "#EEEEEE",
    fontWeight: "bold"
  },

  customInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textWeight: {
    marginTop: 15,
    marginRight: '19%',
  },

  inputSmallHeight: {
    width: "48%",
    height: 50,
    marginTop: 18,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#CDCDCD",
    padding: 16,
    backgroundColor: "#EEEEEE",
    fontWeight: "bold"
  },

  inputSmallWeight: {
    width: "48%",
    height: 50,
    marginTop: 18,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#CDCDCD",
    padding: 16,
    backgroundColor: "#EEEEEE",
    fontWeight: "bold"
  },

  textGenre: {
    marginTop: 15,
    marginLeft: 5,
    marginBottom: 10,
  },

  button: {
    height: 50,
    marginTop: 40,
    backgroundColor: "#4FAAF6",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },

  textButton: {
    color: "#FFFFFF",
    fontWeight: "bold"
  }
});