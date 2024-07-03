import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function Setting() {
  return (
    <View>
      <Text>Settings!</Text>
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