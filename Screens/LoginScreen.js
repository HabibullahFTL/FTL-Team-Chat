import React, { useState } from 'react'
import { KeyboardAvoidingView, StatusBar } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { Image, Button, Input, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const handleLogin = () => {
        if (email && password) {
            navigation.replace('Home');
        }else{
            alert("You must fillup all the field.")
        }
    }
    return (
        <ScrollView style={styles.scrollScreen}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <StatusBar style="light" />
                <Image
                    source={require('../assets/chat-box.png')}
                    style={{
                        width: 100,
                        height: 100,
                        marginBottom: 10
                    }}
                />
                <Text h3 >Login</Text>
                <View style={styles.inputContainer}>
                    <Input
                        placeholder="Email"
                        autoFocus
                        type="email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        placeholder="Password"
                        type="password"
                        secureTextEntry
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                </View>
                <Button
                    title="Login"
                    buttonStyle={styles.button}
                    onPress={handleLogin}
                />
                <Button
                    title="Register"
                    type="outline"
                    buttonStyle={styles.buttonOutline}
                    titleStyle={{ color: "#FFA300" }}
                    onPress={()=>navigation.navigate("Register")}
                />

            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    scrollScreen: {
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300,
        marginTop: 10
    },
    button: {
        backgroundColor: "#FFCE00",
        marginBottom: 10,
        width: 200,
    },
    buttonOutline: {
        marginBottom: 10,
        borderColor: "#FFCE00",
        width: 200,
    },
})
