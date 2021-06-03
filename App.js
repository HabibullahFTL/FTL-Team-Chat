import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from "./screens/RegisterScreen"


const Stack = createStackNavigator();

const globalScreenOption ={
  headerStyle: {backgroundColor: "#2c6bed"},
  hederTitleStyle: {color: "white"},
  headerTitleColor: "white"
}

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOption}>
        <Stack.Screen name="register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
