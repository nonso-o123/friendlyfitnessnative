import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import globals from '../config/globals'
import PlayVideo from '../components/PlayVideo'
import CustomButton from '../components/CustomButton'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function HomeScreen({ navigation }) {

    return (
        <SafeAreaView>
            <View style={globals.mainAreaView}>
                <PlayVideo />

                <View style={styles.textView}>
                    <Text style={globals.regularText}>  Don’t let COVID-19 stop you from achieving your fitness
                    goals. Invite your friends to this virtual workout room
                  and keep making progress together! </Text>
                </View>
                <View style={styles.textView}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('Search Workout Videos')}
                    >
                        <CustomButton title="Search" />
                    </TouchableOpacity>


                </View>
                <View style={styles.textView}>
                    <Text style={globals.mainText}>
                        Recommended Videos
                </Text>
                </View>
            </View>
        </SafeAreaView>

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