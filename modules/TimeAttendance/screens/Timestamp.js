import React, { useState, useEffect} from 'react'
import { View, Text, Image, ScrollView, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Header from "../../shared/screens/Header";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take up the full screen
    padding: 15
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    width: "100%",
    height: 300
  },
  mapImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    width: 60,
    height: 80
  },
  clock: {
    fontSize: 20,
    color: "#696969",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20
  },
  iconContainer: {
    textAlign: "center",
    margin: "auto",
    padding: 10
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    textAlign: "center",
    marginTop: 20,
    margin: "auto"
  },
  btnCheckin: {
    backgroundColor: "rgba(34, 139, 34, 0.5)",
    padding: 15,
    width: "48%",
    borderRadius: 35,
    fontSize: 18,
    textAlign: "center"
  },
  btnCheckout: {
    backgroundColor: "rgba(220, 20, 60, 0.5)",
    padding: 15,
    width: "48%",
    borderRadius: 35
  },
  txtCheckin: {
    fontSize: 18,
    textAlign: "center",
    color: "black"
  },
  txtCheckout: {
    fontSize: 18,
    textAlign: "center",
    color: "white"
  }
});

const Timestamp = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff"}}>
      {/* Body session */}
      <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 2}}>
        <View>
            <Image source={require('../../../images/TimeAttendance/wu-map.png')} style={styles.backgroundImage} />
            <View>
                <Text style={styles.clock}>1 ก.พ. 2568 เวลา 10:30:50 น.</Text>
            </View>
            <View style={styles.iconContainer}>
                {/* <FontAwesome5 name={"map-marked-alt"} size={50} color={"#DC143C"}></FontAwesome5> */}
                <Image source={require('../../../images/TimeAttendance/map1.png')} style={styles.mapImage} />
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnCheckin}>
                    <Text style={styles.txtCheckin}>Checkin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCheckout}>
                    <Text style={styles.txtCheckout}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Timestamp