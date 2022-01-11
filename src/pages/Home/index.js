import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ImageHeader } from '../../assets'
import {Balance} from '../../components/'

const Home = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ImageHeader} style={styles.header}>
                <View style={styles.welcome}>
                    <Text style={styles.welcome_text}>Welcome,</Text>
                    <Text style={styles.username}>Indra Sudirman</Text>
                </View>
            </ImageBackground>
            <Balance/>
        </View>
    )
}

export default Home

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    page: {
        flex: 1

    },
    header: {
        width: windowWidth,
        height: windowHeight * 0.3,
    },
    welcome: {
        marginTop: windowHeight * 0.03,
        paddingHorizontal: 15
    },
    welcome_text: {
        fontSize: 20,
        fontFamily: 'Comfortaa-Light'
    },
    username: {
        fontSize: 22,
        fontFamily: 'Comfortaa-Bold'
    }
})
