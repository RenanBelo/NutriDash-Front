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
  blob: {
    // flex: 1,
    // position: 'relative',
  }
});