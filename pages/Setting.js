import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { ListItem, Icon, SearchBar } from '@rneui/themed'

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },

]


export default function Setting() {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };
  
  
  
  return (

<View>
<SearchBar
      placeholder="Type Here..."
      onChangeText={updateSearch}
      value={search}
      inputContainerStyle={{ backgroundColor: 'white'}}
      containerStyle={{ background : 'transparent',
        borderTopWidth:0,
        borderBottomWidth:0
      }}
    />
  {
    list.map((item, i) => (
      <ListItem key={i} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }
</View>

  );
}
const styles = StyleSheet.create({
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
    justifyContent: 'center',
  },
});