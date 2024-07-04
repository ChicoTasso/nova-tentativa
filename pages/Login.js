import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import Home from './Home';
import Setting from './Setting';
import Profile from './Profile';
import Neymar from './Neymar';

const Tab = createBottomTabNavigator();

function TabActions() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="home" size={24} color="orange" />
        ),
      }} />
      <Tab.Screen name="Settings" component={Setting} options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="gear" size={24} color="orange" />
        ),
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" size={24} color="orange" />
        ),
      }} />
      <Tab.Screen name="Neymar" component={Neymar} options={{
        tabBarLabel: 'Neymar',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" size={24} color="orange" />
        ),
      }} />
    </Tab.Navigator>
  );
}

const Login = () => {
  return (
    <View style={styles.tabs}>
      <NavigationContainer independent={true}>
        <TabActions />
      </NavigationContainer>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  nome: {
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
  placeholder: {
    textAlign: 'center',
  },
  tinyLogo: {
    width: '630px',
    height: '235px',
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
  button: {
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black7',
  },
  tabs: {
    flex: 1,
  },
});
