import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Video } from 'expo-av';

export default class PlayVideo extends Component {
    onBuffer = () => {
        console.log("buffering...")
    }

    onError = () => {
        console.log("error!")
    }

    render() {
        return (
            <View style={styles.videoView}>
                <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    resizeMode={Video.RESIZE_MODE_COVER}
                    isMuted={false}
                    useNativeControls
                    style={{ minHeight: 200 }}
                />


            </View>
        )
    }
}
const styles = StyleSheet.create({
    videoView: {
        padding: 5,
    },
    text: {
        padding: 5,
        textAlign: "center"
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})