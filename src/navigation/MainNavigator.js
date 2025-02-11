import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Dashboard,
  ProfileScreen,
  SettingsScreen,
  QrScreen,
  WalletScreen,
  NewsScreen,
} from "../screens";
import FooterBar from "../components/FooterBar";

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <FooterBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Qr" component={QrScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
    </Tab.Navigator>
  );
}
