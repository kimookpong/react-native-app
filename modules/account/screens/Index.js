// Bottom
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import React from 'react'

// const Tab = createBottomTabNavigator();
// const Index = () => {
//   return (
//     <Tab.Navigator>
//         <Tab.Screen name="S1" component={S1}></Tab.Screen>
//         <Tab.Screen name="S2" component={S2}></Tab.Screen>
//     </Tab.Navigator>
//   )
// }

// export default Index

// function S1() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function S2() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }


//Drawer
import * as React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', 
                   justifyContent: 'center' }}>
        <Text>Home page</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', 
                   justifyContent: 'center' }}>
      <Text>Notifications Page</Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', 
                   justifyContent: 'center' }}>
      <Text>About Page</Text>
    </View>
  );
}
const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" 
                       component={NotificationsScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
  );
}
