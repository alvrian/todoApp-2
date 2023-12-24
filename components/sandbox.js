import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sandbox (){
    return(
        <View style = {styles.container}>
            <Text style = {styles.box1}>one</Text>
            <Text style = {styles.box2}>two</Text>
            <Text style = {styles.box3}>three</Text>
            <Text style = {styles.box4}>four</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: '#ddd',
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },box1 : {
        flex: 1,
        backgroundColor: 'violet',
        padding: 10,
        
    },box2 : {
        flex: 1,
        backgroundColor: 'gold',
        padding: 20,
    },box3 : {
        flex: 1,
        backgroundColor: 'coral',
        padding: 30,
    },box4 : {
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 40,
    }
});
