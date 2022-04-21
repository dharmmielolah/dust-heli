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
  scrollContainer: {
    width: '100%',
  },
  image: {
    width: 100,
    height: 130,
    marginRight: 20,
  },
  subText: {
    fontSize: 14,
    lineHeight: 16,
    color: Colors.primary,
    opacity: 0.5,
    marginBottom: 5,
  },
  mainText: {
    fontSize: 25,
    lineHeight: 35,
    color: Colors.primary,
  },
});
