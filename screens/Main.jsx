import React from 'react';
import Constants from 'expo-constants';
import Calculator from '../screens/Calculator.jsx';
import Home from './Home.jsx';
import DataContext from '../context/DataContext.jsx';
import {View, StyleSheet} from 'react-native';

const Main = () => {
  return(
    <View style={styles.container}>
      <DataContext>
        <Calculator/>
      </DataContext>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop: Constants.statusBarHeight,
      backgroundColor: '#ffdfff',
      flex: 1
    }
  })

export default Main;