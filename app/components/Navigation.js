import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globals from '../config/globals'

export default function Navigation() {
    return (
        <View style={styles.nav}>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        width: 50,
        backgroundColor: globals.colors.primary,
        height: 50,
        position: "absolute",
        top: 30,
        left: 30,
    }
})
