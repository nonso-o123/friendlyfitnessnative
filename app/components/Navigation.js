import * as React from 'react';
// import img from '../assets/ff_logo.png'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'
import AboutScreen from '../screens/AboutScreen'
import ProfileScreen from '../screens/ProfileScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import globals from '../config/globals';
import StackNavigation from '../navigation/StackNavigation';


const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'md-home' : 'md-home'
                    } else if (route.name === 'About') {
                        iconName = focused ? 'md-information-circle' : 'md-information-circle-outline'
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'md-person-add' : 'md-person-add'
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}
            tabBarOptions={{
                activeTintColor: globals.colors.primary,
                inactiveTintColor: globals.colors.darkGrey
            }}
        >
            <Tab.Screen name="Home" component={StackNavigation} />
            <Tab.Screen name="About" component={AboutScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}


// import { createStackNavigator } from '@react-navigation/stack';
// import { StyleSheet, Text, Button } from 'react-native'
// import HomeScreen from '../screens/HomeScreen'
// import AboutScreen from '../screens/AboutScreen'
// import globals from '../config/globals'

// const Stack = createStackNavigator();
// export default function Navigation() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="Home"
//                 component={HomeScreen}
//                 options={{ title: "Welcome" }}
//             />
//             <Stack.Screen name="Profile" component={ProfileScreen} />
//             <Stack.Screen name="About" component={AboutScreen} />
//         </Stack.Navigator>
//     )
// }


// const ProfileScreen = () => {
//     return <Text>This is Jane's profile</Text>;
// };




