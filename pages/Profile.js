import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
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
        <View style={styles.buttonContainer}>
        </View>
      </CameraView>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    nome :{
      paddingBottom: '15px',
      alignItems: 'center',
    },
    campo: {
      marginTop: '15px',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#999999',
      borderRadius: 7,
      paddingLeft: 30,
      justifyContent: 'center',
      height: '40px',
      width: '120px',
    },
    butao: {
      borderRadius: 7,
      backgroundColor: '#08f',
      alignItems: 'center',
      marginTop: '15px',
      marginLeft: 30,
      paddingTop: '7px',
      height: '35px',
      width: '60px',
    },
    placeholder:{
      textAlign: 'center',
    },
    tinyLogo : {
      width : '630px',
      height : '235px',
    },
    camera: {
      height: 500,
      width : 350,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black7',
    },
  });