import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screen/Home'
import Favoritos from '../screen/Favoritos';



export default function NavigationDrawer() {
    const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator >
        <Drawer.Screen name='Home' component={Home}/>
        <Drawer.Screen name="Favoritos" component={Favoritos}/>
    </Drawer.Navigator>
  )
}