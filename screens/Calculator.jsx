import React from 'react';
import { TouchableOpacity, TextInput, Text, View, StyleSheet } from 'react-native';

const Calculator = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.h2}>Presupuesto: $</Text>
      <TextInput style={styles.prizeInput} placeholder='Precio' keyboardType='numeric' />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}><Text style={styles.textColor}>+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textColor}>-</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textColor}>x</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textColor}>Deshacer</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.textColor}>Limpiar</Text></TouchableOpacity>
      </View>
      <Text style={styles.h2}>Total: $</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'stretch',
    alignContent: 'space-between',
    backgroundColor: '#fff7ff',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  btnContainer: {
    height: 130,
    flexDirection: 'row',
    flexWrap: "wrap",
    alignItems: 'center',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    paddingVertical: 0,
    paddingHorizontal: 70
  },
  button: {
    backgroundColor: '#9b7df2',
    height: 50,
    width: 75,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textColor: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  },
  h2: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: 'left'
  },
  prizeInput: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 12,
    padding: 10
  }
})

export default Calculator;