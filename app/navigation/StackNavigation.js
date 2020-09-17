import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import VideoListScreen from '../screens/VideoListScreen';

const Stack = createStackNavigator()

export default StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search Workout Videos" component={SearchScreen} />
            <Stack.Screen name={"Workout Video Suggestions"} component={VideoListScreen}
                options={({ route }) => ({ title: route.params.name })}
            />
        </Stack.Navigator>

    )
}

const styles = StyleSheet.create({})
