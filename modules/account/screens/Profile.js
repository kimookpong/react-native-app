import { StyleSheet, View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from "../../shared/screens/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take up the full screen
    padding: 15
  },
});

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff"}}>
      {/* Header session */}
      <Header title="ข้อมูลส่วนตัว" />

      {/* Body session */}
      <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 2}}>
        {/* profile detail container */}
        <View>
          <Text>ณัฐดนัย สุวรรณโชติ</Text>
          <Text>เจ้าหน้าที่วิเคราะห์ระบบงานคอมพิวเตอร์</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile