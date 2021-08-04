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
} from "react-native";


import grayCross from "../assets/images/gray-cross.png";
import profilePicture from "../assets/images/profile-picture.png";
import { COLORS, SIZES, FONTSIZES } from "../constants/index";

const Settings = ({ navigation }) => {
  function renderHeader() {
    return (

        <View
          style={{
            marginTop: SIZES.margin*5,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.grayheader}>Settings</Text>

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
      )
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
        marginTop: SIZES.margin*3,
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
          <Text style={styles.grayButtonText}>PRIVACY {'\u0026'} SECURITY</Text>
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
      }}
    >
      {renderHeader()}
      <View style={{
        flexGrow:1,
        justifyContent:'center',
      }}>
      {renderImage()}
      {renderName()}
      {renderButtonInviteFriends()}
      {renderAccount()}
      {renderBilling()}
      {renderPrivacySecurity()}
      {renderHelp()}

      </View>
    </ScrollView>
  );
};

export default Settings;
