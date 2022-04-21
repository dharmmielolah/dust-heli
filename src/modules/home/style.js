import {StyleSheet, Platform} from 'react-native';
import Colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    paddingTop: Platform.OS === 'ios' ? 90 : 70,
    alignItems: 'center',
  },
  logo: {
    width: 121,
    height: 51,
    marginBottom: 150,
    alignSelf: 'center',
  },
  menu: {
    width: 300,
    height: 61,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 43,
  },
  bottomLine: {
    width: '100%',
    height: 23,
    backgroundColor: '#EAEAEA',
  },
  menuText: {
    fontSize: 50,
    lineHeight: 61,
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
});
