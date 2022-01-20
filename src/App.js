import React from 'react'
import { AsyncStorage, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Router from './router'


const App = () => {

const authContext = React.useMemo(() => ({
  signIn: async(foundUser) => {

    const userToken = String(foundUser[0].userToken)
    const userName = foundUser[0].userName

    try {
      await AsyncStorage.setItem('userToken', userToken)
    } catch(e) {
      console.log(e)
    }
    //console.log('user token: ', userToken)
  }
}))

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
