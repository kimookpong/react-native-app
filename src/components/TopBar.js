import { Appbar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const TopBar = (props) => {
  const { title, back } = props;
  return (
    <LinearGradient colors={["#580376", "#6a11cb"]}>
      <Appbar.Header style={{ backgroundColor: "transparent", elevation: 0 }}>
        {back ? (
          <Appbar.BackAction onPress={back} style={{ color: "#fff" }} />
        ) : null}
        <Appbar.Content
          title={title}
          titleStyle={{ fontSize: 18, color: "#fff" }}
        />
      </Appbar.Header>
    </LinearGradient>
  );
};

export default TopBar;
