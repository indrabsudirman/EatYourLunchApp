import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, StatusBar } from 'react-native'
import { LogoSignIn } from '../../assets'
import { COLOR_BLACK, COLOR_PRIMARY, COLOR_WHITE } from '../../utils/constant'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient'


const Login = ({ navigation }) => {


    const [data, setData] = React.useState({
        email: '',
        password: '',
        checkTextInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true
    })

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                email: val,
                checkTextInputChange: true,
                isValidUser: true
            })
        } else {
            setData({
                ...data,
                email: val,
                checkTextInputChange: false,
                isValidUser: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            })
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            })
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...setData,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            })
        } else {
            setData({
                ...data,
                isValidUser: false
            })
        }
    }

    const loginHandle = (username, password) => {
        signIn(username, password)
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLOR_PRIMARY}
                barStyle='light-content' />
            <View style={styles.header}>
                <Image style={styles.image} source={LogoSignIn}></Image>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
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
                        autoCapitalize='none'
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                    />
                    {data.checkTextInputChange ?
                        <Animatable.View
                            animation="bounceIn">
                            <Feather
                                name='check-circle'
                                color='green'
                                size={20} />
                        </Animatable.View>

                        : null}
                </View>
                {data.isValidUser ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMessage}>Please fill valid email.</Text>
                    </Animatable.View>
                }



                <Text style={[styles.textFooter,
                {
                    marginTop: 35
                }]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name='lock'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name='eye-off'
                                color='grey'
                                size={20} />
                            :
                            <Feather
                                name='eye'
                                color='green'
                                size={20} />
                        }

                    </TouchableOpacity>
                </View>
                {data.isValidPassword ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMessage}>Password must be 8 characters long.</Text>
                    </Animatable.View>
                }


                <TouchableOpacity>
                    <Text style={{ color: '#DE9910', marginTop: 15, fontWeight: 'bold' }}>
                        Forget password?
                    </Text>
                </TouchableOpacity>

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}>
                        <LinearGradient
                            colors={['#FAB836', '#DE9910']}
                            style={styles.signIn}>
                            <Text style={[styles.textSign, { color: '#ffffff' }]}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                        style={[styles.signIn, {
                            borderColor: '#DE9910',
                            borderWidth: 1,
                            marginTop: 15
                        }]}>
                        <Text style={[styles.textSign,
                        { color: '#DE9910' }]}>
                            Sign Up
                        </Text>

                    </TouchableOpacity>


                </View>

            </Animatable.View>
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
    },
    errorMessage: {
        color: '#FF0000',
        fontSize: 14
    }
})
