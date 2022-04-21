import React, {useEffect, useState} from 'react';
import {StatusBar, View, TouchableOpacity} from 'react-native';
import Header from '../../../components/header';
import Styles from '../style';
import Text, {fontNames} from '../../../assets/fonts';
import HOLOGRAMDATA from '../../../datum/hologram.json';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';

const Hologram = ({navigation}) => {
  const [activeVideo, setActiveVideo] = useState(HOLOGRAMDATA[0]);
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    Orientation.lockToLandscape();
  }, []);
  return (
    <>
      <View style={Styles.container}>
        <Header navigation={navigation} onlyBack darkMode route="Home" />
        <TouchableOpacity
          onPress={
            activeVideo.id === 0
              ? () => setActiveVideo(HOLOGRAMDATA[1])
              : () => setActiveVideo(HOLOGRAMDATA[0])
          }
          style={Styles.thumbnail}>
          {activeVideo.id === 0 ? (
            <Text textStyles={Styles.thumbnailText}>Lyrics</Text>
          ) : null}
          {activeVideo.id === 1 ? (
            <Text textStyles={Styles.thumbnailText}>Video</Text>
          ) : null}
        </TouchableOpacity>
      </View>
      <Video
        source={{uri: activeVideo.url}}
        style={Styles.video}
        resizeMode="cover"
        repeat={true}
      />
    </>
  );
};

export default Hologram;
