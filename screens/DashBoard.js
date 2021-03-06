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

import templateDash from "../assets/images/template-dashboard.png";
import grayCross from "../assets/images/gray-cross.png";
import { COLORS, SIZES, FONTSIZES } from "../constants/index";
import bellIcon from "../assets/images/bell-icon.png";
import profilePicture from "../assets/images/profile-picture.png";
import searchLogo from "../assets/images/search-logo.png";
import trophyGray from "../assets/images/trophy-gray.png";
import logoGray from "../assets/images/logo-gray.png";
import trophyIcon from "../assets/images/trophy.png";

const DashBoard = ({ navigation }) => {
  function renderHeader() {
    return (
      <View>
        <Image
          /*change to X out button*/
          source={templateDash}
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
            width: 10,
            height: 10,
          },
          shadowOpacity: 0.8,
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
            console.log("To LeaderBoard");
            navigation.navigate("LeaderBoard");
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
    <View>
    <View
      style ={{
        alignItems:'center',
        flexGrow: 1,
        paddingHorizontal: 5,
        backgroundColor: COLORS.white
      }}
    >
      {renderHeader()}
  
    </View>
    <View
        style={{
          position: "absolute",
          bottom: 70,
          backgroundColor:COLORS.white
        }}
      >
        {renderFooter()}
      </View>
    </View> 
  );
};

export default DashBoard;
