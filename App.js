import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./modules/account/screens/Login";
import Profile from "./modules/account/screens/Profile";
import LoginPin from "./modules/account/screens/LoginPin";
import Home from "./modules/account/screens/Home";
import Index from "./modules/account/screens/Index";
import Setting from "./modules/account/screens/Setting";
import Schedule from "./modules/TimeAttendance/screens/Schedule";
import News from "./modules/account/screens/News";
import "./styles/account.css";
import Drawer from "./modules/shared/screens/Drawer"
import Navigations from "./modules/shared/screens/Navigations";

//const Stack = createNativeStackNavigator();
const divContainer = {width: "100%"}

const Stack = createNativeStackNavigator();
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [accessToken, setAccessToken] = useState();
  const [lastUse, setLastUse] = useState();
  const [isExpire, setIsExpire] = useState(false);

  const fetchUser =  async () => {
    setAccessToken(await AsyncStorage.getItem("@accessToken"));
    setLastUse(await AsyncStorage.getItem("@lastUse"));
  }

  useEffect(() => {
    fetchUser();
    
    if(lastUse != null){
     const diffTime = new Date().getTime() - lastUse;
     
     const sec = (diffTime / 1000);
     
     if((diffTime / 1000) > 10){
       setIsExpire(true);
     }
     else{
      setIsExpire(false);
     }
    }

    setTimeout(() => {
      setIsLoading(false);
      //setIsExpire(false);
      const curDate = new Date();
      const curTime = curDate.getTime();
      AsyncStorage.setItem("@lastUse", curTime);
    }, 1000);
  }, []);


  if(isLoading){
    return(
      <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  //V1
  // return(
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       { !accessToken ? <Stack.Screen name="Login" component={Login} options={{headerShown: false}} /> : <Stack.Screen name="LoginPin" component={LoginPin} options={{headerShown: false}} /> }
  //       <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
  //       <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
  //       <Stack.Screen name="Index" component={Index} options={{headerShown: false}} />
  //       <Stack.Screen name="Setting" component={Setting} options={{headerShown: false}} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // )

  //V2
  // const isSignedIn = accessToken != null;
  // console.log(accessToken);
  // console.log(lastUse);
  // console.log(isExpire);

  // const diffTime = new Date().getTime() - lastUse;
  // const sec = (diffTime / 1000);
  // console.log(sec);
  // if(sec > 10){
  //   setIsExpire(true);
  // }
  // else{
  //  setIsExpire(false);
  // }
  
  // return(
  //   <NavigationContainer>
  //     <Stack.Navigator
  //       screenOptions={{ headerShown: false}}
  //       //initialRouteName='Main'
  //     >
  //       {
  //         accessToken == null ? (
  //          // No token found, user isn't signed in
  //          <Stack.Screen
  //            name="Login"
  //            component={Login}
  //            options={{
  //              title: 'Sign in',
  //              headerShown: false
  //            }}
  //          />
  //         ) 
  //         : (
  //           isExpire == true ? (
  //             <Stack.Screen name="LoginPin" component={LoginPin} options={{headerShown: false}} />
  //           )
  //           : (
  //             <Stack.Screen name="Main" component={Drawer} />
  //           )
  //         )
  //       }
  //     </Stack.Navigator>
  //   </NavigationContainer>
  //   // <Navigations />
  // )

  //V3
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false}}
      >
        {accessToken == null ? (
          // No token found, user isn't signed in
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Sign in',
              headerShown: false
            }}
          />
        ) : (
          // User is signed in
          // <Stack.Screen name="Main" component={Drawer} />
          (
            isExpire == true ? (
              <Stack.Screen name="LoginPin" component={LoginPin} options={{headerShown: false}} />
            ) : (
              //<Stack.Screen name="Main" component={Drawer} />
              <Stack.Screen name="Main" component={News} />
            )
          )
        )}
      </Stack.Navigator>
    </NavigationContainer>
    // <Navigations />
  )
}

export default App
