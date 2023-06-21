import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from '../screen/Home'
import Favoritos from '../screen/Favoritos'

export default function NavigationTab() {
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Favoritos' component={Favoritos}/>
    </Tab.Navigator>
  )
}