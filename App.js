import 'react-native-gesture-handler';
import React from 'react';
// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import globals from './app/config/globals';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import SwitchNavigator from './app/navigation/SwitchNavigator'
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'
import Reducer from './app/redux/reducer';
import { Provider } from 'react-redux';


const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(Reducer, middleware)


export default function App() {

  return (
    <Provider store={store}>
      <SwitchNavigator />

    </Provider>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: globals.colors.primary,
    background: globals.colors.white,
    card: globals.colors.secondary
  },
}

