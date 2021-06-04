import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Image, Button, Text, Input } from 'react-native-elements';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState(null);
    const [mobile, setMobile] = useState(null);
    const [email, setEmail] = useState(null);
    const [imgURL, setImgURL] = useState(null);
    const [portfolio, setPortfolio] = useState(null);
    const [password, setPassword] = useState(null);
    const [confPassword, setConfPassword] = useState(null);
    const handleRegister = () => {
        alert(password)
    }
    return (
        <ScrollView style={styles.scrollScreen}>
            <KeyboardAvoidingView style={styles.container}>
                <Image
                    source={require('../assets/chat-box.png')}
                    style={{
                        width: 100,
                        height: 100,
                        marginBottom: 10
                    }}
                />
                <Text h3 >Create an account</Text>
                <View style={styles.inputContainer}>
                    <Input
                        placeholder="Full Name"
                        type="text"
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        placeholder="Mobile Number"
                        type="text"
                        value={mobile}
                        onChangeText={text => setMobile(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        placeholder="Email Address"
                        type="email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        placeholder="Image URL"
                        type="text"
                        value={imgURL}
                        onChangeText={text => setImgURL(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        placeholder="Portfolio URL"
                        type="text"
                        value={portfolio}
                        onChangeText={text => setPortfolio(text)}
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
                <View style={styles.inputContainer}>
                    <Input
                        placeholder="Confirm Password"
                        type="password"
                        secureTextEntry
                        value={confPassword}
                        onChangeText={text => setConfPassword(text)}
                    />
                </View>
                <Button
                    title="Register"
                    buttonStyle={styles.button}
                    onPress={handleRegister}
                />
                <Button
                    title="Login"
                    type="outline"
                    buttonStyle={styles.buttonOutline}
                    titleStyle={{ color: "#FFA300" }}
                    onPress={()=>navigation.navigate("Login")}
                />
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    scrollScreen: {
        backgroundColor: "white",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        padding: 10
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
