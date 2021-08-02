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
import logo from "../assets/images/logo.png";

/* need to change image. Change BetReceiver, BetAmount, BetAction
and margin accordingly*/

const CashConfirm = ({ navigation }) => {
  
    function renderHeader() {
        return (
            <View style={{
                marginTop: 50,
                flexDirection:"row",
                justifyContent:"space-between",
                }}
                > 
                <Text
                style={
                  styles.grayheader
                }
                >
                BET CONFIRMATION
                </Text>
                <Image
                /*change to icon*/
                  source={logo}
                  resizeMode="contain"
                 style={{
                    height: 24,
                    width: 24
                  }}
              />
            </View>
        );
    }

    function renderIcon() {
      return (
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "end",
          }}
        >
          <Image
            source={logo}
            resizeMode="contain"
            style={{
              height: 24,
              width: 24
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
            marginTop: 210 //? depends on text
          }}
        >
          <Text
                style={
                  styles.grayheader
                }
                /* Name and Bet Amount are variables*/
                >
                YOU BET (NAME) (BET AMOUNT)...
          </Text>
          <Text
                style={
                  styles.betActionText
                }
                /* Bet Action is a variable*/
                >
                (BET ACTION)
          </Text>
        </View>
      );
    }

  function renderButton() {
    return (
      <View style={{ marginTop: 32}}>
        <TouchableOpacity style={styles.greenButton}
          onPress={() => {
            console.log("Betting");
            navigation.navigate("DashBoard");
          }}
        >
          <Text style={styles.greenButtonText}>
            CONFIRM BET
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderButton2() {
    return (
      <View style={{ marginTop: 16}}>
        <TouchableOpacity
          style={styles.whiteButton}
          onPress={() => {
            console.log("Editing bet");
            navigation.navigate("BetCash");
          }}
        >
          <Text style={styles.whiteButtonText}>EDIT BET</Text>
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
    grayheader: {
        fontSize: 24, 
        lineHeight: 29, 
        fontWeight:"bold",
        color: COLORS.gray2
        },
    betActionText: {
      fontSize: 24, 
      lineHeight: 29, 
      color: COLORS.gray2
      },
    greenButton: {
      height: 50,
      backgroundColor: COLORS.primary,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center"
    },
    whiteButton: {
      height: 50,
      backgroundColor: COLORS.white,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      borderColor: COLORS.primary,
      borderWidth: 2
    },
    greenButtonText: {
      color: COLORS.white,
      fontSize: 16, 
      lineHeight: 22, 
      fontWeight:"bold" 
    },
    whiteButtonText: {
      color: COLORS.primary,
      fontSize: 16, 
      lineHeight: 22, 
      fontWeight:"bold" 
    }  
  });

  return (
    <View
    style={{
      flex: 1,
      paddingHorizontal: 40,
      backgroundColor: "#fff",
      justifyContent: "center",
    }}>
      {renderHeader()}
      {renderText()}
      {renderButton()}
      {renderButton2()}
      </View>
  );
};

export default CashConfirm;