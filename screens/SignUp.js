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

import logo from "../assets/images/bet-05.svg";

import { COLORS, SIZES, FONTS } from "../constants/index";

const SignUp = ({ navigation }) => {
  const [showPassword, setShowPassword] = React.useState(false);

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
        <View style={{ marginTop: SIZES.padding * 2 }}>
          <Text style={styles.subHeading}>PASSSWORD</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            placeholderTextColor={COLORS.white}
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
        <View style={{ marginTop: SIZES.padding * 2 }}>
          <Text style={styles.subHeading}>RETYPE PASSSWORD</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            placeholderTextColor={COLORS.white}
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
      <View style={{ marginTop: SIZES.padding * 3 }}>
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
          <Text style={{ color: COLORS.white, ...FONTS.body3 }}>SIGN UP</Text>
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
      {renderForm()}
      {renderButton()}
      </View>
  );
};

export default SignUp;
