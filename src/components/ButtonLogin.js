import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

export default function ButtonLogin({onPress}) {
  return (
    <TouchableOpacity  
    style={styles.button}
    onPress={onPress}
    >
       <Text style={styles.buttonText}>Enviar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        width:225,
        height:60,
        borderRadius:20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#B617EE',
        marginBottom:10
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#FFF'
    }
})