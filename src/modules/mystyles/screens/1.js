import React, {useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Header from '../../../components/header';
import Styles from '../style';
import MYSTYLESDATA from '../../../datum/mystyles.json';

const MyStyles = ({navigation}) => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  });
  return (
    <View style={Styles.container}>
      <Header navigation={navigation} screenName="STYLES" />
      <ScrollView
        style={Styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {MYSTYLESDATA.map((model, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('MyStylesOne', {
                  ...model,
                })
              }>
              <Image
                source={{uri: model.url}}
                style={Styles.image}
                resizeMode="cover"
                resizeMethod="scale"
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MyStyles;
