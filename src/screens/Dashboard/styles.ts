import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  adroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0
  },
  container: {
    marginTop: '10%',
    flex: 1,
    flexWrap: "wrap",
    alignContent: 'space-around'
  },
  helloUser: {
    fontSize: 20,
    color: '#E1E1E1',
    marginLeft: 15,
    marginTop: 20
  }
});