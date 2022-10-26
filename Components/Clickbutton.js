import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import React, { useState } from 'react'

const Clickbutton = ({ sign, func }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={func} >
            <Text style={styles.textColor} >{sign}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "20%", width: "31.5%", justifyContent: "center", alignItems: "center", borderRadius: 23,
        backgroundColor: "#D6CDA4",
        margin: 2,
        elevation: 4



    },
    textColor: {
        color: "#EEF2E6",
        fontWeight: "bold",
        fontSize: 30
    }
})
export default Clickbutton