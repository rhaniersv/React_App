import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './pages/home';
import Login from './pages/login';
import Registro from './pages/registro';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registro" component={Registro} />
    </Stack.Navigator>

    // <Drawer.Navigator>
    //   <Drawer.Screen name="Home" component={Home} />
    //   <Drawer.Screen name="Login" component={Login} />
    //   <Drawer.Screen name="Registro" component={Registro} />
    // </Drawer.Navigator>

    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={Home} />
    //   <Tab.Screen name="Login" component={Login} />
    //   <Tab.Screen name="Registro" component={Registro} />
    // </Tab.Navigator>
  );
}
