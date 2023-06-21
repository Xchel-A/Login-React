import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Home from '../screen/Home'
import ContraOlvidada from '../screen/ContraOlvidada'
import CrearCuenta from '../screen/CrearCuenta'
import NavigationTab from './NavigationTab'
import Login from '../screen/Login'
import Tabs from '../screen/Tabs'

export default function NavigationStack() {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
          <Stack.Screen name='Tab' component={NavigationTab}/>
          <Stack.Screen name='Reset Password' component={ContraOlvidada}/>
          <Stack.Screen name='Registrarse' component={CrearCuenta}/>
    </Stack.Navigator>
  )
}