import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import HomeScreen from '../screens/HomeScreen'

const SwitchNavigator = createSwitchNavigator(
    {
        Login: { screen: LoginScreen },
        Register: { screen: RegisterScreen },
        Home: { screen: HomeScreen }
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator)


