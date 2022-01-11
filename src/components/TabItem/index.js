import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconHome, IconHomeActive, IconOrder, IconOrderActive, IconAccount, IconAccountActive } from '../../assets'
import { COLOR_PRIMARY, COLOR_INACTIVE } from '../../utils/constant'

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
    const Icon = () => {
        if (label === "Home") return isFocused ? <IconHomeActive /> : <IconHome />

        if (label === "Order") return isFocused ? <IconOrderActive /> : <IconOrder />

        if (label === "Account") return isFocused ? <IconAccountActive /> : <IconAccount />

        return <iconHome />
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            <Icon/>
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (isFocused) => ({
        fontSize: 14,
        color: isFocused ? COLOR_PRIMARY : COLOR_INACTIVE,
        marginTop: 7
    })
})
