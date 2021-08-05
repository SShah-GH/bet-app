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
import grayCross from "../assets/images/gray-cross.png";
/* need to change image. Change BetReceiver, Dare, BetAction
and margin accordingly*/

const DareConfirm = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: SIZES.margin2*5 ,
        }}
      >
        <Text style={styles.grayheader}>BET CONFIRMATION</Text>
        <Image
          /*change to icon*/
          source={grayCross}
          resizeMode="contain"
          style={{
            height: 24,
            width: 24,
          }}
        />
      </View>
    );
  }

  function renderText() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: SIZES.margin, //? depends on text
        }}
      >
        <Text
          style={styles.grayheader}
          /* Name and Dare are variables*/
        >
          YOU BET (NAME) (DARE)...
        </Text>
        <Text
          style={styles.betActionText}
          /* Bet Action is a variable*/
        >
          (Bet Action)
        </Text>
      </View>
    );
  }

  function renderButton() {
    return (
      <View style={{ marginTop: SIZES.margin*3 }}>
        <TouchableOpacity
          style={styles.greenButton}
          onPress={() => {
            console.log("Betting");
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.greenButtonText}>CONFIRM BET</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderButton2() {
    return (
      <View style={{ marginTop: SIZES.margin2 }}>
        <TouchableOpacity
          style={styles.whiteButton}
          onPress={() => {
            console.log("Editing bet");
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.whiteButtonText}>EDIT BET</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    grayheader: {
      ...FONTSIZES.body2,
      fontFamily: "monsterratBold",
      color: COLORS.gray2,
      textAlign:"center"
    },
    betActionText: {
      ...FONTSIZES.body2,
      fontFamily:"latoRegular",
      color: COLORS.gray2,
    },
    greenButton: {
      height: 50,
      backgroundColor: COLORS.primary,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    whiteButton: {
      height: 50,
      backgroundColor: COLORS.transparent,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      borderColor: COLORS.primary,
      borderWidth: 2,
    },
    greenButtonText: {
      color: COLORS.white,
      ...FONTSIZES.body3,
      fontFamily: "monsterratBold",
    },
    whiteButtonText: {
      color: COLORS.primary,
      ...FONTSIZES.body3,
      fontFamily: "monsterratBold",
    },
  });

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 40,
        justifyContent: "space-between",
      }}
    >
      {renderHeader()}
      <View style={{
        flexGrow:1,
        justifyContent:'center',
      }}>
        {renderText()}
        {renderButton()}
        {renderButton2()}
      </View>
    </ScrollView>
  );
};

export default DareConfirm;
