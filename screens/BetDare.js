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
import bellIcon from "../assets/images/bell-icon.png";
import profilePicture from "../assets/images/profile-picture.png";
import logoWhite from "../assets/images/logo-white.png";
import trophyIcon from "../assets/images/trophy.png"

/* need to change image. Change BetReceiver, BetAmount, BetAction
and margin accordingly*/

const BetDare = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: SIZES.margin2 * 5,
        }}
      >
        <Text style={styles.header}>SEND A BET</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              console.log("To Dashboard");
              navigation.navigate("DashBoard");
            }}
          >
            <Image
              /*change to icon*/
              source={bellIcon}
              resizeMode="contain"
              style={{
                marginHorizontal: 8,
                height: 30,
                width: 30,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("To Dashboard");
              navigation.navigate("DashBoard");
            }}
          >
            <Image
              /*change to icon*/
              source={profilePicture}
              resizeMode="contain"
              style={{
                height: 38,
                width: 38,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderHeader2() {
    return (
      <View
        style={{
          marginVertical: SIZES.margin,
        }}
      >
        <Text style={styles.header}>WHAT'S THE DARE? </Text>
      </View>
    );
  }

  function renderInputs() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Type Your Dare Here..."
          placeholderTextColor={COLORS.gray}
          selectionColor={COLORS.white}
          multiline={true}
          textAlignVertical={"top"}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Type Your Bet Here..."
          placeholderTextColor={COLORS.gray}
          selectionColor={COLORS.white}
          multiline={true}
          textAlignVertical={"top"}
        />
      </View>
    );
  }

  function renderButtons() {
    return (
      <View
        style={{
          marginVertical: SIZES.margin * 2,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={styles.greenButton}
          onPress={() => {
            console.log("Betting");
            navigation.navigate("BetCash");
          }}
        >
          <Text style={styles.greenButtonText}>BET CASH</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.whiteButton}
          onPress={() => {
            console.log("Betting");
          }}
        >
          <Text style={styles.whiteButtonText}>BET DARE</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderButton2() {
    return (
      <View
        style={{
          marginVertical: SIZES.margin,
        }}
      >
        <TouchableOpacity
          style={styles.greenButton2}
          onPress={() => {
            console.log("Betting");
            navigation.navigate("BetContact");
          }}
        >
          <Text style={styles.greenButtonText}>SEND BET</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: SIZES.width,
          alignSelf: "center",
          alignItems: "center",
          paddingVertical: 15,
        }}
      >
    
          <Text style={styles.header}>$32</Text>
   

        <TouchableOpacity
          onPress={() => {
            console.log("To Dashboard");
            navigation.navigate("DashBoard");
          }}
        >
          <Image
            /*change to icon*/
            source={logoWhite}
            resizeMode="contain"
            style={{
              height: 60,
              width: 60,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("To Dashboard");
            navigation.navigate("DashBoard");
          }}
        >
          <Image
            /*change to icon*/
            source={trophyIcon}
            resizeMode="contain"
            style={{
              height: 34,
              width: 34,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    header: {
      ...FONTSIZES.body2,
      fontFamily: "monsterratBold",
      color: COLORS.white,
    },

    textInput: {
      marginBottom: SIZES.margin,
      padding: SIZES.padding * 2,
      backgroundColor: COLORS.white,
      borderColor: COLORS.transparent,
      borderWidth: 1,
      borderRadius: 10,
      height: 180,
      fontFamily: "latoRegular",
      color: COLORS.black,
      ...FONTSIZES.body3,
    },

    whiteButton: {
      height: 50,
      width: "48%",
      backgroundColor: COLORS.white,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      borderColor: COLORS.white,
      borderWidth: 2,
      marginBottom: SIZES.margin,
    },
    greenButton: {
      height: 50,
      width: "48%",
      backgroundColor: COLORS.primary,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      borderColor: COLORS.white,
      borderWidth: 2,
      marginBottom: SIZES.margin,
    },
    greenButton2: {
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
      ...FONTSIZES.body3,
      fontFamily: "monsterratBold",
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
        backgroundColor: COLORS.primary,
      }}
    >
      {renderHeader()}
      {renderButtons()}
      <View
        style={{
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        {renderHeader2()}
        {renderInputs()}
        {renderButton2()}
      </View>
      {renderFooter()}
    </ScrollView>

  );
};

export default BetDare;
