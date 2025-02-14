import React, { useRef } from "react";
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

import Carousel from "react-native-reanimated-carousel";

const width = Dimensions.get("window").width;

const Dashboard = ({ navigation }) => {
  const theme = useTheme();
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
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Appbar.Header>
        <Appbar.Content title="ค้นหา" />
        <Appbar.Action icon="bell" onPress={exitApp} />
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
          <Card style={{ margin: 10 }}>
            <Card.Content>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="titleMedium">วอลเล็ท</Text>
                <Button mode="outlined">เติมเงิน</Button>
              </View>
              <Text variant="headlineMedium">฿ 202.20</Text>
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
                icon: "trophy",
                label: "ภารกิจพิชิตทรูมันนี่",
                screen: "Wallet",
              },
              {
                icon: "google",
                label: "TimeAttendance",
                screen: "TimeAttendance",
              },
              { icon: "gold", label: "ซื้อ/ออมทอง", screen: "Mission" },
              {
                icon: "clipboard-text",
                label: "บิลทรูทั้งหมด",
                screen: "Mission",
              },
              { icon: "gift", label: "แลกรางวัล", screen: "Mission" },
              { icon: "ticket", label: "โปรโมชั่น", screen: "Mission" },
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
                <IconButton icon={item.icon} size={40} />
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
