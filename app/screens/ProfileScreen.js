import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { SafeAreaView } from 'react-native-safe-area-context'
import Firebase from '../config/firebase'
import CustomButton from '../components/CustomButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import globals from '../config/globals'



const mapStateToProps = state => {
    return { user: state.user }
}
const ProfileScreen = ({ navigation }) => {
    const handleSignout = () => {
        Firebase.auth().signOut()
        navigation.navigate('Login')
    }
    return (
        <SafeAreaView>
            <View style={globals.mainAreaView}>
                <Text>My Profile</Text>
                <TouchableOpacity onPress={handleSignout}>
                    <CustomButton title="Logout" />
                </TouchableOpacity>

            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({})
export default connect(mapStateToProps)(ProfileScreen)