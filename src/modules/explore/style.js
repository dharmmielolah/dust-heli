import {StyleSheet, Platform} from 'react-native';
import Colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    paddingTop: Platform.OS === 'ios' ? 90 : 70,
    paddingHorizontal: 27,
    alignItems: 'center',
  },
  fullImage: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: Platform.OS === 'ios' ? 90 : 70,
    paddingHorizontal: 27,
  },
  scrollContainer: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 500,
    marginBottom: 51,
  },
});
