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

/*I noticed a lot of the font sizes 
and colors didn't match up. Wasn't sure the 
equivalent to span for the "LOGIN" part so it
stays inline. Wasn't sure navigation for Send Email*/

const Recovery = ({ navigation }) => {
  // const [showPassword, stShowPassword] = React.useState(false);

  function renderHeader() {
    return (
      <View>
        <Text
          style={{
            color: COLORS.primary,
            ...FONTSIZES.largeTitle,
            fontFamily: "monsterratBold",
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
          <Text
            style={{
              color: COLORS.white,
              ...FONTSIZES.body3,
              fontFamily: "monsterratBold",
            }}
          >
            SEND EMAIL
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
            fontFamily:"monsterratBold",
          }}
        >
          {" "}
          REMEMBER YOUR PASSWORD?{" "}
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
            LOGIN???
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
      color: COLORS.gray,
      ...FONTSIZES.body3,
      fontFamily:"monsterratBold",
    },
    footer: {
      color: COLORS.gray,
      ...FONTSIZES.body3,
      fontWeight: "bold",
    },
  });

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
      {renderButton2()}
    </ScrollView>
  );
};

export default Recovery;
