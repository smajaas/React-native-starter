import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// Text screen for password validation

const TextScreen = () => {
const [password, setPassword ] = useState('')
return (
    <View>
        <Text>Enter Password : </Text>
        <TextInput 
        style = {styles.input}
        autoCapitalize="none"
        autoCorrect= { false }
        value = {password}
        onChangeText = {newValue => setPassword(newValue)}
        />
        { password.length < 4 ? <Text>Password must be 4 characters</Text> : null }
    </View>
)
}


// Text screen for displaying name
/***const TextScreen = () => {
    const [name, setName] = useState('');
    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput 
            style = {styles.input} 
            autoCapitalize="none"
            autoCorrect={ false }
            value={name}
            onChangeText={(newValue)=>setName(newValue)}
            />
            <Text>My name is {name}</Text>
            </View>
    )
}***/

const styles = StyleSheet.create({
    input: {
        margin:15,
        borderColor:'black',
        borderWidth:1
    }
})


export default TextScreen;