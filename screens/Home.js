import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  Animated,
} from "react-native";

import logo from "../assets/images/bet-05.svg";

import { COLORS, SIZES, FONTSIZES } from "../constants/index";

const Home = ({ navigation }) => {
  function renderLogo() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 30
        }}
      >
        <Image
          source={logo}
          resizeMode="contain"
          style={{
            height: 200,
          }}
        />
      </View>
    );
  }

  function renderButtons() {
    return (
      <View>
        <TouchableOpacity
          style={{
            height: 50,
            margin: SIZES.margin,
            marginTop: 0,
            backgroundColor: COLORS.primary,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            console.log("Ready to Sign Up");
            navigation.navigate("SignUp");
          }}
        >
          <Text
            style={{
              fontFamily:"monsterratBold",
              color: COLORS.white,
              ...FONTSIZES.body3,
            }}
          >
            SIGN UP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,   
            margin: SIZES.margin,
            backgroundColor: COLORS.secondary,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
          console.log("Ready to Log In");
          navigation.navigate("LogIn");
        }}
        >
          <Text
            style={{
              fontFamily:"monsterratBold",
              color: COLORS.white,
              ...FONTSIZES.body3,
            }}
          >
            LOG IN
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView
    contentContainerStyle={{ 
      flexGrow: 1, 
      justifyContent: "center" ,
      paddingHorizontal: 40,
    }}
  >
      {renderLogo()}
      {renderButtons()}
    </ScrollView>
  );
};

export default Home;
