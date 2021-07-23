import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { Home, SignUp, LogIn } from "./screens";



const Stack = createStackNavigator();

const App = () => {
return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false, }}
        initialRouteName={"LogIn"} >
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LogIn" component={LogIn} />

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
