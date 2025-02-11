import React from "react";
import { AppRegistry } from "react-native";
import { AuthProvider } from "./src/context/AuthContext";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}

// Register the main component
AppRegistry.registerComponent("YourAppName", () => App);
