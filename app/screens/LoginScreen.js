import React, { useState, useEffect } from 'react'
import {
    StyleSheet, Text, View, StatusBar,
    Platform
} from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import globals from '../config/globals'
import CustomButton from '../components/CustomButton'
import Firebase from '../config/firebase'
import { bindActionCreators } from 'redux';
import { updateEmail, updatePassword, login, getUser } from '../redux/actions/user'
import { connect } from 'react-redux';


const mapDispatchToprops = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, getUser, login }, dispatch)
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
const LoginScreen = ({ navigation, ...props }) => {

    useEffect(() => {
        Firebase.auth().onAuthStateChanged(user => {
            if (user) {
                props.getUser(user.uid)
                if (props.user != null) {
                    navigation.navigate('MainScreen')
                }
            }
        })

    })


    return (
        <View style={styles.container}>
            <View style={styles.itemView}>
                <TextInput style={{ ...globals.textInput, ...styles.textStyle }}
                    placeholder="Email..."
                    value={props.user.email}
                    onChangeText={txt => props.updateEmail(txt)}
                    height={50}
                />
            </View>
            <View style={styles.itemView}>
                <TextInput style={{ ...globals.textInput, ...styles.textStyle }}
                    placeholder="Password..."
                    secureTextEntry={true}
                    value={props.user.password}
                    onChangeText={txt => props.updatePassword(txt)}
                    height={50}
                />
            </View>
            <TouchableOpacity style={styles.itemView}>
                <Text style={{ ...globals.subText, color: globals.colors.white }}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={styles.itemView}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={props.login}
                >
                    <CustomButton
                        title="LOGIN"
                        fontSize={20}
                    />
                </TouchableOpacity>

            </View>
            <View style={styles.itemView}>
                <TouchableOpacity style={styles.itemView}
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={{ ...globals.subText, color: globals.colors.white }}>Or Signup</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    itemView: {
        marginVertical: 10,
        height: 50,
    },
    textStyle: {
        color: globals.colors.secondary,
        lineHeight: 15,
        fontSize: 17,
    },
    container: {
        flex: 1,
        backgroundColor: "#277dbe",
        paddingHorizontal: 10,
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
})
export default connect(mapStateToProps, mapDispatchToprops)(LoginScreen)