import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Avatar, Card, IconButton } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react'
import Header from "../../shared/screens/Header";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take up the full screen
    padding: 15
  }
});

const Setting = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff"}}>
      {/* Header session */}
      <Header title="ตารางปฏิบัติงาน" />

      {/* Body session */}
      <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 2}}>
        <View>
          <Card style={{marginBottom: 10}}>
            <Card.Title
              title="1"
              subtitle="1"
              left={(props) => <Avatar.Icon {...props} icon="folder" />}
              right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
            />
          </Card>
          <Card style={{marginBottom: 10}}>
            <Card.Title
              title="2"
              subtitle="2"
              left={(props) => <Avatar.Icon {...props} icon="folder" />}
              right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
            />
          </Card>
          <Card style={{marginBottom: 10}}>
            <Card.Title
              title="3"
              subtitle="3"
              left={(props) => <Avatar.Icon {...props} icon="folder" />}
              right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
            />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Setting