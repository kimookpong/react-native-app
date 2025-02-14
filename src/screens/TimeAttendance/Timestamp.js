import React from "react";
import Background from "../../components/Background";
import TopBar from "../../components/TopBar";

const Timestamp = ({ navigation }) => {
  return (
    <Background>
      <TopBar title="Timestamp" back={() => navigation.navigate("Schedule")} />
    </Background>
  );
};

export default Timestamp;
