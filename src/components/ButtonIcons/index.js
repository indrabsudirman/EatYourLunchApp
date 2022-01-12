import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
    IconTopUpBalance,
    IconRice,
    IconVegetables,
    IconChicken,
    IconJuice,
    IconCoffee,
    IconWaterMineral
} from '../../assets'

const ButtonIcons = ({ title }) => {

    const Icon = () => {
        if (title === "Top Up") return <IconTopUpBalance />

        if (title === "Rice") return <IconRice />
        if (title === "Vegetables") return <IconVegetables />
        if (title === "Chicken") return <IconChicken />
        if (title === "Juice") return <IconJuice />
        if (title === "Coffee") return <IconCoffee />
        if (title === "Mineral Water") return <IconWaterMineral />

        return <IconTopUpBalance />
    }

    return (
        <TouchableOpacity style= {styles.container}>
            <View>
                <Icon />
                <Text style={styles.add_balance}>{title}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default ButtonIcons

const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
        marginRight: 30
    },
    add_balance: {
        fontSize: 14,
        textAlign: 'center'
    }
})
