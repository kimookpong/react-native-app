import React, { useContext } from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  BackHandler,
  TouchableOpacity,
} from "react-native";
import { Appbar, Card, Divider, useTheme, Text } from "react-native-paper";
import {
  Checkin,
  TimeAttendance,
  Welfare,
  Notify,
  Reward,
  Gift,
} from "../components/svg";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../context/AuthContext";
import BannerSlide from "../components/BannerSlide";

const width = Dimensions.get("window").width;

const Dashboard = ({ navigation }) => {
  const theme = useTheme();
  const { user } = useContext(AuthContext);

  const exitApp = () => {
    BackHandler.exitApp();
  };
  const Notification = () => {
    navigation.navigate("Notification");
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <LinearGradient colors={["#580376", "#6a11cb"]} style={{ flex: 1 }}>
        <Appbar.Header style={{ backgroundColor: "transparent", elevation: 0 }}>
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <Image
              source={require("../assets/logo.png")}
              style={{ width: 40, height: 40, marginRight: 10 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 18, color: "#fff" }}>
              {"สวัสดี " + user.fullname_th}
            </Text>
          </View>

          <Appbar.Action icon="bell" onPress={Notification} color="#fff" />
          <Appbar.Action icon="exit-to-app" onPress={exitApp} color="#fff" />
        </Appbar.Header>
      </LinearGradient>
      {/* Banner */}
      <View style={{ height: width / 3 }}>
        <BannerSlide />
      </View>

      {/* Announcements */}
      <Card style={{ margin: 10, backgroundColor: "#f8931f" }}>
        <Card.Content>
          <Text variant="headlineMedium" style={{ color: "#ffffff" }}>
            ประกาศ
          </Text>
          <Text variant="titleMedium" style={{ color: "#ffffff" }}>
            ประกาศจาก สำนักงานอธิการบดี แจ้งเพื่อทราบ
          </Text>
        </Card.Content>
      </Card>

      {/* Menu Grid */}
      <View style={styles.gridContainer}>
        {[
          { label: "เช็คอิน", screen: "CheckIn", svg: Checkin },
          {
            label: "เวลาการทำงาน",
            screen: "TimeAttendance",
            svg: TimeAttendance,
          },
          { label: "สวัสดิการ", screen: "Welfare", svg: Welfare },
          { label: "แจ้งเตือน", screen: "Notification", svg: Notify },
          { label: "แลกรางวัล", screen: "Mission", svg: Reward },
          { label: "โปรโมชั่น", screen: "Mission", svg: Gift },
          { label: "สวัสดิการ", screen: "Welfare", svg: Welfare },
          { label: "แจ้งเตือน", screen: "Notification", svg: Notify },
          { label: "แลกรางวัล", screen: "Mission", svg: Reward },
          { label: "โปรโมชั่น", screen: "Mission", svg: Gift },
          { label: "สวัสดิการ", screen: "Welfare", svg: Welfare },
          { label: "แจ้งเตือน", screen: "Notification", svg: Notify },
          { label: "แลกรางวัล", screen: "Mission", svg: Reward },
          { label: "โปรโมชั่น", screen: "Mission", svg: Gift },
          { label: "สวัสดิการ", screen: "Welfare", svg: Welfare },
          { label: "แจ้งเตือน", screen: "Notification", svg: Notify },
          { label: "แลกรางวัล", screen: "Mission", svg: Reward },
          { label: "โปรโมชั่น", screen: "Mission", svg: Gift },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.screen)}
            style={styles.menuItem}
          >
            <item.svg width={50} height={50} />
            <Text>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Promotions */}
      <Divider style={{ marginVertical: 10 }} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ padding: 10 }}
      >
        {["ฟรี ป้าย QR", "GrabFood ลด 50%", "บัญชีออมทอง"].map(
          (promo, index) => (
            <Card key={index} style={{ marginRight: 10, width: 200 }}>
              <Card.Content>
                <Text>{promo}</Text>
              </Card.Content>
            </Card>
          )
        )}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  menuItem: {
    width: "30%",
    alignItems: "center",
    marginVertical: 10,
  },
});

export default Dashboard;
