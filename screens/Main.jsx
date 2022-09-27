import React from 'react';
import Constants from 'expo-constants'
import Home from './Home.jsx'
import {View, StyleSheet} from 'react-native';

const Main = () => {

  return(
    <View style={styles.container}>
      <Home/>
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