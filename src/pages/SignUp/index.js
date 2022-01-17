import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { LogoOrange } from '../../assets'
import { COLOR_BLACK, COLOR_PRIMARY, COLOR_WHITE } from '../../utils/constant'

const SignUp = () => {
    return (
        <View style={styles.mainView}>
            <View style={styles.topView}>
                <Image style={styles.image} source={LogoOrange}></Image>
            </View>
            <ScrollView style={styles.bottomView}>
                <Text style={styles.headingText}>
                    Sign Up
                </Text>
                <View style={styles.formView}>
                    <TextInput placeholder='Full Name*' placeholderTextColor={COLOR_BLACK} style={styles.textInput} />
                    <TextInput placeholder='Email address*' placeholderTextColor={COLOR_BLACK} autoCapitalize='none' style={styles.textInput} />
                    <TextInput placeholder='Mobile*' placeholderTextColor={COLOR_BLACK} style={styles.textInput} />
                    <TextInput placeholder='Password*' secureTextEntry={true} placeholderTextColor={COLOR_BLACK} style={styles.textInput} />
                    <TextInput placeholder='Confirm Password*' secureTextEntry={true} placeholderTextColor={COLOR_BLACK} style={styles.textInput} />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    mainView: {
        marginTop: 40,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topView: {
        width: '100%',
        height: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        width: '100%',
        height: '80%',
        backgroundColor: COLOR_PRIMARY,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    image: {
        width: '40%',
        resizeMode: 'contain'
    }, 
    headingText: {
        fontSize: 35,
        fontFamily: 'Comfortaa-Bold',
        marginLeft: 30,
        marginTop: 20,
        color: COLOR_BLACK,
        fontWeight: 'bold'
    },
    formView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10
    },
    textInput: {
        width: '90%',
        borderWidth: 1,
        borderColor: COLOR_BLACK,
        height: 52,
        borderRadius: 10,
        paddingLeft: 8,
        marginTop: 20,
        color: COLOR_BLACK,
    },
    button: {
        width: '90%',
        color: COLOR_BLACK,
        height: 52,
        backgroundColor: COLOR_WHITE,
        borderRadius: 10,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: COLOR_BLACK
    },
    signUpText: {
        color: COLOR_BLACK,
    },
    textButton: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 20
    }
})
