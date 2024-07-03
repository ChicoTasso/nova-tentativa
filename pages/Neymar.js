import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Neymar() {
    const [count, setCount] = useState(0);

    const aperteComForca = () => setCount(prevCount => prevCount + 1);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={aperteComForca} style={styles.button}>
                <Text style={styles.text}>Contador de Neymar {count}</Text>
            </TouchableOpacity> 
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#08f',
        borderRadius: 7,
        alignItems: 'center',
        padding: 10,
        marginTop: 15,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        justifyContent: 'center',
    },
});
