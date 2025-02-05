import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import Feather from "react-native-vector-icons/Feather";
import Bottom from './Bottom';
import Profile from '../../account/screens/Profile';
import LoginPin from '../../account/screens/LoginPin'

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

const Test = () => {
  return (
    <View>
      <Text>Logout</Text>
      <Text>Natdanai Suwannachot</Text>
    </View>
  )
}

  return (
    <Drawer.Navigator
      drawerContent={
        (props) => {
          return (
            <SafeAreaView>
              <View style={{
                height: 200,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 70, 96, 0.8)"
              }}>
                <Image
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                    marginBottom: 12
                  }}
                  source={{uri: 'https://hrms.wu.ac.th/uploads/perperson/e455fd8e689f71acb11a3f0c0c5fa986.jpg',}}
                />
                <Text style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#000000",
                  marginBottom: 6
                }}>นายณัฐดนัย สุวรรณโชติ</Text>
                <Text style={{
                  fontSize: 10,
                  color: "#000000"
                }}>เจ้าหน้าที่วิเคราะห์ระบบงานคอมพิวเตอร์</Text>
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          )
        }
      }
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#ffffff",
          width: 250,
        },
        headerStyle: {
          backgroundColor: "#ffffff"
        },
        headerShown: false,
        headerTintColor: "#000000",
        drawerLabelStyle: {
          color: "#000000",
          fontSize: 14,
          marginLeft: -10,
        }
      }}
    >
      <Drawer.Screen 
        name="Home" 
        options={{
          drawerLabel: "หน้าหลัก",
          title: "Home",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Feather name="home" size={20} color={"#000000"} />
          )
        }}
        component={Bottom} 
      />
      <Drawer.Screen 
        name="Profile" 
        options={{
          drawerLabel: "ข้อมูลส่วนตัว",
          title: "Profile",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Feather name="user" size={20} color={"#000000"} />
          )
        }}
        component={Profile} 
      />
      <Drawer.Screen 
        name="Logout" 
        options={{
          drawerLabel: "ออกจากระบบ",
          title: "Logout",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Feather name="log-out" size={20} color={"#000000"} />
          )
        }}
        component={LoginPin} 
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation