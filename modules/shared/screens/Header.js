import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation,} from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    marginTop: 0,
    marginHorizontal: 15,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
});

const Header = ({ title, onPress}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <TouchableOpacity 
          onPress={() => navigation.toggleDrawer()}>
          <Octicons name={"three-bars"} color={"#000000"} size={18}></Octicons>
        </TouchableOpacity>
        <Text style={{
          marginLeft: 12,
          fontSize: 17,
          fontWeight: "bold"
        }}>{title}</Text>
      </View>
      <TouchableOpacity 
        onPress={onPress}>
        <Octicons name={"bell"} color={"#000000"} size={18}></Octicons>
      </TouchableOpacity>
    </View>
  )
}

export default Header