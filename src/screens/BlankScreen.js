import React, { memo } from "react";
import { View } from "react-native";
import BackgroundImage from "../components/BackgroundImage";
import Logo from "../components/Logo";

const BlankScreen = ({ navigation }) => {
  return (
    <BackgroundImage>
      <View
        style={{
          flex: 1,
          padding: 5,
          width: "100%",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo />
      </View>
    </BackgroundImage>
  );
};

export default memo(BlankScreen);
