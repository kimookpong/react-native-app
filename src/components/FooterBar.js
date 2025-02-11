import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { useTheme } from "react-native-paper";

const FooterBar = ({ navigation, currentScreen }) => {
  const theme = useTheme();
  const menuItems = [
    { icon: "home", label: "หน้าหลัก", screen: "Dashboard" },
    { icon: "newspaper", label: "ข่าวสาร", screen: "News" },
    { icon: "qrcode-scan", label: "สแกน", screen: "Qr" },
    { icon: "cog", label: "ตั้งค่า", screen: "Settings" },
    { icon: "account-circle", label: "โปรไฟล์", screen: "Profile" },
  ];

  return (
    <View
      style={[styles.footerBar, { backgroundColor: theme.colors.background }]}
    >
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate(item.screen)}
          style={styles.menuItem}
        >
          <MaterialCommunityIcons
            name={item.icon}
            size={28}
            color={currentScreen === item.screen ? "blue" : "gray"}
          />
          <Text
            style={[
              styles.menuLabel,
              { color: currentScreen === item.screen ? "blue" : "gray" },
            ]}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  footerBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    width: "100%",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  menuLabel: {
    fontSize: 12,
    marginTop: 2,
  },
});

export default FooterBar;
