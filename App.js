import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Button, StatusBar } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home'
import Profile from './pages/Profile'
import Setting from './pages/Setting'
import Neymar from './pages/Neymar'
import Login from './pages/Login'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as Contacts from 'expo-contacts';

const Tab = createBottomTabNavigator();


function TabActions(){
  return (
      <Tab.Navigator>
        <Tab.Screen  name='Home' component={Home} options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <FontAwesome name="home" size={24} color="orange" />
      ),
    }} />
        <Tab.Screen  name='Settings' component={Setting} options={{
      tabBarLabel: 'Settings',
      tabBarIcon: ({ color, size }) => (
        <FontAwesome name="gear" size={24} color="orange" />
      ),
    }}/>
        <Tab.Screen  name='Profile' component={Profile} options={{
      tabBarLabel: 'Profile',
      tabBarIcon: ({ color, size }) => (
        <AntDesign name="user" size={24} color="orange" />
      ),
    }}/>
    <Tab.Screen  name='Neymar' component={Neymar} options={{
      tabBarLabel: 'Neymar',
      tabBarIcon: ({ color, size }) => (
        <AntDesign name="user" size={24} color="orange" />
      ),
    }}/>
    <Tab.Screen  name='Login' component={Login} options={{
      tabBarLabel: 'Login',
      tabBarIcon: ({ color, size }) => (
        <AntDesign name="user" size={24} color="orange" />
      ),
    }}/>
      </Tab.Navigator>

  )
}



export default function App() {

  return (
    
    <View>
      <NavigationContainer>
      <TabActions />
    </NavigationContainer>
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
