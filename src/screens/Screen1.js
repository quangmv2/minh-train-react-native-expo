import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Alert, FlatList } from 'react-native';
import axios from 'axios';

let id = 0;

const Screen1 = (props) => {

    const [number, setNumber] = useState(0);
    const [data, setData] = useState([]); 

    useEffect(() => {
        axios.get('http://192.168.1.209:4000/user')
            .then(function (response) {
                setData(response.data)
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            console.log("data");
            
    }, [number])

    const add = () => {
            setNumber(c => c+1);
    }

    const sub = () => {
        setNumber(c => c-1);
    }

    return (
        <View style={styles.contanier}>
            <TouchableOpacity style={styles.button} onPress={sub}>
                <Text style={styles.text}>-</Text>
            </TouchableOpacity>

            <Text style={{...styles.text, color: 'black'}}>{props.number}</Text>

            <TouchableOpacity style={styles.button} onPress={add}>
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>
            <View>
               <FlatList 
                    data={data}
                    renderItem={({item}) => <Text>Name: {item.name} </Text>}
                    key={item => item._id}
               />
            </View>
            <Button title="1" />
            <Button title="2" onPress={() => props.navigation.navigate('Screen2')} />
            <Button title="3" onPress={() => props.navigation.navigate('Screen3')}/>
        </View>
    );
}
export default Screen1;

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