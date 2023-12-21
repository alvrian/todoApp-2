import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default function AddTodo({submitHandler}){

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput 
                style={stlyes.textInput}
                placeholder='add todo...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title= 'add' color = 'rgb(38, 44, 115)'/>
        </View>
    )
}

const stlyes = StyleSheet.create({
    textInput: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})