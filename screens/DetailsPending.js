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

import cross from "../assets/images/cross.png";
import { COLORS, SIZES, FONTSIZES } from "../constants/index";

const DetailsPending = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          marginTop: 50,
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
            source={cross}
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
          marginTop: 80,
          flexDirection: "center",
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
          marginTop: 16,
          flexDirection: "center",
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
          marginTop: 16,
          flexDirection: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={styles.betText}>
          YOU BET...
          <Text style={{ fontWeight:"normal" }}>I can throw a
          football farther than you.</Text>
        </Text>
      </View>
    );
  }

  function renderButtonWon() {
    return (
      <View style={{ marginTop: 16 }}>
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
      <View style={{ marginTop: 16 }}>
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
      <View style={{ marginTop: 16 }}>
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
      fontSize: 24,
      lineHeight: 29,
      fontWeight: "bold",
      color: COLORS.gray2,
    },
    betText: {
      fontSize: 32,
      lineHeight: 39,
      color: COLORS.gray2,
      textAlign: "center",
      fontWeight: "bold",
    },
    betNumber: {
      fontSize: 96,
      lineHeight: 117,
      fontWeight: "bold",
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
        backgroundColor: "#fff",
      }}
    >
      {renderHeader()}

      {/* {renderStatus()}
      {renderValue()}
      {renderDetails()}
      {renderButtonWon()}
      {renderButtonLost()}
      {renderButtonClose()}
      {renderInfo()} */}
    </View>
  );
};

export default DetailsPending;
