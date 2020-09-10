import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Navigation from '..components/Navigation';

export default class Main extends Component {
    render() {
        return (
            <>
                <NavigationContainer theme={theme} style={styles.nav}>
                    <Navigation />
                </NavigationContainer>
            </>
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
    container: {
        flex: 1,
        backgroundColor: globals.colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    nav: {
        width: 50,
        backgroundColor: globals.colors.primary,
        height: 50,
        position: "absolute",
        top: 30,
        left: 30,
    },
});
