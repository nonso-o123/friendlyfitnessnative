import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default function VideoListScreen({ route, navigation }) {
    const { ...data } = route.params.data
    // console.log(data)
    return (
        <View>
            {Object.keys(data).map(({ key, value }) => {
                // key = { ...key }
                console.log(key)
                // <Card key={index}>
                //     <Card.Title>{title}</Card.Title>
                //     <Card.Divider />
                //     <Card.Image source={snippet.thumbnails.url}>
                //         <Text style={{ marginBottom: 10 }}>
                //             {snippet.description}
                //         </Text>
                //         <Button
                //             icon={<Icon name="play" color='#fff' />}
                //             title="Play" />
                //     </Card.Image>

                // </Card>
            })}

        </View>
    )
}

const styles = StyleSheet.create({})
