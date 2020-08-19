
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import globals from './app/config/globals';
import Navigation from './app/components/Navigation';
import HomeScreen from './app/screens/HomeScreen';

export default function App() {

  const { landscape } = useDeviceOrientation()
  return (
    <SafeAreaView>
      <View style={{ height: landscape ? '100%' : '70%' }, styles.container}>
        <Navigation />
        <HomeScreen />
        <Text>Hello WORLD!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globals.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
