import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
<<<<<<< HEAD
import { Home, SignUp, LogIn, Recovery, CashConfirm, DareConfirm, BetDetailsWon} from "./screens";
=======
import { Home, SignUp, LogIn, Recovery, CashConfirm, DareConfirm, DetailsPending} from "./screens";
>>>>>>> 8742d79fc8abbd03bb56eabdf2edcf47d8332477



const Stack = createStackNavigator();

const App = () => {
return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false, }}
<<<<<<< HEAD
        initialRouteName={"BetDetailsWon"} >
=======
        initialRouteName={"DetailsPending"} >
>>>>>>> 8742d79fc8abbd03bb56eabdf2edcf47d8332477
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Recovery" component={Recovery} />
        <Stack.Screen name="CashConfirm" component={CashConfirm} />
        <Stack.Screen name="DareConfirm" component={DareConfirm} />
<<<<<<< HEAD
        <Stack.Screen name="BetDetailsWon" component={BetDetailsWon} />
=======
        <Stack.Screen name="DetailsPending" component={DetailsPending} />
>>>>>>> 8742d79fc8abbd03bb56eabdf2edcf47d8332477
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
