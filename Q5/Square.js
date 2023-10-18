import React from 'react'
import { View, Text, Alert, Button } from 'react-native'
import styles from './style'

function ClickOnTheSquare(value) {
    Alert.alert(value);
}

const Square = ({ text }) => {
    return (
        <View style={[styles.box, { backgroundColor: "#7ce0f9" }]}>
            <Text>{text}</Text>
            <Button title='Click me' onPress={() => ClickOnTheSquare(text)}></Button>
        </View>
    );
};

export default Square;