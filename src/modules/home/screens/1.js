import React, {useEffect} from 'react';
import {
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Text, {fontNames} from '../../../assets/fonts';
import {logoBlack, menuBg} from '../../../assets/images/png';
import {routesNames} from '../../../navigation/stacks';
import Styles from '../style';
import Orientation from 'react-native-orientation-locker';

const Menu = ({text, action = () => {}}) => {
  return (
    <TouchableOpacity onPress={action} style={Styles.menu}>
      <Text type={fontNames.BOLD} textStyles={Styles.menuText}>
        {text}
      </Text>
      <View style={Styles.bottomLine} />
    </TouchableOpacity>
  );
};

const Home = ({navigation, route}) => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    Orientation.lockToPortrait();
  }, []);
  useEffect(() => {
    if (route.params) {
      Orientation.lockToPortrait();
    }
  });
  return (
    <ImageBackground style={Styles.container} source={menuBg}>
      <View>
        <Image source={logoBlack} style={Styles.logo} />
        <Menu
          text="HOLOGRAM"
          action={() => navigation.navigate(routesNames.HOLOGRAM)}
        />
        <Menu
          text="EXPLORE"
          action={() => navigation.navigate(routesNames.EXPLORE)}
        />
        <Menu text="STYLE" />
        <Menu text="ABOUT US" />
      </View>
    </ImageBackground>
  );
};

export default Home;
