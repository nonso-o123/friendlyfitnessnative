import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import MainScreen from '../screens/MainScreen'
const SwitchNavigator = createSwitchNavigator(
    {
        Login: { screen: LoginScreen },
        Register: { screen: RegisterScreen },
        MainScreen: { screen: MainScreen }
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator)


