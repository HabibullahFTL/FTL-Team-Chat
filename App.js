import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';

const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#FFCE00" },
  headerTitleStyle: { color: "white", alignSelf: "center" },
  headerTintColor: "white"
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          name="Login"
          options={{ title: "FTL Team Chat" , animationEnabled: true}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{ title: "FTL Team Chat" , animationEnabled: true}}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ title: "FTL Team Chat" , animationEnabled: true}}
          component={HomeScreen}
        />
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
