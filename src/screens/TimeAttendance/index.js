import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Schedule from "./Schedule";
import Timestamp from "./Timestamp";

const Tab = createBottomTabNavigator();

export default function TimeAttendanceScreen() {
  return (
    <Tab.Navigator
      tabBar={(props) => null}
      initialRouteName="Schedule"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="Timestamp" component={Timestamp} />
    </Tab.Navigator>
  );
}
