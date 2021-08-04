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
      </View>
    </ScrollView>
  );
};

export default Settings;
