import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default function ContraOlvidada() {
  return (
    <View style={styles.container}>
      <Text>Olvide mi contraseña</Text>
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