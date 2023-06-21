import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import NavigationTab from '../navigation/NavigationTab';
import NavigationDrawer from '../navigation/NavigationDrawer';

export default function Tabs(props) {
  return (

      <NavigationDrawer props/>

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