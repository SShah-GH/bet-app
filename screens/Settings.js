import React from "react";
import { render } from "react-dom";
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
  StatusBar,
} from "react-native";

import grayCross from "../assets/images/gray-cross.png";
import profilePicture from "../assets/images/profile-picture.png";
import bellIcon from "../assets/images/bell-icon.png";
import { COLORS, SIZES, FONTSIZES } from "../constants/index";

const Settings = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          marginTop: SIZES.margin * 5,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.grayheader}>SETTINGS</Text>

        <TouchableOpacity
          onPress={() => {
            console.log("To Dashboard");
            navigation.navigate("BetDare");
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

  function renderImage() {
    return (
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          source={profilePicture}
          resizeMode="contain"
          style={{
            height: 96,
            width: 96,
          }}
        />
      </View>
    );
  }

  function renderName() {
    return (
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text style={styles.betText}>JOHN SMITH</Text>
      </View>
    );
  }

  function renderButtonInviteFriends() {
    return (
      <View style={{ marginTop: SIZES.margin }}>
        <TouchableOpacity
          style={styles.greenButton}
          onPress={() => {
            console.log("Invite Friends");
            navigation.navigate("Settings");
          }}
        >
          <Text style={styles.greenButtonText}>INVITE FRIENDS</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderAccount() {
    return (
      <View
        style={{
          marginTop: SIZES.margin * 3,
        }}
      >
        <TouchableOpacity
          style={styles.grayButton}
          onPress={() => {
            console.log("Account");
            navigation.navigate("Settings");
          }}
        >
          <Text style={styles.grayButtonText}>ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderBilling() {
    return (
      <View
        style={{
          marginTop: SIZES.margin,
        }}
      >
        <TouchableOpacity
          style={styles.grayButton}
          onPress={() => {
            console.log("Account");
            navigation.navigate("Settings");
          }}
        >
          <Text style={styles.grayButtonText}>BILLING</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderPrivacySecurity() {
    return (
      <View
        style={{
          marginTop: SIZES.margin,
        }}
      >
        <TouchableOpacity
          style={styles.grayButton}
          onPress={() => {
            console.log("Account");
            navigation.navigate("Settings");
          }}
        >
          <Text style={styles.grayButtonText}>PRIVACY {"\u0026"} SECURITY</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderHelp() {
    return (
      <View
        style={{
          marginTop: SIZES.margin,
        }}
      >
        <TouchableOpacity
          style={styles.grayButton}
          onPress={() => {
            console.log("Account");
            navigation.navigate("Settings");
          }}
        >
          <Text style={styles.grayButtonText}>HELP</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderButtonSignOut() {
    return (
      <View style={{ marginTop: SIZES.margin * 4 }}>
        <TouchableOpacity
          style={styles.greenButton}
          onPress={() => {
            console.log("Invite Friends");
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.greenButtonText}>SIGN OUT</Text>
        </TouchableOpacity>

        <Text
          style={{
            textAlign: "center",
            fontFamily: "latoRegular",
            color: COLORS.gray,
            fontSize: 12,
            lineHeight: 20,
          }}
        >
          Copyright TheBetApp.{" "}
          <Text style={{ color: COLORS.secondary }}>Privacy Policy</Text>
          and <Text style={{ color: COLORS.secondary }}>Terms of Service.</Text>
        </Text>
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: COLORS.white,
          width: SIZES.width,
          alignSelf: "center",
          paddingVertical: 25,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.53,
          shadowRadius: 13.97,
          elevation: 21,
        }}
      >
        <Text style={styles.grayheader}>$32</Text>

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
              height: 34,
              width: 34,
            }}
          />
        </TouchableOpacity>
      </View>
    );
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
    grayButton: {
      height: 50,
      backgroundColor: COLORS.lightGray,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.1,
      shadowRadius: 13.97,
      elevation: 2,
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
    grayButtonText: {
      color: COLORS.gray2,
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
        backgroundColor: COLORS.white,
      }}
    >
      {renderHeader()}
      <View
        style={{
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        {renderImage()}
        {renderName()}
        {renderButtonInviteFriends()}
        {renderAccount()}
        {renderBilling()}
        {renderPrivacySecurity()}
        {renderHelp()}
        {renderButtonSignOut()}
      </View>
      {renderFooter()}
    </ScrollView>
  );
};

export default Settings;
