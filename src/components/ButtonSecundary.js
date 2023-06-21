import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

export default function ButtonSecundary({onPress, text}) {
  return (
    <TouchableOpacity  
    style={styles.button}
    onPress={onPress}
    >
       <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        width:225,
        height:60,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:16,
        color:'#848484'
    }
})