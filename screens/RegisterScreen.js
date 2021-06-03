import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
// import { TextInput } from "react-native-gesture-handler";
// import { Input } from 'react-native-elements';
// import { Button, Input} from "react-native";
// import { StyleSheet, Button, Input View, SafeAreaView, Text, Alert } from 'react-native';


const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setImageURL] = useState("");

  const register = () => {

  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        I am register
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Full Name"
          autofocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          placeholder="Image"
          type="text"
          value={imageURL}
          onChangeText={(text) => setImageURL(text)}
          onSubmitEditable={register}
        />
      </View>

      <Button containerStyle={styles.button} raised onPress={register} title="Register"/>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {},
  button: {},
});
