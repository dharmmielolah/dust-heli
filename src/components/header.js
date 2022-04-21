import React from 'react';
import {TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import Text, {fontNames} from '../assets/fonts';
import Icon from 'react-native-vector-icons/AntDesign';
import {logoBlack, logoWhite} from '../assets/images/png';
import Colors from '../assets/colors';

export default ({screenName, navigation, darkMode, onlyBack, route}) => {
  if (onlyBack) {
    return (
      <View style={style.container}>
        <TouchableOpacity
          onPress={
            route
              ? () => navigation.navigate(route, {refresh: true})
              : () => navigation.goBack()
          }>
          <Icon
            name="arrowleft"
            size={24}
            color={darkMode ? Colors.secondary : Colors.primary}
            style={style.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={style.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={24} style={style.icon} />
        </TouchableOpacity>
        <Image
          resizeMode="contain"
          style={style.logo}
          source={darkMode ? logoWhite : logoBlack}
        />
      </View>
      <Text type={fontNames.BOLD} textStyles={style.text}>
        {screenName}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 2,
    marginBottom: 50,
  },
  icon: {
    marginRight: 11,
  },
  logo: {
    width: 63,
    height: 25,
  },
  text: {
    fontSize: 20,
    lineHeight: 24,
    opacity: 0.5,
  },
});
