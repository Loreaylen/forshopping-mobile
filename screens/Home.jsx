import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const Home = () => {

  return(
    <View>
      <Text>Bienvenido</Text>
      <TextInput placeholder={'Nombre (Opcional)'}/>
      <TextInput placeholder={'Presupuesto'}/>
      <Button title='Comenzar'/>
    </View>
  )}

export default Home;
