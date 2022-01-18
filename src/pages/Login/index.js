import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import { LogoSignIn } from '../../assets'
import { COLOR_BLACK, COLOR_PRIMARY, COLOR_WHITE } from '../../utils/constant'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient'


const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={LogoSignIn}></Image>
            </View>
            <View style={styles.footer}>
                <Text style={styles.textFooter}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name='user-o'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        placeholder='Email'
                        style={styles.textInput}
                        autoCapitalize='none' />
                    <Feather
                        name='check-circle'
                        color='green'
                        size={20} />
                </View>

                <Text style={[styles.textFooter,
                {
                    marginTop: 35
                }]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name='lock'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={true}
                        style={styles.textInput}
                        autoCapitalize='none' />
                    <Feather
                        name='eye-off'
                        color='grey'
                        size={20} />
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_PRIMARY
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    footer: {
        flex: 3,
        backgroundColor: COLOR_WHITE,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    image: {
        width: '50%',
        resizeMode: 'contain'
    },
    texHeader: {
        color: COLOR_PRIMARY,
        fontWeight: 'bold',
        fontSize: 30
    },
    textFooter: {
        color: COLOR_BLACK,
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLOR_WHITE,
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: -12,
        paddingLeft: 10,
        color: COLOR_BLACK
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})
