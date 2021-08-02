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

const LogIn = ({ navigation }) => {
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
          LOGIN
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
            backgroundColor: COLORS.primary,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: SIZES.margin / 3,
          }}
          onPress={() => {
            console.log("Logged In");
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
            LOGIN
          </Text>
        </TouchableOpacity>

        <View style={{marginBottom:SIZES.margin}}>
          <Text
            style={{
              fontFamily: "monsterratBold",
              color: COLORS.secondary,
              textAlign: "right",
              fontSize: 10,
            }}
            onPress={() => {
              console.log("Forgot Password");
              navigation.navigate("Recovery");
            }}
          >
            FORGOT YOUR PASSWORD?
          </Text>
        </View>

        <Text style={(styles.subHeading)}>
          DON'T HAVE AN ACCOUNT?
        </Text>

        <TouchableOpacity
          style={{
            marginTop: SIZES.margin / 2,
            height: 50,
            backgroundColor: COLORS.secondary,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            console.log("Ready To Sign Up");
            navigation.navigate("SignUp");
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

  return (
    <ScrollView
    contentContainerStyle={{ 
      flexGrow: 1, 
      justifyContent: "center" ,
      paddingHorizontal: 40,
    }}
  >
      {renderHeader()}
      {renderForm()}
      {renderButton()}
    </ScrollView>
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
    fontFamily: "latoRegular",
    color: COLORS.black,
    ...FONTSIZES.body3,
  },
  subHeading: {
    color: COLORS.darkgray,
    ...FONTSIZES.body3,
    fontFamily: "monsterratBold",
  },
});

export default LogIn;
