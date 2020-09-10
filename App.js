import 'react-native-gesture-handler';
import React from 'react';

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import globals from './app/config/globals';
import Navigation from './app/components/Navigation';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';



const switchNavigator = createSwitchNavigator(
  {
    Login: { screen: LoginScreen },
    Register: { screen: RegisterScreen },
    Home: { screen: HomeScreen }
  },
  {
    initialRouteName: 'Login'
  }
)
RegisterScreen.navigationOptions = () => {
  title: 'Home'
}
const App = createAppContainer(switchNavigator)
export default App;

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: globals.colors.primary,
    background: globals.colors.white,
    card: globals.colors.secondary
  },
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#277dbe",
//     paddingHorizontal: 10,
//     justifyContent: 'center',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   },
//   nav: {
//     width: 50,
//     backgroundColor: globals.colors.primary,
//     height: 50,
//     position: "absolute",
//     top: 30,
//     left: 30,
//   },
// });
