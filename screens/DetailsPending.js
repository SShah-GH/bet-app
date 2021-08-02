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


import grayCross from "../assets/images/gray-cross.png";
import { COLORS, SIZES, FONTSIZES } from "../constants/index";

const DetailsPending = ({ navigation }) => {
  function renderHeader() {
    return (

        <View
          style={{
            marginTop: SIZES.margin*5,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.grayheader}>BET Details</Text>

          <TouchableOpacity
            onPress={() => {
              console.log("To Dashboard");
              navigation.navigate("DashBoard");
            }}
          >
            <Image
              /*change to X out button*/
              source={grayCross}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
              }}
            />
          </TouchableOpacity>
        </View>
    );
  }

  function renderStatus() {
    return (
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text style={styles.betText}>PENDING BET AGAINST (SARAH KAHN)</Text>
      </View>
    );
  }

  function renderValue() {
    return (
      <View
        style={{
          justifyContent: "center",
        }}
      >
        <Text style={styles.betNumber}>$30</Text>
      </View>
    );
  }

  function renderDetails() {
    return (
      <View
        style={{
          justifyContent: "center",
          marginVertical: SIZES.margin,
        }}
      >
        <Text style={styles.betText}>
          YOU BET...{" "}
          <Text style={{ fontSize: 28 }}>
            I can throw a football farther than you.
          </Text>
        </Text>
      </View>
    );
  }

  function renderButtonWon() {
    return (
      <View style={{ marginTop: SIZES.margin }}>
        <TouchableOpacity
          style={styles.greenButton}
          onPress={() => {
            console.log("You Won");
            navigation.navigate("Dashboard");
          }}
        >
          <Text style={styles.greenButtonText}>YOU WON</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderButtonLost() {
    return (
      <View style={{ marginTop: SIZES.margin }}>
        <TouchableOpacity
          style={styles.redButton}
          onPress={() => {
            console.log("You Lost");
            navigation.navigate("Dashboard");
          }}
        >
          <Text style={styles.greenButtonText}>YOU LOST</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderButtonClose() {
    return (
      <View style={{ marginTop: SIZES.margin }}>
        <TouchableOpacity
          style={styles.blueButton}
          onPress={() => {
            console.log("Close Bet");
            navigation.navigate("Dashboard");
          }}
        >
          <Text style={styles.greenButtonText}>CLOSE BET</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // TODO
  function renderInfo() {
    return;
  }

  const styles = StyleSheet.create({
    grayheader: {
      ...FONTSIZES.body2,
      fontFamily: "monsterratBold",
      color: COLORS.gray2,
    },
    betText: {
      ...FONTSIZES.h1,
      fontFamily: "monsterratBold",
      color: COLORS.gray2,
      textAlign: "center",
    },
    betNumber: {
      fontSize: SIZES.margin * 10,
      lineHeight: SIZES.margin2 * 10,
      fontFamily: "monsterratSemiBold",
      color: COLORS.primary,
      textAlign: "center",
    },
    greenButton: {
      height: 50,
      backgroundColor: COLORS.primary,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    redButton: {
      height: 50,
      backgroundColor: COLORS.red,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    blueButton: {
      height: 50,
      backgroundColor: COLORS.secondary,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    greenButtonText: {
      color: COLORS.white,
      ...FONTSIZES.body3,
      fontFamily: "monsterratBold",
    },
  });

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "space-between",
        paddingHorizontal: 40,
      }}
    >
      {renderHeader()}
      <View style={{
        flexGrow:1,
        justifyContent:'center',
      }}>
      {renderStatus()}
      {renderValue()}
      {renderDetails()}
      {renderButtonWon()}
      {renderButtonLost()}
      {renderButtonClose()}
      </View>
    </ScrollView>
  );
};

export default DetailsPending;
