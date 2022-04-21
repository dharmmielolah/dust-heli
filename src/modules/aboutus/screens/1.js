import React, {useEffect} from 'react';
import {View, Image, ScrollView, StatusBar} from 'react-native';
import Header from '../../../components/header';
import Styles from '../style';
import Text, {fontNames} from '../../../assets/fonts';
import ABOUTUSDATA from '../../../datum/about.json';

const AboutUs = ({navigation}) => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  });
  return (
    <View style={Styles.container}>
      <Header navigation={navigation} screenName="ABOUT US" />
      <ScrollView
        style={Styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {ABOUTUSDATA.map((about, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              {about.url ? (
                <Image
                  source={{
                    uri: about.url,
                  }}
                  style={Styles.image}
                />
              ) : null}
              <View style={{flex: 1}}>
                <Text textStyles={Styles.subText}>{about.title}</Text>
                <Text type={fontNames.BOLD} textStyles={Styles.mainText}>
                  {about.name}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default AboutUs;
