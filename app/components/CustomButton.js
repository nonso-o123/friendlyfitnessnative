import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import globals from '../config/globals'

export default function CustomButton({ title, fontSize }) {

    let size = styles.buttonText.fontSize
    fontSize ? size = fontSize : size = styles.buttonText.fontSize


    return (
        <View style={styles.button}>
            <Text style={{ ...styles.buttonText, fontSize: size }}
                adjustsFontSizeToFit={true}
                allowFontScaling={true}
            >{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: globals.colors.secondary,
        borderRadius: 15,
        alignContent: "center",
        alignSelf: "center",
        height: 50,
        width: "90%",
    },
    buttonText: {
        color: globals.colors.white,
        padding: 2,
        textAlign: "center",
        textAlignVertical: "center",
        height: "100%",
        fontSize: 15,
        fontWeight: "bold",
    }
})