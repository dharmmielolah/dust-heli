import React, {useEffect} from 'react';
import {ImageBackground, StatusBar} from 'react-native';
import Header from '../../../components/header';
import Styles from '../style';

const ExploreOne = ({navigation, route}) => {
  const {url} = route.params;
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  });
  return (
    <ImageBackground style={Styles.fullImage} source={{uri: url}}>
      <Header navigation={navigation} onlyBack darkMode />
    </ImageBackground>
  );
};

export default ExploreOne;
