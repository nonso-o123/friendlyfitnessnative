import React, { useState } from 'react'
import {
    StyleSheet, Text, View, StatusBar,
    Platform
} from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import globals from '../config/globals'
import CustomButton from '../components/CustomButton'
import Firebase from '../config/firebase'
import { bindActionCreators } from 'redux';
import { updateEmail, updatePassword, updateName, register } from '../redux/actions/user'
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, updateName, register }, dispatch)
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const RegisterScreen = ({ navigation, ...props }) => {
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    // const handleSignUp = () => {
    //     console.log("pressed!")
    //     Firebase.auth()
    //         .createUserWithEmailAndPassword(email, password)
    //         .then(() => navigation.navigate('Home'))
    //         .catch(error => console.log(error))
    // }

    const handleSignUp = () => {
        props.register()
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <View style={styles.itemView}>
                <TextInput style={{ ...globals.textInput, ...styles.textStyle }}
                    placeholder="Name..."
                    value={props.user.name}
                    onChangeText={txt => props.updateName(txt)}
                    height={50}
                />
            </View>
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
            <View style={styles.itemView}>
                <TouchableOpacity
                    onPress={handleSignUp}
                    activeOpacity={0.7}
                >
                    <CustomButton
                        title="SIGNUP"
                        fontSize={20}
                    />
                </TouchableOpacity>

            </View>
            <View style={styles.itemView}>
                <TouchableOpacity style={styles.itemView}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{ ...globals.subText, color: globals.colors.white }}>Or Login</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)