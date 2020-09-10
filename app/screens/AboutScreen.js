import * as React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome'
import globals from '../config/globals'
import { View, Text } from 'react-native'
import CustomIcon from '../components/CustomIcon'

export default function AboutScreen({ navigation }) {
    return (
        <SafeAreaView>
            <View style={globals.mainAreaView}>
                <CustomIcon
                    iconName="user"
                    navigateTo="Profile"
                    pageName="Jane"
                    navigation={navigation}
                />
                <Text>This is about screen</Text>
            </View>
        </SafeAreaView>

    )
}
