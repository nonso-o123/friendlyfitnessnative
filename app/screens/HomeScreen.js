import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import globals from '../config/globals'
import PlayVideo from '../components/PlayVideo'
import CustomButton from '../components/CustomButton'
import CustomIcon from '../components/CustomIcon'
import CustomInputText from '../components/CustomInputText'

export default function HomeScreen({ navigation }) {
    const [text, changeText] = useState('')

    return (
        <View>
            <PlayVideo />

            <View style={styles.textView}>
                <Text style={globals.regularText}>  Don’t let COVID-19 stop you from achieving your fitness
                goals. Invite your friends to this virtual workout room
                  and keep making progress together! </Text>
            </View>
            <View style={styles.textView}>
                <CustomInputText placeholder="Search for your favorite workout"
                    onChangeText={val => changeText(val)}
                    value={text}
                />
                <CustomButton title="Search" />

            </View>
            <View style={styles.textView}>
                <Text style={globals.mainText}>
                    Recommended Videos
                </Text>
            </View>
            <CustomIcon
                iconName="info"
                navigateTo="About"
                pageName="About"
                navigation={navigation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screenView: {
        bottom: 5,
    },
    textView: {
        padding: 5,
        margin: 5
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})