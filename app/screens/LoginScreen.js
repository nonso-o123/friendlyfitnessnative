import React, { useState } from 'react'
import {
    StyleSheet, Text, View, StatusBar,
    Platform
} from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import globals from '../config/globals'
import CustomButton from '../components/CustomButton'
import Firebase from '../config/firebase'

export default LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleLogin = () => {
        console.log("pressed!")
        Firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => navigation.navigate('Home'))
            .catch(error => console.log(error))
    }

    return (
        <View style={styles.container}>
            <View style={styles.itemView}>
                <TextInput style={{ ...globals.textInput, ...styles.textStyle }}
                    placeholder="Email..."
                    value={email}
                    onChangeText={txt => setEmail(txt)}
                    height={50}
                />
            </View>
            <View style={styles.itemView}>
                <TextInput style={{ ...globals.textInput, ...styles.textStyle }}
                    placeholder="Password..."
                    secureTextEntry={true}
                    value={password}
                    onChangeText={txt => setPassword(txt)}
                    height={50}
                />
            </View>
            <TouchableOpacity style={styles.itemView}>
                <Text style={{ ...globals.subText, color: globals.colors.white }}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={styles.itemView}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={handleLogin}
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
