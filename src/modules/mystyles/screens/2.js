import Header from '../../../components/header';
import Styles from '../style';
import React, {Component} from 'react';
import {View, Animated, StatusBar} from 'react-native';

import ModelView from 'react-native-gl-model-view';
const AnimatedModelView = Animated.createAnimatedComponent(ModelView);

export default class MyStylesOne extends Component {
  constructor() {
    super();
    this.state = {
      rotateZ: new Animated.Value(0),
    };
  }

  componentDidMount() {
    StatusBar.setBarStyle('light-content');
    this.animate(0);
  }

  animate(iteration) {
    Animated.timing(this.state.rotateZ, {
      toValue: ++iteration * 360,
      useNativeDriver: true,
      duration: 7000,
    }).start(this.animate.bind(this, iteration++));
  }

  renderModel(obj, png) {
    return (
      <AnimatedModelView
        model={{
          uri: obj,
        }}
        texture={{
          uri: png,
        }}
        tint={{r: 1.0, g: 1.0, b: 1.0, a: 1.0}}
        animate
        scale={3}
        flipTexture={true}
        translateZ={-2.5}
        rotateX={30}
        rotateZ={0}
        rotateY={Animated.add(this.state.rotateZ, Math.random() * 360)}
        style={Styles.fullImage}
      />
    );
  }

  render() {
    const {obj, png} = this.props.route.params;
    return (
      <>
        <View style={Styles.container}>
          <Header darkMode onlyBack navigation={this.props.navigation} />
        </View>
        {this.renderModel(obj, png)}
      </>
    );
  }
}
