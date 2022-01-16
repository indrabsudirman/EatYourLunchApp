import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { LogoOrange } from '../../assets'
import { COLOR_BLACK, COLOR_INACTIVE, COLOR_PRIMARY, COLOR_WHITE } from '../../utils/constant'



const Login = ({navigation}) => {

    function navigate() {
        navigation.navigate('SignUp')
    }


    return (
        <View style={styles.mainView}>
            <View style={styles.topView}>
                <Image style={styles.image} source={LogoOrange}></Image>
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.headingText}>
                    Welcome {'\n'}
                    Back
                </Text>
                <View style={styles.formView}>
                    <TextInput placeholder='Email address*' placeholderTextColor={COLOR_BLACK} style={styles.textInput} />
                    <TextInput placeholder='Password*' secureTextEntry={true} placeholderTextColor={COLOR_BLACK} style={styles.textInput} />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.textButton} onPress={navigate}>
                    <Text style={styles.signUpText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

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
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        width: '100%',
        height: '70%',
        backgroundColor: COLOR_PRIMARY,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    image: {
        width: '65%',
        resizeMode: 'contain'
    }, headingText: {
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
        marginTop: 30
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
