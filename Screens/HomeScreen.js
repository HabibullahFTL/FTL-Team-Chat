import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Image, Button, Text, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomListItem from '../components/CustomListItem';

const HomeScreen = ({ navigation }) => {
    const userList = [
        {id:1,name:"Habibullah Bahar",message:"Hi, How are you?",img:require('../assets/hb.jpg')},
        {id:2,name:"Gowtam Kumar",message:"We are doing a project",img:require('../assets/user1.png')},
        {id:1,name:"Antor Khan",message:"Hi, there! This is Antor.",img:require('../assets/user2.png')}
    ]
    return (
        <SafeAreaView>
            <ScrollView>
                {
                    userList.map(user=> <CustomListItem user={user}/>)
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
