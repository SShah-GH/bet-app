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

const DashBoard = ({ navigation }) => {
  function renderHeader() {
    return (

        <View
          style={{
            marginTop: SIZES.margin*5,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.grayheader}>Dashboard</Text>

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
    }
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

export default DashBoard;
