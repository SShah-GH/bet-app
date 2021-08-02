import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { Home, SignUp, LogIn, Recovery, CashConfirm, DareConfirm, BetDetailsWon,DashBoard, DetailsPending, BetDetailsLost, BetDetailsDisputed } from "./screens";



const Stack = createStackNavigator();

const App = () => {
return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false, }}
        initialRouteName={"DetailsPending"} >
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
        <Stack.Screen name={"BetDetailsDisputed"} component={BetDetailsDisputed} />
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
