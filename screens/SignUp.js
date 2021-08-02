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

import logo from "../assets/images/logo.png";

import { COLORS, SIZES, FONTSIZES } from "../constants/index";

const SignUp = ({ navigation }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  function renderHeader() {
    return (
      <View>
        <Text
          style={{
            fontFamily: "monsterratBold",
            color: COLORS.primary,
            ...FONTSIZES.largeTitle,
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
        />
      </View>
    );
  }

  function renderForm() {
    return (
      <View>
        {/* Full Name */}
        <View style={{ marginTop: SIZES.padding }}>
          <Text style={styles.subHeading}>FULL NAME</Text>
          <TextInput
            style={styles.textInput}
            placeholder="John Doe"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.gray}
          />
        </View>

        {/* Email */}
        <View style={{ marginTop: SIZES.padding }}>
          <Text style={styles.subHeading}>EMAIL</Text>
          <TextInput
            style={styles.textInput}
            placeholder="johndoe@gmail.com"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.gray}
          />
        </View>

        {/* Phone */}
        <View style={{ marginTop: SIZES.padding }}>
          <Text style={styles.subHeading}>PHONE NUMBER</Text>
          <TextInput
            style={styles.textInput}
            placeholder="+01 000 111 222"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.gray}
          />
        </View>

        {/* Password */}
        <View style={{ marginTop: SIZES.padding }}>
          <Text style={styles.subHeading}>PASSSWORD</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.white}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              bottom: 10,
              height: 50,
              width: 50,
            }}
            onPress={() => setShowPassword(!showPassword)}
          ></TouchableOpacity>
        </View>

        {/* Retype Password */}
        <View style={{ marginTop: SIZES.padding }}>
          <Text style={styles.subHeading}>RETYPE PASSSWORD</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.white}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              bottom: 10,
              height: 50,
              width: 50,
            }}
            onPress={() => setShowPassword(!showPassword)}
          ></TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderButton() {
    return (
      <View style={{ marginTop: SIZES.padding * 2 }}>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: COLORS.primary,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            console.log("Signed Up");
            navigation.navigate("Home");
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTSIZES.body3,
              fontFamily: "monsterratBold",
            }}
          >
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderButton2() {
    return (
      <View style={{ marginTop: SIZES.padding, flexDirection: "row" }}>
        <Text
          style={{
            color: COLORS.darkgray,
            ...FONTSIZES.body4,
            fontFamily: "monsterratBold",
          }}
        >
          {" "}
          ALREADY MADE AN ACCOUNT?{" "}
        </Text>
        <TouchableOpacity
          style={{
            justifyContent: "center",
          }}
          onPress={() => {
            console.log("Going to LogIn");
            navigation.navigate("LogIn");
          }}
        >
          <Text
            style={{
              color: COLORS.secondary,
              ...FONTSIZES.body4,
              fontFamily: "monsterratBold",
            }}
          >
            {" "}LOGIN→
          </Text>
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
      fontFamily: "latoRegular",
      color: COLORS.black,
      ...FONTSIZES.body3,
    },
    subHeading: {
      fontFamily: "monsterratBold",
      color: COLORS.gray,
      ...FONTSIZES.body3,
    },
  });

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        paddingHorizontal: 40,
      }}
    >
      {renderHeader()}
      {renderForm()}
      {renderButton()}
      {renderButton2()}
    </ScrollView>
  );
};

export default SignUp;
