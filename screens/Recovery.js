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


const Recovery = ({ navigation }) => {
   // const [showPassword, setShowPassword] = React.useState(false);
  
    function renderHeader() {
        return (
            <View>
                <Text
                style={{
                    color: COLORS.primary,
                    ...FONTS.largeTitle,
                }}
                >
                RECOVERY
                </Text>
                <View
                /* Line */
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
            {/* Email */}
            <View style={{ marginTop: SIZES.padding }}>
            <Text style={styles.subHeading}>ACCOUNT EMAIL</Text>
            <TextInput
                style={styles.textInput}
                placeholder="johndoe@gmail.com"
                placeholderTextColor={COLORS.gray}
                selectionColor={COLORS.gray}
            />
            </View>
        </View>
    );
  }

  function renderButton() {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: COLORS.primary,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            console.log("Recovering");
            navigation.navigate("Home");
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.body3 }}>SEND EMAIL</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderButton2() {
    return (
      <View style={{ marginTop: SIZES.padding}}>
        <Text style={styles.footer}>REMEMBER YOUR PASSWORD?</Text>
        <TouchableOpacity
          style={{
            height: 0,
            backgroundColor: COLORS.white,
            borderRadius: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            console.log("Going to LogIn");
            navigation.navigate("LogIn");
          }}
        >
          <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>LOGIN</Text>
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
    footer: {
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
      {renderButton2()}
      </View>
  );
};

export default Recovery;
