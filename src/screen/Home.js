import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'


export default function Home(props) {
    console.log(props)
  return (
    
    <View style={styles.container}>
      
      <Text>Inicio</Text>

      <Button onPress={()=>props.navigation.navigate('Login')} title='Cerrar sesion'/>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });