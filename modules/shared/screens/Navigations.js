import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from './Drawer';

const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{ headerShown: false}}
            initialRouteName='Main'
        >
            <Stack.Screen name="Main" component={Drawer} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigations