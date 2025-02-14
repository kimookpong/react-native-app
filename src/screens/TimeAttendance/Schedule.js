import React, { useContext } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../../components/Background";
import TopBar from "../../components/TopBar";
import { AuthContext } from "../../context/AuthContext";

const Schedule = ({ navigation }) => {
  const { user } = useContext(AuthContext);

  console.log("user", user);

  return (
    <Background>
      <TopBar title="Schedule" />

      {user && <Text>{user.fullname_th}</Text>}

      <TouchableOpacity onPress={() => navigation.navigate("Timestamp")}>
        <Text>test to go to Timestamp</Text>
      </TouchableOpacity>
    </Background>
  );
};

export default Schedule;
