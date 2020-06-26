import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Alert, FlatList } from 'react-native';
import axios from 'axios';



const Screen3 = (props) => {

    return (
        <View style={styles.contanier}>
            

            <Text style={{...styles.text, color: 'black'}}>{3}</Text>

            <Button title="1"onPress={() => props.navigation.navigate('Screen1')} />
            <Button title="2" onPress={() => props.navigation.navigate('Screen2')} />
            <Button title="3" />
            
        </View>
    );
}
export default Screen3;

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