import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Provider as PaperProvider,
  MD3DarkTheme,
  MD3LightTheme,
} from "react-native-paper";
import { theme } from "../core/theme";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";
import { PinScreen, PinSetScreen } from "../screens";
import { View } from "react-native";

const Stack = createStackNavigator();

export default function AppNavigator() {
  const { user, pin, pinAccess, isDarkMode } = useContext(AuthContext);
  const getInitialRoute = () => {
    if (user == null) return "Auth";
    if (pin == null) return "PinSet";
    if (!pinAccess) return "Pin";
    return "Main";
  };

  return (
    <PaperProvider theme={isDarkMode ? MD3DarkTheme : MD3LightTheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={getInitialRoute()}
          screenOptions={{ headerShown: false }}
        >
          {user == null ? (
            <Stack.Screen name="Auth" component={AuthNavigator} />
          ) : pin == null ? (
            <Stack.Screen name="PinSet" component={PinSetScreen} />
          ) : !pinAccess ? (
            <Stack.Screen name="Pin" component={PinScreen} />
          ) : (
            <Stack.Screen name="<Main>" component={MainNavigator} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
