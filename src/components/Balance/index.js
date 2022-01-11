import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { COLOR_PRIMARY } from '../../utils/constant'
import ButtonIcons from '../ButtonIcons'

const Balance = () => {
    return (
        <View style={styles.container}>
            <View style={styles.balanceInfo}>
                <View style={styles.text}>
                    <Text style={styles.labelBalance}>Balance :</Text>
                    <Text style={styles.valueBalance}>IDR 100.000</Text>
                </View>
                <View style={styles.text}>
                    <Text style={styles.labelPoint}>EYL Points :</Text>
                    <Text style={styles.valuePoint}>1000 points</Text>
                </View>
            </View>

            <View style={styles.buttonAct}>
                <ButtonIcons />

            </View>
        </View>
    )
}

export default Balance

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 17,
        marginHorizontal: 30,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        marginTop: - windowHeight * 0.05,
        flexDirection: 'row'
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    balanceInfo: {
        width: "65%"
    },
    labelBalance: {
        fontSize: 18,
        fontFamily: 'Comfortaa-Bold'
    },
    valueBalance: {
        fontSize: 18,
        fontFamily: 'Comfortaa-Bold'
    },
    labelPoint: {
        fontSize: 13,
        fontFamily: 'Comfortaa-Bold'
    },
    valuePoint: {
        fontSize: 13,
        fontFamily: 'Comfortaa-Bold',
        color: COLOR_PRIMARY
    },
    buttonAct: {
        marginLeft: 20
    }
})
