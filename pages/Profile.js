import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Button} from 'react-native';
import { useState, useEffect } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function Profile() {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }
    
    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
          <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
          </View>
        );
    }
    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }
  
    return (
        <View>
            <StatusBar style="auto" />
            <CameraView style={styles.camera} facing={facing}>
                <View style={styles.buttonContainer}></View>
            </CameraView>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    nome: {
        paddingBottom: 15,
        alignItems: 'center',
    },
    campo: {
        marginTop: 15,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: 7,
        paddingLeft: 30,
        justifyContent: 'center',
        height: 40,
        width: 120,
    },
    butao: {
        borderRadius: 7,
        backgroundColor: '#08f',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 30,
        paddingTop: 7,
        height: 35,
        width: 60,
    },
    placeholder: {
        textAlign: 'center',
    },
    tinyLogo: {
        width: 630,
        height: 235,
    },
    camera: {
        height: 500,
        width: 350,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {},
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        justifyContent: 'center',
    },
});
