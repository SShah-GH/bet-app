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
                height: 38,
                width: 38,
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
 
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  function renderContacts() {
    const renderItem = ({ item }) => <Item title={item.title} />;
    return (

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    );
  }

  const styles = StyleSheet.create({
    item: {
      backgroundColor: COLORS.transparent,
      padding: 15,
      marginHorizontal: 0,
    },
    title: {
      fontSize: 32,
    },
    header: {
      ...FONTSIZES.body2,
      fontFamily: "monsterratBold",
      color: COLORS.white,
    },
  });

  return (
    <View style={{
      backgroundColor: COLORS.primary,
    }}>
      <View style={{
        paddingHorizontal:40,
        backgroundColor:COLORS.primary
      }}>
       {renderHeader()} 
      </View>
      <ScrollView contentContainerStyle={{
        flexGrow:1,
        borderRadius:30,
        backgroundColor:COLORS.white,
        height: SIZES.height  

      }}>
      {renderContacts()}
      </ScrollView>
    </View>
  );
};

export default BetContact;
