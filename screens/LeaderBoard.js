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

import template from "../assets/images/template.png";
import grayCross from "../assets/images/gray-cross.png";
import { COLORS, SIZES, FONTSIZES } from "../constants/index";
import bellIcon from "../assets/images/bell-icon.png";
import profilePicture from "../assets/images/profile-picture.png";
import searchLogo from "../assets/images/search-logo.png";
import trophyGray from "../assets/images/trophy-gray.png";
import logoGray from "../assets/images/logo-gray.png";
import trophyIcon from "../assets/images/trophy.png";

const LeaderBoard = ({ navigation }) => {
  function renderHeader() {
    return (
      <View>
        <Image
          /*change to X out button*/
          source={template}
          resizeMode="contain"
          style={{
            marginTop: 50,
          }}
        />
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
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.1,
          elevation: 3,
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
            source={logoGray}
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
            source={trophyGray}
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
  });

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "space-between",
        paddingHorizontal: 5,
        backgroundColor: COLORS.white,
      }}
    >
      {renderHeader()}
      <View
        style={{
          position: "absolute",
          bottom: 0,
        }}
      >
        {renderFooter()}
      </View>
    </ScrollView>
  );
};

export default LeaderBoard;
