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

const LogIn = ({ navigation }) => {
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
          LOG IN
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

  function renderForm() {
    return (
      <View>
        {/* Email */}
        <View style={{ marginTop: SIZES.margin }}>
          <Text style={styles.subHeading}>EMAIL</Text>
          <TextInput
            style={styles.textInput}
            placeholder="johndoe@gmail.com"
            placeholderTextColor={COLORS.gray}
            selectionColor={COLORS.gray}
          />
        </View>

        {/* Password */}
        <View style={{ marginTop: SIZES.margin }}>
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
      </View>
    );
  }

  function renderButton() {
    return (
      <View style={{ marginTop: SIZES.margin * 2 }}>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: COLORS.secondary,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            console.log("Logged In");
            navigation.navigate("Home");
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.body3 }}>LOG IN</Text>
        </TouchableOpacity>
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
      {renderForm()}
      {renderButton()}
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
    color: COLORS.darkgray,
    ...FONTS.body3,
    fontWeight: "bold",
  },
});

export default LogIn;
