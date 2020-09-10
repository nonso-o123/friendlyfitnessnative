import * as React from 'react';
// import img from '../assets/ff_logo.png'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'
import AboutScreen from '../screens/AboutScreen'

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="About" component={AboutScreen} />
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




