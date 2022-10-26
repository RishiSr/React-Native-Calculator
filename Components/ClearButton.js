import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ClearButton = ({ sign, func }) => {
    return (

        <TouchableOpacity style={styles.container} onPress={func} >
            <Text style={styles.textColor} >{sign}</Text>
        </TouchableOpacity>

    )
}

export default ClearButton

const styles = StyleSheet.create({
    container: {
        height: "15%", width: "48%", borderWidth: 2, borderColor: "#1C6758", justifyContent: "center", alignItems: "center", borderRadius: 23,
        backgroundColor: "#3D8361",
        margin: 2



    },
    textColor: {
        color: "#EEF2E6",
        fontWeight: "bold",
        fontSize: 20
    }
})