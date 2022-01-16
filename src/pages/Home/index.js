import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { IconChicken, IconCoffee, IconVegetables, ImageHeader } from '../../assets'
import { Balance } from '../../components/'
import ButtonIcons from '../../components/ButtonIcons'

const Home = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ImageHeader} style={styles.header}>
                <View style={styles.welcome}>
                    <Text style={styles.welcome_text}>Welcome,</Text>
                    <Text style={styles.username}>Indra Sudirman</Text>
                </View>
            </ImageBackground>
            <Balance />
            <View style={styles.menu}>
                <Text style={styles.label}>Our healthy menu</Text>
                <View style={styles.iconMenu}>
                    <ButtonIcons title="Rice" type="menu" />
                    <ButtonIcons title="Vegetables" type="menu" />
                    <ButtonIcons title="Chicken" type="menu" />
                    <ButtonIcons title="Juice" type="menu" />
                    <ButtonIcons title="Coffee" type="menu" />
                    <ButtonIcons title="Water" type="menu" />
                </View>
            </View>
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
    },
    menu: {
        paddingLeft: 30,
        paddingTop: 15
    },
    label: {
        fontSize: 18,
        fontFamily: 'Comfortaa-Bold'
    },
    iconMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        flexWrap: 'wrap'
    }
})
