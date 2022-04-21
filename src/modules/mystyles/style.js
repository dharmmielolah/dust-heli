import {StyleSheet, Platform} from 'react-native';
import Colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 90 : 70,
    paddingHorizontal: 27,
    zIndex: 9,
  },
  fullImage: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
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
