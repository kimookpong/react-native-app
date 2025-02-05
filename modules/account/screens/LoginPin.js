import React, {useState, useEffect, use} from "react"
import { createStaticNavigation, useNavigation,} from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginPin() {
  const navigation = useNavigation();
  const [num, setNum] = useState(0);
  const [pin, setPin] = useState("");
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    const value = e.currentTarget.getAttribute("value");
    setNum(value);
    e.currentTarget.classList.add("active");

    if(value == "backsp"){
      if(pin.length >= 1){
        setPin(pin.substring(0, pin.length - 1));
        setCount(count - 1);
        document.getElementById(`d${count}`).classList.remove("active");
      }
    }
    else if(value == "clear"){
      setPin("");
      setCount(0);
      const elements = document.getElementsByClassName("pwd");
      // Convert HTMLCollection to an array and remove the class
      Array.from(elements).forEach((element) => {
        element.classList.remove("active");
      });
    }
    else{
      setPin(pin + value);
      setCount(count + 1);
    }
  }

  //ฟังก์ชั่นที่จะถูกเรียกเมื่อมีการโหลดหน้า
  useEffect(() => {
    //AsyncStorage.removeItem('@lastUse');
    //Remove class active หลังการกดปุ่ม
    console.log(count + " - " + num + " - " + pin);
    if(count > 0){
      document.getElementById(`d${count}`).classList.add("active");
    }
    else{

    }
    
    window.setTimeout(function(){
      //console.log("remove " + 1);
      document.getElementById(`num${num}`).classList.remove("active");
    }, 300);

    //เมื่อกดปุ่มครบ 6 หลักให้ไปเช็ครหัสการเข้าใช้งานระบบ
    if(pin.length == 6){
      setPin("");
      setCount(0);
      window.setTimeout(function(){
        const elements = document.getElementsByClassName("pwd");
        // Convert HTMLCollection to an array and remove the class
        Array.from(elements).forEach((element) => {
          element.classList.remove("active");
        });
      }, 300);
      if(pin === "123456"){
        //navigation.navigate("Profile");
        navigation.navigate("Home");
        //navigation.navigate("Index");
      }
      //else{
        // setPin("");
        // setCount(0);
        // window.setTimeout(function(){
        //   const elements = document.getElementsByClassName("pwd");
        //   // Convert HTMLCollection to an array and remove the class
        //   Array.from(elements).forEach((element) => {
        //     element.classList.remove("active");
        //   });
        // }, 300);
      //}
    }
  })


  return (
    <div className="divPin">
        <table className="table1">
          <tr className="tr1">
            <td colSpan="2" className ="tdName">{localStorage.getItem("personName")}</td>
          </tr>
          <tr className="tr2">
              <td colSpan="2">
                <div className="divImg"><img src="https://hrms.wu.ac.th/uploads/perperson/e455fd8e689f71acb11a3f0c0c5fa986.jpg" className="imgPro" /></div>
              </td>
          </tr>
          <tr className="tr3">
            <td colSpan="2">
                <div id="pwdShow">
                  <span className="pwd" id={"d1"}></span>
                  <span className="pwd" id={"d2"}></span>
                  <span className="pwd" id={"d3"}></span>
                  <span className="pwd" id={"d4"}></span>
                  <span className="pwd" id={"d5"}></span>
                  <span className="pwd" id={"d6"}></span>
                </div>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
                <table className="tableD">
                  <tr>
                    <td><div className="xNum" id={"num1"} value={"1"} onClick={handleClick}>1</div></td>
                    <td><div className="xNum" id={"num2"} value={"2"} onClick={handleClick}>2</div></td>
                    <td><div className="xNum" id={"num3"} value={"3"} onClick={handleClick}>3</div></td>
                  </tr>
                  <tr>
                    <td><div className="xNum" id={"num4"} value={"4"} onClick={handleClick}>4</div></td>
                    <td><div className="xNum" id={"num5"} value={"5"} onClick={handleClick}>5</div></td>
                    <td><div className="xNum" id={"num6"} value={"6"} onClick={handleClick}>6</div></td>
                  </tr>
                  <tr>
                    <td><div className="xNum" id={"num7"} value={"7"} onClick={handleClick}>7</div></td>
                    <td><div className="xNum" id={"num8"} value={"8"} onClick={handleClick}>8</div></td>
                    <td><div className="xNum" id={"num9"} value={"9"} onClick={handleClick}>9</div></td>
                  </tr>
                  <tr>
                    <td><div className="xNum backsp" id={"numbacksp"} value={"backsp"} onClick={handleClick}><MaterialCommunityIcons name="backspace" color={"black"} size={26}></MaterialCommunityIcons></div></td>
                    <td><div className="xNum" id={"num0"} value={"0"} onClick={handleClick}>0</div></td>
                    <td><div className="xNum clear" id={"numclear"} value={"clear"} onClick={handleClick}>Clear</div></td>
                  </tr>
                </table>
            </td>
          </tr>
          <tr className="tr4">
              <td className="version">version <span> 1.0.0.10</span></td>
              {/* <td class="setting1"><span class="setting">Setting</span></td> */}
          </tr>
        </table>
    </div>
  )
}

export default LoginPin