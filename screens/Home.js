import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  Animated,
} from "react-native";

import logo from "../assets/images/logo.png";

import { COLORS, SIZES, FONTSIZES } from "../constants/index";

const Home = ({ navigation }) => {
  function renderLogo() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
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
            width: 200,
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
              ...FONTSIZES.body4,
            }}
          >
            SIGN UP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: 200,
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
              ...FONTSIZES.body4,
            }}
          >
            LOG IN
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {renderLogo()}
      {renderButtons()}
    </View>
  );
};

export default Home;
