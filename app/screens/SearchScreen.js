import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import fetchVids, { baseParams, KEY } from '../axios/fetchVids'
import globals from '../config/globals'

export default SearchScreen = ({ navigation }) => {
    const initialItems = [
        'Cardio Workout',
        'Abs Workout',
        'Strength workout ',
        'Muscles and Strength Workout',
        'Lose Fat Workout',
        'Workout For Beginner',
        'Advanced Workout Routine',
        'Body Building Workout',
        'Body Transformation Workout',
        'High Intensity Workout Beginner',
        'High Intensity Workout Advanced',
        'Full Body Stretch Workout',
        '20-minute workout'
    ]
    const [items, setItems] = useState(initialItems)
    const [suggestions, setSuggestions] = useState([])
    const [loading, setLoading] = useState(true)
    // const [disabled, setDisabled] = useState(true)

    const [term, setTerm] = useState('')

    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState({})


    const handleSubmit = async (searchTerm) => {
        try {
            let response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=${KEY}&q=${searchTerm}`)
            let responseJson = await response.json()
            setVideos(responseJson.items)
            // console.log(responseJson.items)


        }
        catch (error) {
            console.log(error)
        }
        // console.log(videos)
        navigation.navigate("Workout Video Suggestions", { name: searchTerm, data: videos })


        //     const response = await fetchVids
        //         .get("/search", {
        //             params: {
        //                 ...baseParams,
        //                 q: searchTerm,
        //             }
        //         })
        //         .catch(error => {
        //             console.log(error)
        //         })
        //     setVideos(response.data.items)
        //     console.log(response.data.items)
        //     navigation.navigate("Workout Video Suggestions", { name: searchTerm, data: videos })
        // }

        // const handleVideoSelect = vid => {
        //     setSelectedVideo(vid)
        //     console.log(selectedVideo)

    }
    const suggestionOnSelect = item => {
        setTerm(item)
        handleSubmit(item)
        setLoading(true)
        // setDisabled(false)
    }

    onTextChange = (txt) => {
        if (txt.length > 0) {
            setLoading(false)
            const regex = new RegExp(txt, 'gi')
            const result = items.sort().filter(r => regex.test(r))
            setSuggestions(result)
            setTerm(txt)
        } else {
            setLoading(true)
            setTerm(txt)
        }
        // console.log("suggestions:" + suggestions)
        console.log(term)
    }


    return (
        <View>
            <TextInput style={globals.textInput}
                placeholder="Search for your favorite workout"
                value={term}
                onChangeText={val => onTextChange(val)}
            />
            {!loading && suggestions.length > 0 &&
                <View>
                    <FlatList
                        data={suggestions}
                        renderItem={({ item }) => <ListItem bottomDivider
                            onPress={() => suggestionOnSelect(item)}
                        >
                            <ListItem.Content>
                                <ListItem.Title>{item}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>}
                    />
                </View>

            }

        </View>
    )
}

const styles = StyleSheet.create({})
