import React, { useRef, useContext } from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  BackHandler,
  TouchableOpacity,
} from "react-native";
import {
  Appbar,
  Card,
  Button,
  Text,
  Divider,
  useTheme,
  IconButton,
} from "react-native-paper";
import {
  Home,
  Checkin,
  TimeAttendance,
  Welfare,
  Notify,
  Reward,
  Gift,
} from "../components/svg";
import Carousel from "react-native-reanimated-carousel";
import { AuthContext } from "../context/AuthContext";

const width = Dimensions.get("window").width;

const Dashboard = ({ navigation }) => {
  const theme = useTheme();
  const { user } = useContext(AuthContext);
  const personID = user.person_id;

  const data = [
    {
      url: "https://clib.psu.ac.th/greenlibrary/images/2023/02/17/banner-green.png",
    },
    {
      url: "https://dszw1qtcnsa5e.cloudfront.net/community/20250124/10003ce7-01ef-4f5b-b18b-8bf4ca421792/381.png",
    },
    {
      url: "https://n2nsp.com/wp-content/uploads/2021/12/20211209_n2nsp_page_ocr-768x256.jpg",
    },
  ];
  const exitApp = () => {
    BackHandler.exitApp(); // ปิดแอปทันที
  };
  const Notification = () => {
    navigation.navigate("Notification");
  };
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Appbar.Header>
        <Appbar.Content title="สวัสดี" />
        <Appbar.Action icon="bell" onPress={Notification} />
        <Appbar.Action icon="exit-to-app" onPress={exitApp} />
      </Appbar.Header>

      <View style={{ height: width / 3 }}>
        <Carousel
          width={width}
          height={width / 3}
          data={data}
          renderItem={({ index }) => (
            <View style={styles.itemContainer}>
              <Image
                index={index}
                source={{
                  uri: data[index].url,
                }}
                style={styles.itemImage}
              />
            </View>
          )}
          loop={true}
          autoPlay={true}
          autoPlayInterval={5000}
        />
      </View>

      <View>
        <ScrollView>
          <Card style={{ margin: 10, backgroundColor: "#ffcc00" }}>
            <Card.Content>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="headlineMedium">ประกาศ</Text>
              </View>
              <Text variant="titleMedium">
                ประกาศจาก สำนักงานอธิการบดี แจ้งเพื่อทราบ
              </Text>
            </Card.Content>
          </Card>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            {[
              {
                icon: "map-marker",
                label: "เช็คอิน",
                screen: "CheckIn",
                svg: Checkin,
              },
              {
                icon: "google",
                label: "TimeAttendance",
                screen: "TimeAttendance",
                svg: TimeAttendance,
              },
              {
                icon: "wallet",
                label: "สวัสดิการ",
                screen: "Welfare",
                svg: Welfare,
              },
              {
                icon: "clipboard-text",
                label: "แจ้งเตือน",
                screen: "Notification",
                svg: Notify,
              },
              {
                icon: "gift",
                label: "แลกรางวัล",
                screen: "Mission",
                svg: Reward,
              },
              {
                icon: "ticket",
                label: "โปรโมชั่น",
                screen: "Mission",
                svg: Gift,
              },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate(item.screen)}
                style={{
                  width: "30%",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                {/* <IconButton icon={item.icon} size={40} /> */}
                <item.svg width={46} height={46} />
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "center",
  },
  itemImage: {
    width: width,
    height: width / 3,
  },
});

export default Dashboard;
