import {StyleSheet, Platform} from 'react-native';
import Colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 30 : 20,
    paddingHorizontal: 27,
    zIndex: 2,
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: Colors.primary,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
  thumbnail: {
    width: 150,
    height: 80,
    backgroundColor: Colors.primary,
    position: 'absolute',
    bottom: 50,
    right: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnailText: {
    fontSize: 20,
    color: Colors.secondary,
  },
});
