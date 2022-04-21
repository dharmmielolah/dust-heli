import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {_navigator} from './service';
import * as HOME from '../modules/home';
import * as EXPLORE from '../modules/explore';
import * as HOLOGRAM from '../modules/hologram';
import * as MYSTYLES from '../modules/mystyles';
import * as ABOUTUS from '../modules/aboutus';

const Routes = createStackNavigator();

export default () => {
  return (
    <NavigationContainer ref={_navigator}>
      <Routes.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Routes.Screen
          name={routesNames.HOME}
          component={HOME.Home}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Routes.Screen
          name={routesNames.EXPLORE}
          component={EXPLORE.Explore}
          options={{headerShown: false}}
        />
        <Routes.Screen
          name={routesNames.EXPLOREONE}
          component={EXPLORE.ExploreOne}
          options={{headerShown: false}}
        />
        <Routes.Screen
          name={routesNames.HOLOGRAM}
          component={HOLOGRAM.Hologram}
          options={{headerShown: false, animationEnabled: false}}
        />
        <Routes.Screen
          name={routesNames.MYSTYLES}
          component={MYSTYLES.MyStyles}
          options={{headerShown: false}}
        />
        <Routes.Screen
          name={routesNames.MYSTYLESONE}
          component={MYSTYLES.MyStylesOne}
          options={{headerShown: false}}
        />
        <Routes.Screen
          name={routesNames.ABOUTUS}
          component={ABOUTUS.AboutUs}
          options={{headerShown: false}}
        />
      </Routes.Navigator>
    </NavigationContainer>
  );
};

export const routesNames = {
  HOME: 'Home',
  EXPLORE: 'Explore',
  EXPLOREONE: 'ExploreOne',
  HOLOGRAM: 'Hologram',
  MYSTYLES: 'MyStyles',
  MYSTYLESONE: 'MyStylesOne',
  ABOUTUS: 'ABOUTUS',
};
