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
import { COLORS, SIZES, FONTS } from "../constants/index";
import cross from "../assets/images/bx-x.svg";

/* need to change image. Change BetReceiver, BetAmount, BetAction
and margin accordingly*/

const BetDetailsWon = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: SIZES.margin2 * 4,
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
          marginTop: 80, //? depends on text
        }}
      >
        <Text
          style={styles.betText}
          /* NAME is a variable*/
        >
          YOU WON YOUR BET AGAINST (NAME)
        </Text>
        <Text
          style={{
            fontSize: 96,
            lineHeight: 117,
            fontWeight: "bold",
            color: COLORS.white,
            marginTop: 16,
          }}
          /* Bet Amount is a variable*/
        >
          $23
        </Text>
        <Text
          style={{
            fontSize: 24,
            lineHeight: 29,
            fontWeight: "bold",
            color: COLORS.white,
            marginTop: 16,
          }}
          /* Bet Action is a variable*/
        >
          YOU BET... (BET ACTION)
        </Text>
      </View>
    );
  }

  function renderButton() {
    return (
      <View style={{ marginTop: 16 }}>
        <TouchableOpacity
          style={styles.whiteButton}
          onPress={() => {
            console.log("Betting");
            navigation.navigate("BetCash");
          }}
        >
          <Text style={styles.whiteButtonText}>NEW BET</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderButton2() {
    return (
      <View style={{ marginTop: 16 }}>
        <TouchableOpacity
          style={styles.redButton}
          onPress={() => {
            //?
            console.log("Editing bet");
            navigation.navigate("BetCash");
          }}
        >
          <Text style={styles.redButtonText}>CASH OUT</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    textInput: {
      textAlign: "center",
      marginTop: 5,
      marginBottom: 0,
      borderColor: COLORS.gray,
      borderWidth: 1,
      borderRadius: 4,
      height: 50,
      color: COLORS.black,
      ...FONTS.body3,
    },
    subHeading: {
      color: COLORS.gray,
      ...FONTS.body3,
      fontWeight: "bold",
    },
    footer: {
      color: COLORS.gray,
      ...FONTS.body3,
      fontWeight: "bold",
    },
    header: {
      fontSize: 24,
      lineHeight: 29,
      fontWeight: "bold",
      color: COLORS.white,
    },
    betText: {
      fontSize: 32,
      lineHeight: 39,
      fontWeight: "bold",
      color: COLORS.white,
    },
    betNumber: {
      fontSize: 96,
      lineHeight: 117,
      fontWeight: "bold",
      color: COLORS.white,
    },
    betActionText: {
      fontSize: 24,
      lineHeight: 28,
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
    redButton: {
      height: 50,
      backgroundColor: COLORS.primary,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      borderColor: COLORS.white,
      borderWidth: 2,
    },
    whiteButtonText: {
      color: COLORS.primary,
      fontSize: 16,
      lineHeight: 22,
      fontWeight: "bold",
    },
    redButtonText: {
      color: COLORS.white,
      fontSize: 16,
      lineHeight: 22,
      fontWeight: "bold",
    },
  });

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 40,
        backgroundColor: COLORS.primary,
      }}
    >
      {renderHeader()}
        {renderText()}
        {renderButton()}
        {renderButton2()}

    </View>
  );
};

export default BetDetailsWon;
