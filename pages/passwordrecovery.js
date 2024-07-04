import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';



export default function Recovery({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="default"
        placeholderTextColor="#888"
      />
    <TextInput
        style={styles.input}
        placeholder="Nova Senha"
        keyboardType="numeric"
        placeholderTextColor="#888"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Repita a Nova Senha"
        keyboardType="numeric"
        placeholderTextColor="#888"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Recuperar</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
    recovery : {
      marginTop: 10,
    },
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 40,
      color: '#333',
    },
    input: {
      width: '100%',
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingHorizontal: 15,
      marginVertical: 10,
      fontSize: 16,
      borderColor: '#ddd',
      borderWidth: 1,
    },
    button: {
      width: '100%',
      height: 50,
      backgroundColor: '#4caf50',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
  });
  
