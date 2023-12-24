import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem ({item, pressHandler}){

    return (
        <TouchableOpacity onPress = {() => pressHandler(item.key)}>
            <View style = {styles.item}>
                <Text style = {styles.text}>{item.text}</Text>
                <MaterialIcons name="delete" size={16} color='#333' />
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    }, text: {
        marginLeft: 5,
    }
})