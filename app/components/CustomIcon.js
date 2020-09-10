import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import globals from '../config/globals'

export default function CustomIcon(props) {
    return (
        <View>
            <TouchableOpacity
                style={{ ...globals.navButton }, styles.mainView}
                onPress={() =>
                    props.navigation.navigate(props.navigateTo, { name: props.pageName })
                }>
                <Icon
                    name={props.iconName}
                    color={globals.colors.secondary}
                    size={40}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        alignSelf: "auto"
    }
})
