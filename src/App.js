import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {AsyncStorage} from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import Router from './router'


const App = () => {

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };


  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
