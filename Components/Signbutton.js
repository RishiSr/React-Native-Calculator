import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import React, { useState } from 'react'

const SignButton = ({ sign, func }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={func} >
            <Text style={styles.textColor} >{sign}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "19%", width: "95%", justifyContent: "center", alignItems: "center", borderRadius: 23,
        backgroundColor: "#3D8361",
        margin: 2,
        elevation: 4



    },
    textColor: {
        color: "#EEF2E6",
        fontWeight: "bold",
        fontSize: 35
    }
})
export default SignButton