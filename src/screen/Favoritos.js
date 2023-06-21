import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

export default function Favoritos(props) {
  return (
    <View style={styles.container}>
      <Text>Favoritos</Text>
      <Button onPress={()=>props.navigation.navigate('Login')} title="Cerrar sesion"/>
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