import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import globals from '../config/globals'

export default function HomeScreen() {
    return (
        <View>
            <View style={globals.defaultFlex}>

                <Image style={styles.image} source={require("../assets/splash.png")} />
            </View>
            <View style={globals.defaultFlex}>

                <Text> Don’t let COVID-19 stop you from achieving your fitness
                goals. Invite your friends to this virtual workout room
                  and keep making progress together!</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: '50%',
        height: '50%',
    }
})
