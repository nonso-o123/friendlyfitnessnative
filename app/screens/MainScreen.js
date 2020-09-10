import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from '../components/Navigation';
import globals from '../config/globals'

export default class Main extends Component {
    render() {
        return (
            <SafeAreaProvider>
                <NavigationContainer theme={theme}>
                    <Navigation />
                </NavigationContainer>
            </SafeAreaProvider>


        )
    }
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
const styles = StyleSheet.create({
});
