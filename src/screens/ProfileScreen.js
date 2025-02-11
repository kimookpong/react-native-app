import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Avatar, Card } from "react-native-paper";
import { AuthContext } from "../context/AuthContext";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
import { Appbar } from "react-native-paper";
import TopBar from "../components/TopBar";
import Background from "../components/Background";

export default function ProfileScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  return (
    <Background>
      <TopBar title="โปรไฟล์" back={() => navigation.navigate("Dashboard")} />
      <View
        style={{
          flex: 1,
          padding: 5,
          width: "100%",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <Avatar.Image
          size={100}
          source={{
            uri: "https://hrms.wu.ac.th/index.php?r=image&id=6300000354",
          }} // เปลี่ยนเป็นรูปโปรไฟล์จริงได้
          style={styles.avatar}
        />

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineMedium">{user?.fullname_th}</Text>
            <Text variant="bodyLarge">
              อีเมล: {user?.person_id || "ยังไม่มีอีเมล"}
            </Text>
            <Text variant="bodyLarge">
              Token: {user?.token || "ไม่มี Token"}
            </Text>
          </Card.Content>
        </Card>

        <Button mode="contained" style={styles.button} onPress={logout}>
          ออกจากระบบ
        </Button>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  avatar: {
    marginBottom: 20,
  },
  card: {
    width: "100%",
    marginBottom: 20,
    padding: 10,
  },
  button: {
    width: "80%",
  },
});
