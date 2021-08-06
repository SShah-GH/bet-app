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
  SafeAreaView,
} from "react-native";
import { COLORS, SIZES, FONTSIZES } from "../constants/index";
import bellIcon from "../assets/images/bell-icon.png";
import profilePicture from "../assets/images/profile-picture.png";
import logoWhite from "../assets/images/logo-white.png";
import trophyIcon from "../assets/images/trophy.png";
import { render } from "react-dom";

/* need to change image. Change BetReceiver, BetAmount, BetAction
and margin accordingly*/

const BetContact = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: SIZES.margin * 5,
          marginBottom: SIZES.margin * 2,
        }}
      >
        <Text style={styles.header}>SEND A BET</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              console.log("To Dashboard");
              navigation.navigate("DashBoard");
            }}
          >
            <Image
              /*change to icon*/
              source={bellIcon}
              resizeMode="contain"
              style={{
                marginHorizontal: 8,
                height: 30,
                width: 30,
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
              source={profilePicture}
              resizeMode="contain"
              style={{
                height: 40,
                width: 40,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const DATA = [
    {
      id: "1",
      title: "First Item",
    },
    {
      id: "2",
      title: "Second Item",
    },
    {
      id: "3",
      title: "Third Item",
    },
    {
      id: "4",
      title: "Third Item",
    },
    {
      id: "5",
      title: "Third Item",
    },
    {
      id: "6",
      title: "Third Item",
    },
    {
      id: "7",
      title: "Third Item",
    },
    {
      id: "8",
      title: "Third Item",
    },
    {
      id: "9",
      title: "Third Item",
    },
    {
      id: "10",
      title: "Third Item",
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Image
              source={profilePicture}
              resizeMode="contain"
              style={{
                marginHorizontal: 8,
                height: 40,
                width: 40,
              }}
            />
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  function renderSearchBar() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          paddingHorizontal: 40,
          marginBottom: 30,
          marginTop: 30,
        }}
      >
        <Text style={styles.title}>SEND THE BET TO:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Search Contacts or Phone #…"
          placeholderTextColor={COLORS.gray}
          selectionColor={COLORS.gray}
        />
      </View>
    );
  }

  function renderContacts() {
    const renderItem = ({ item }) => <Item title={item.title} />;
    return (
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }

  const styles = StyleSheet.create({
    item: {
      flexDirection:"row",
      backgroundColor: COLORS.transparent,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginHorizontal: 30,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.gray,
    },
    title: {
      ...FONTSIZES.body2,
      fontFamily: "monsterratBold",
      color: COLORS.gray2,
    },
    header: {
      ...FONTSIZES.body2,
      fontFamily: "monsterratBold",
      color: COLORS.white,
    },
    textInput: {
      paddingStart: 20,
      marginTop: 10,
      borderColor: COLORS.gray,
      borderWidth: 1,
      borderRadius: 10,
      height: 50,
      fontFamily: "latoRegular",
      color: COLORS.black,
      ...FONTSIZES.body3,
    },
  });

  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
      }}
    >
      <View
        style={{
          paddingHorizontal: 40,
          backgroundColor: COLORS.primary,
        }}
      >
        {renderHeader()}
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          borderRadius: 30,
          backgroundColor: COLORS.white,
          height: SIZES.height,
        }}
      >
        {renderSearchBar()}
        {renderContacts()}
      </ScrollView>
    </View>
  );
};

export default BetContact;
