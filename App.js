import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { Home, SignUp, LogIn, Recovery, CashConfirm, DareConfirm, BetDetailsWon,DashBoard, DetailsPending, BetDetailsLost, BetDetailsDisputed } from "./screens";
import { useFonts } from "@use-expo/font";
import AppLoading from "expo-app-loading";
import { 
  Lato_400Regular,
 Lato_700Bold,
} from '@expo-google-fonts/lato'
const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent",
  },
};


const Stack = createStackNavigator();

const App = () => {
  let [fontsLoaded,error] = useFonts({
    
    latoRegular: Lato_400Regular,
    latoBold: Lato_700Bold,
    'robotoRegular': require("./assets/fonts/Roboto-Regular.ttf"),
    'robotoBold': require("./assets/fonts/Roboto-Bold.ttf"),
    'monsterratRegular': require("./assets/fonts/Montserrat-Regular.ttf"),
    'monsterratBold': require("./assets/fonts/Montserrat-Bold.ttf"),

  });
  if(!fontsLoaded){
    return <AppLoading/>
  }
return (

    <NavigationContainer theme={theme} >
      <Stack.Navigator screenOptions={{headerShown: false, }}
        initialRouteName={"SignUp"} >
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Recovery" component={Recovery} />
        <Stack.Screen name="CashConfirm" component={CashConfirm} />
        <Stack.Screen name="DareConfirm" component={DareConfirm} />
        <Stack.Screen name="BetDetailsWon" component={BetDetailsWon} />
        <Stack.Screen name="DetailsPending" component={DetailsPending} />
        <Stack.Screen name="BetDetailsLost" component={BetDetailsLost} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="BetDetailsDisputed" component={BetDetailsDisputed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
export default App;
