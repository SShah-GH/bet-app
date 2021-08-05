import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { COLORS, SIZES, FONTSIZES } from "../constants/index";
import cross from "../assets/images/cross.png";

/* need to change image. Change BetReceiver, BetAmount, BetAction
and margin accordingly*/

const BetDetailsDisputed = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: SIZES.margin2 * 5,
        }}
      >
        <Text style={styles.header}>BET DETAILS</Text>
        <TouchableOpacity
          onPress={() => {
            console.log("To Dashboard");
            navigation.navigate("DashBoard");
          }}
        >
          <Image
            /*change to icon*/
            source={cross}
            resizeMode="contain"
            style={{
              position: "relative",
              height: 24,
              width: 24,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderText() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={styles.betText}
          /* NAME is a variable*/
        >
          YOU TIED YOUR BET AGAINST (NAME)
        </Text>
        <Text style={styles.betNumber}>$23</Text>
        <Text style={styles.betActionText}>
          YOU BET... <Text style={{ fontFamily:"latoBold" }}>(Bet Action)</Text>
        </Text>
      </View>
    );
  }

  function renderButton() {
    return (
      <View style={{ marginTop: SIZES.margin*2 }}>
        <TouchableOpacity
          style={styles.whiteButton}
          onPress={() => {
            console.log("Betting");
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.whiteButtonText}>NEW BET</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderButton2() {
    return (
      <View style={{ marginTop: SIZES.margin }}>
        <TouchableOpacity
          style={styles.blueButton}
          onPress={() => {
            //?
            console.log("Editing bet");
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.blueButtonText}>CASH OUT</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    header: {
      ...FONTSIZES.body2,
      fontFamily:"monsterratBold",
      color: COLORS.white,
    },
    betText: {
      ...FONTSIZES.h1,
      fontFamily:"monsterratBold",
      textAlign: "center",
      color: COLORS.white,
    },
    betNumber: {
      fontSize: 90,
      lineHeight: 130,
      fontFamily: "monsterratSemiBold",
      color: COLORS.white,
    },
    betActionText: {
      ...FONTSIZES.body2,
      fontFamily:"monsterratBold",
      color: COLORS.white,
    },
    whiteButton: {
      height: 50,
      backgroundColor: COLORS.white,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      borderColor: COLORS.white,
      borderWidth: 2,
    },
    blueButton: {
      height: 50,
      backgroundColor: COLORS.secondary,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      borderColor: COLORS.white,
      borderWidth: 2,
    },
    whiteButtonText: {
      color: COLORS.secondary,
      ...FONTSIZES.body3,
      fontFamily:"monsterratBold",
    },
    blueButtonText: {
      color: COLORS.white,
      ...FONTSIZES.body3,
      fontFamily:"monsterratBold",
    },
  });

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "space-between",
        paddingHorizontal: 40,
        backgroundColor: COLORS.secondary,
      }}
    >
      {renderHeader()}
      <View
        style={{
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        {renderText()}
        {renderButton()}
        {renderButton2()}
      </View>
    </ScrollView>
  );
};

export default BetDetailsDisputed;
