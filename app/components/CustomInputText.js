import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import globals from '../config/globals'

export default function CustomInputText({ placeholder, onChangeText, value, password, height, color }) {

    let textHeight = styles.textInput.height
    height ? textHeight = height : textHeight = styles.textInput.height
    return (
        <TextInput style={{ ...styles.textInput, height: textHeight, color: color }}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            secureTextEntry={password}
            adjustsFontSizeToFit={true}
            allowFontScaling={true}
        />

    )
}
const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderWidth: 1,
        margin: 5,
        borderRadius: 25,
        paddingHorizontal: 10,
        borderColor: globals.colors.grey,
        fontSize: 15
    }
})