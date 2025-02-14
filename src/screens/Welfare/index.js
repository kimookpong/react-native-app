import React, { useContext } from "react";
import Background from "../../components/Background";
import TopBar from "../../components/TopBar";
import WebView from "../../components/WebView";
import { AuthContext } from "../../context/AuthContext";


const WelfareScreen = () => {
  const { user } = useContext(AuthContext);
  const  personID = user.person_id;
  const url = "https://e-jpas.wu.ac.th/mobile.php?personid=" + personID;
  return (
    <Background>
      {<TopBar title="สวัสดิการ" />}
      <WebView url={url} />
    </Background>
  );
};

export default WelfareScreen;
