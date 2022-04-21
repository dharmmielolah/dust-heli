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
import EXPLOREDATA from '../../../datum/explore.json';

const Explore = ({navigation}) => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  });
  return (
    <View style={Styles.container}>
      <Header navigation={navigation} screenName="EXPLORE" />
      <ScrollView
        style={Styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {EXPLOREDATA.map((model, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('ExploreOne', {url: model.url})
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

export default Explore;
