import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'


export default function CrearCuenta(props) {
  return (
    <View style={styles.container}>
      <Text>Crear nueva cuenta</Text>
      <Button onPress={()=>props.navigation.navigate('Login')} title="Enviar"/>
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