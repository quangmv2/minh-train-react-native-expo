import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Alert, FlatList } from 'react-native';
import axios from 'axios';

let id = 0;

const Screen2 = (props) => {

    return (
        <View style={styles.contanier}>
            

        <Text style={{...styles.text, color: 'black'}}>{2}</Text>
            <Button title="1" onPress={() => props.navigation.navigate('Screen1')}/>
            <Button title="2" />
            <Button title="3" onPress={() => props.navigation.navigate('Screen3')}/>
            
        </View>
    );
}
export default Screen2;

const styles = StyleSheet.create({
    contanier: {
        // flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    button: {
        backgroundColor: '#417bc3',
        padding: 10,
        borderRadius: 5,
        margin: 5
    },
    text: {
        color: '#FFF',
        fontSize: 20
    }
})