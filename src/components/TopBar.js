import { Appbar } from "react-native-paper";
import React from "react";

const TopBar = (props) => {
  const { title, back } = props;
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={back} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default TopBar;
