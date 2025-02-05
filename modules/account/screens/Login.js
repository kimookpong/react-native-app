import { useState } from "react";
import { createStaticNavigation, useNavigation,} from '@react-navigation/native';
// import React from 'react'
import { StyleSheet, Text, View, Image, Button, ScrollView } from "react-native";
import { Icon, Avatar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take up the full screen
    padding: 0,
    backgroundColor: "white"
  },
  backgroundImage: {
    resizeMode: 'cover', // or 'stretch'
    width: "100%",
    height: 200,
  },
});

// function Login() {
//   const [inputs, setInputs] = useState({});

//   //ถ้ามีการเปลี่ยนแปลงค่าใน Form ให้บันทึกค่าลงในตัวแปล inputs
//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: values}))
//   }

//   // const handleSubmit = (event) => {
//   //   event.prevenDefault();
//   //   console.log(inputs);
//   //   alert(555);
//   // }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log('You clicked submit.' + e);
//     alert(555);
//   }

//   return (
//     // <div>Login</div>
//     <div>
      

//       <form onSubmit={handleSubmit}>
//         <label>Username:
//             <input
//               type="text" 
//               name="username"
//               value={inputs.username}
//               onChange={handleChange}
//             />
//           </label>
//           <label>Password:
//             <input
//               type="password" 
//               name="password"
//               value={inputs.password}
//               onChange={handleChange}
//             />
//           </label>
//           <button type="submit">Submit</button>
//       </form>
//     </div>
//     // <Image ></Image>
//   )
// }

function Login() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  //ถ้ามีการเปลี่ยนแปลงค่าใน Form ให้บันทึกค่าลงในตัวแปล inputs
  const handleChange = (e) => {
    setFormData((value) => {
      return {
        ...value,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleLogin = async () => {
    const respone = await fetch('https://www.melivecode.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
        expiresIn: 60000
      })
    })

    const data = await respone.json();
    if(data.status === "ok"){
      await AsyncStorage.setItem("@accessToken", data.accessToken);
      await AsyncStorage.setItem("@userInfo", JSON.stringify(data.user));
      //await AsyncStorage.setItem("@userInfo", data.user);
      // navigation.navigate("LoginPin");
      // navigation.navigate("Profile");
      navigation.navigate("Home");
    }
    else{
      
    }
    console.log(data)
  }

  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.username + " - " + formData.password);
    localStorage.setItem("personName", "ณัฐดนัย สุวรรณโชติ")
    navigation.navigate("LoginPin");
    //navigate("/loginpin")
    
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // var raw = JSON.stringify({
    //   "username": formData.username,
    //   "password": formData.password
    // });

    // var requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: "follow"
    // };

    // fetch("https://apisqas.wu.ac.th/evn/tbo/6800000082/viewRegister", requestOptions)
    //   .then(response => response.json)
    //   .then(result => {
    //     console.log(result)
    //   })
    //   .catch(error => console.log("error", error))

    // var raw = JSON.stringify({
    //   "username": formData.username,
    //   "password": formData.password
    // });

    // var requestOptions = {
    //   method: "GET",
    //   headers: myHeaders,
    //   redirect: "follow"
    // };

    // fetch("https://apisqas.wu.ac.th/evn/tbo/6800000082/viewRegister")
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log(result.code)
    //   })
    //   .catch(error => console.log("error", error));

    // fetch("https://apisqas.wu.ac.th/evn/tbo/6800000082/viewRegister")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       console.log(result);
    //       // this.setState({
    //       //   isLoaded: true,
    //       //   items: result.items
    //       // });
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       console.log(error);
    //       // this.setState({
    //       //   isLoaded: true,
    //       //   error
    //       // });
    //     }
    //   )
    
  }

  return (
    // <div className="divLogin">
    //   <Image source={require("../../../images/bg-wu1.jpg")} style={img1}></Image>
    //   <form onSubmit={handleSubmit}>
    //     <table className="tbLogin">
    //       <tr className="tr1Login">
    //         <td className="textH">Login</td>
    //       </tr>
    //       <tr className="tr2Login">
    //         <td>
    //           <table className="tableLogin">
    //             <tr>
    //               <td width="10%"><span className='iconUser'><Avatar.Icon size={24} icon="bug" /></span></td>
    //               <td className="divTopic">Username</td>
    //             </tr>
    //             <tr>
    //               <td colSpan="2"><input type="text" id="username" name="username" value={formData.username} onChange={handleChange} /></td>
    //             </tr>
    //             <tr>
    //               <td width="10%"><span className='iconPassword'><Avatar.Icon size={24} icon="calendar" /></span></td>
    //               <td className="divTopic">Password</td>
    //             </tr>
    //             <tr>
    //               <td colSpan="2"><input type="password" id="password" name="password" value={formData.password} onChange={handleChange}  /></td>
    //             </tr>
    //             <tr>
    //               <td width="10%"><span className='iconPhone'><Avatar.Icon size={24} icon="phone" /></span></td>
    //               <td className="divTopic">เบอร์โทรศัพท์</td>
    //             </tr>
    //             <tr>
    //               <td colSpan="2"><input type="text" id="xTelOTP" name="xTelOTP" className="int" /></td>
    //             </tr>
    //           </table>
    //         </td>
    //       </tr>
    //       <tr className="tr3Login">
    //         <td style={{verticalAlign: "top", textAlign: "center"}}>
    //           <button class="button-18" type="submit">
    //             <Icon source="login" color="white" size={20} /> Login
    //           </button>
    //         </td>
    //       </tr>
    //     </table>
    //   </form>
    // </div>

    <ScrollView style={styles.container}>
      <View>
        <Image source={require("../../../images/bg-wu1.jpg")} style={styles.backgroundImage}></Image>
        <table className="tbLogin">
          <tr className="tr1Login">
            <td className="textH">Login</td>
          </tr>
          <tr className="tr2Login">
            <td>
              <table className="tableLogin">
                <tr>
                  <td width="10%"><span className='iconUser'><Avatar.Icon size={24} icon="bug" /></span></td>
                  <td className="divTopic">Username</td>
                </tr>
                <tr>
                  <td colSpan="2"><input type="text" id="username" name="username" value={formData.username} onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td width="10%"><span className='iconPassword'><Avatar.Icon size={24} icon="calendar" /></span></td>
                  <td className="divTopic">Password</td>
                </tr>
                <tr>
                  <td colSpan="2"><input type="password" id="password" name="password" value={formData.password} onChange={handleChange}  /></td>
                </tr>
                <tr>
                  <td width="10%"><span className='iconPhone'><Avatar.Icon size={24} icon="phone" /></span></td>
                  <td className="divTopic">เบอร์โทรศัพท์</td>
                </tr>
                <tr>
                  <td colSpan="2"><input type="text" id="xTelOTP" name="xTelOTP" className="int" /></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr className="tr3Login">
            <td style={{verticalAlign: "top", textAlign: "center"}}>
              <button class="button-18" onClick={handleLogin}>
                <Icon source="login" color="white" size={20} /> Login
              </button>
            </td>
          </tr>
        </table>
      </View>
    </ScrollView>
  )
}

export default Login