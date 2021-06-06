import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

const CustomListItem = ({user}) => {
    return (
        <ListItem>
            <Avatar
                rounded
                source={user.img}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight:"bold"}}>
                    {user.name}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    {user.message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
