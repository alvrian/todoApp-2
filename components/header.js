import  React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
    return (
        <View style = {styles.header}>
            <Text style = {styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 60,
        paddingTop: 18,
        backgroundColor: 'rgb(38, 44, 115)'
    },title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
    }
});