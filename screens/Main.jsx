import React from 'react';
import Constants from 'expo-constants';
import Home from './Home.jsx';
import Calculator from './Calculator.jsx'
import {View, StyleSheet} from 'react-native';

const Main = () => {

  return(
    <View style={styles.container}>
      <Calculator/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop: Constants.statusBarHeight,
      paddingHorizontal:20,
      backgroundColor: '#ffdfff',
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center'
    }
  })

export default Main;