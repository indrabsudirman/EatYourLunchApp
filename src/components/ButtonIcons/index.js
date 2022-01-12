import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconTopUpBalance } from '../../assets'

const ButtonIcons = ({ title }) => {

    const Icon = () => {
        if (title === "Top Up") return <IconTopUpBalance />
    }

    return (
        <TouchableOpacity>
            <View>
                <Icon />
                <Text style = {styles.add_balance}>{title}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default ButtonIcons

const styles = StyleSheet.create({
    add_balance: {
        fontSize: 14,
        textAlign: 'center'
    }
})
