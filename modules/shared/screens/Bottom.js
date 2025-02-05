import { View, Text, Image, Platform } from 'react-native';
import React from 'react';
import { Icon, Avatar } from "react-native-paper";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Home from '../../account/screens/Home';
import Setting from '../../account/screens/Setting';
import Timestamp from '../../TimeAttendance/screens/Timestamp';

const Tab = createBottomTabNavigator();
const Bottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "rgba(192, 162, 212, 1)", position: "absolute", bottom: 0, right: 0, left: 0, elevation: 0, height: Platform.OS === "ios" ? 90 : 60 },
        tabBarShowLabel: true,
        headerShown: false
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarLabel: 'หน้าหลัก',
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" size={size} color={color} />;
          },
        }}
      >
      </Tab.Screen>
      {/* <Tab.Screen 
        name="Timestamp" 
        component={Timestamp}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => {
            return <Avatar.Icon icon="map" size={60} color={color}/>;
          },
        }}
      >
      </Tab.Screen> */}
      <Tab.Screen 
        name="Timestamp" 
        component={Timestamp}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(121, 47, 173, 0.8)",
                height: 70,
                width: 70,
                top: -3,
                borderRadius: 50,
                borderWidth: 3,
                borderColor: "#ffffff"
              }}>
                <FontAwesome5 name="map-marked-alt" size={26} color={"#ffffff"} />
              </View>
            );
          },
        }}
      >
      </Tab.Screen>
      <Tab.Screen 
        name="Setting" 
        component={Setting}
        options={{
          tabBarLabel: 'ตั้งค่า',
          tabBarIcon: ({ color, size }) => {
            return <Feather name="settings" size={size} color={color} />;
          },
        }}
      >
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Bottom