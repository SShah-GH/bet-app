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

const LogIn = () => {
  function renderHeader() {
    return (
      <View>
        <Text
          style={{
            color: COLORS.primary,
            ...FONTS.largeTitle,
          }}
        >
          SIGN UP
        </Text>
        <View
          style={{
            borderBottomColor: COLORS.gray,
            borderBottomWidth: 1,
            marginVertical: 5,
          }}
        ></View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 40,
        backgroundColor: "#fff",
        justifyContent: "center",
      }}
    >
      {renderHeader()}
    </View>
  );
};

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
});

export default LogIn;
