import { StyleSheet, View, StatusBar, ScrollView, ImageBackground, Image, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "../../shared/screens/Header";
import Login from "./Login";
// import Profile from "./Profile";
import { Text, Title, Card, Avatar, withTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../shared/components/Colors";
import Schedule from "../../TimeAttendance/screens/Schedule";

const login = "Login";
const profile = "Profile";

const img1 = {width: "100%", height: "100%"}
const img2 = {uri: "https://play-lh.googleusercontent.com/lT5l0ieAtFJ2KgNGm_3Wpwi91Y57aRK6iBfj2iGwmrSqLF7GGx27MYdy_p_EdB3ltg=w240-h480-rw"}
const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take up the full screen
    padding: 15
  },
  profileImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  profileImage: {
    height: 140,
    width: 140,
    marginTop: -10,
    borderRadius: 75,
  },
  editIconContainer: {
    height: 35,
    width: 35,
    backgroundColor: "#ee8924",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -30,
    marginLeft: 80
  },
  nameRoleContainer: {
    alignItems: "center",
    marginVertical: 10
  },
  name: {
    color: "#ff0000"
  },
  position: {
    color: "#cccccc",
    fontFamily: "Prompt-Regular"
  },
  bannerImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    width: "100%",
    height: 130,
    borderRadius: 5
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    textAlign: "center",
    marginTop: 20,
    margin: "auto"
  },
  menuChild: {
    width: "33"
  },
  menuTitle: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 3,
    color: "black"
  },
  newsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 60,
    margin: "auto"
  },
  newsChild: {
    padding: 1,
    width: "48%",
    borderRadius: 5,
    fontSize: 18,
    textAlign: "center"
  },
});



const Home = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState();

  const fetchUser =  async () => {
    setUserInfo(await AsyncStorage.getItem("@userInfo"));
    //console.log(userInfo.fname);
  }

  useEffect(() => {
    fetchUser();
    //console.log(userInfo.fname);
  }, []);

  const handlePress = () => {
    navigation.navigate(Schedule);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff"}}>
      {/* Header session */}
      <Header title="หน้าหลัก" />

      {/* Body session */}
      <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 2}}>
        {/* profile image container */}
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={{uri: 'https://hrms.wu.ac.th/uploads/perperson/e455fd8e689f71acb11a3f0c0c5fa986.jpg',}}
          />
          <TouchableOpacity style={styles.editIconContainer}>
            <Feather name={"edit-3"} size={20} color={"#ffffff"}></Feather>
          </TouchableOpacity>
        </View>

        {/* profile detail container */}
        <View style={styles.nameRoleContainer}>
          <Text variant="titleLarge" theme={{color: { primary: 'green' }}} fontFamily={"Prompt-Regular"}>ณัฐดนัย สุวรรณโชติ</Text>
          <Text variant="titleSmall" style={styles.position}>เจ้าหน้าที่วิเคราะห์ระบบงานคอมพิวเตอร์</Text>
        </View>

        <View>
          <Image source={require('../../../images/Banner/wu1.jpg')} style={styles.bannerImage} />
        </View>

        {/* menu session */}
        <View style={styles.menuContainer}>
          <View style={styles.menuChild}>
            <TouchableOpacity onPress={handlePress}>
              <Avatar.Icon size={80} icon="folder"/>
              <Text style={styles.menuTitle}>ตารางปฏิบัติงาน</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.menuChild}>
            <Avatar.Icon size={80} icon="folder" />
            <Text style={styles.menuTitle}>สวัสดิการ</Text>
          </View>
          <View style={styles.menuChild}>
            <Avatar.Icon size={80} icon="folder" />
            <Text style={styles.menuTitle}>บันทึกภาระงาน</Text>
          </View>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.menuChild}>
            <Avatar.Icon size={80} icon="folder" />
            <Text style={styles.menuTitle}>ฝึกอบรม</Text>
          </View>
          <View style={styles.menuChild}>
            <Avatar.Icon size={80} icon="folder" />
            <Text style={styles.menuTitle}>พัฒนาบุคลากร</Text>
          </View>
          <View style={styles.menuChild}>
            <Avatar.Icon size={80} icon="folder" />
            <Text style={styles.menuTitle}>เงินเดือน</Text>
          </View>
        </View>

        {/* news session */}
        <View style={styles.newsContainer}>
          <Card style={styles.newsChild}>
            <Image source={require('../../../images/News/news1.jpg')} style={styles.bannerImage} />
          </Card>
          <Card style={styles.newsChild}>
            <Image source={require('../../../images/News/news2.jpg')} style={styles.bannerImage} />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home


const Test2 = () => {
  return (
    <View>
      <Text>Logout</Text>
      <Text>Natdanai Suwannachot</Text>
    </View>
  )
}