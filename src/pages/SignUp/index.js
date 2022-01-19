import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, StatusBar, ScrollView } from 'react-native'
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
        confirmPassword: '',
        checkTextInputChange: false,
        secureTextEntry: true,
        confirmSecureTextEntry: true,
    })

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                username: val,
                checkTextInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                checkTextInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirmPassword: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry
        });
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
                <ScrollView>
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

                    <Text style={[styles.textFooter,
                    {
                        marginTop: 35
                    }]}>Confirm Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name='lock'
                            color='#05375a'
                            size={20}
                        />
                        <TextInput
                            placeholder='Confirm Password'
                            secureTextEntry={data.confirmSecureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize='none'
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateConfirmSecureTextEntry}
                        >
                            {data.confirmSecureTextEntry ?
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

                    <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>
                            By signing up you agree to our
                        </Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Terms of service</Text>
                        <Text style={styles.color_textPrivate}>{" "}and</Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Privacy policy.</Text>
                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}>
                            <LinearGradient
                                colors={['#FAB836', '#DE9910']}
                                style={styles.signIn}>
                                <Text style={[styles.textSign, { color: '#ffffff' }]}>Sign Up</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={[styles.signIn, {
                                borderColor: '#DE9910',
                                borderWidth: 1,
                                marginTop: 15
                            }]}>
                            <Text style={[styles.textSign,
                            { color: '#DE9910' }]}>
                                Login
                            </Text>

                        </TouchableOpacity>


                    </View>
                </ScrollView>

            </Animatable.View>
        </View>
    );
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
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
})
