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
import searchLogo from "../assets/images/search-logo.png";
import trophyGray from "../assets/images/trophy-gray.png"
import logoGray from "../assets/images/logo-gray.png"
import trophyIcon from "../assets/images/trophy.png";


/* need to change image. Change BetReceiver, BetAmount, BetAction
and margin accordingly*/

const Notifications = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: SIZES.margin * 5,
          marginBottom: SIZES.margin * 2,
          marginHorizontal: 30,
        }}
      >
        <Text style={styles.header}>NOTIFICATIONS</Text>
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
              source={searchLogo}
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
      text: "BET WON VERSUS SAM:",
      amount: "$30.00",
      result: "won",
    },
    {
      id: "2",
      text: "BET WON VERSUS SAM:",
      amount: "$12.89",
      result: "lost",
    },
    {
      id: "3",
      text: "BET WON VERSUS SAM:",
      amount: "$15.00",
      result: "won",
    },
    {
      id: "4",
      text: "BET WON VERSUS SAM:",
      amount: "$18.00",
      result: "won",
    },
    {
      id: "5",
      text: "BET WON VERSUS SAM:",
      amount: "$11.50",
      result: "won",
    },
    {
      id: "6",
      text: "BET WON VERSUS SAM:",
      amount: "$12.30",
      result: "won",
    },
    {
      id: "7",
      text: "BET WON VERSUS SAM:",
      amount: "$14.00",
      result: "won",
    },
    {
      id: "8",
      text: "BET WON VERSUS SAM:",
      amount: "$20.00",
      result: "won",
    },
    {
      id: "9",
      text: "BET WON VERSUS SAM:",
      amount: "$20.00",
      result: "won",
    },
  ];

  const Item = ({ amount, result, text }) => (
    <View style={styles.itemContainer}>
      <Text style={{
        marginLeft:20,
        fontFamily: "monsterratBold",
        color: COLORS.gray2,
        }}>{text}</Text>

      <View style={styles.item}>
        <Text style={result === "won" ? styles.amountWon : styles.amountLost}>
          {amount}
        </Text>
 
        <TouchableOpacity
          style={{
            height: 45,
            backgroundColor: COLORS.primary,
            borderRadius: 10,
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
          onPress={() => {
            console.log("View Bet");
            // navigation.navigate("Home");
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTSIZES.body4,
              fontFamily: "monsterratBold",
            }}
          >
            VIEW BET
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  function renderContacts() {
    const renderItem = ({ item }) => (
      <Item amount={item.amount} result={item.result} text={item.text} />
    );
    return (
      <View style={{ flexGrow: 1 }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListFooterComponent={
            <View style={{ height: 0, marginBottom: 200 }}></View>
          }
        />
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: SIZES.width,
          alignItems: "center",
          paddingVertical: 15,
          shadowOffset: {
            width: 10  ,
            height: 10,
          },
          shadowOpacity: 0.9,
          elevation: 2,
        }}
      >
    
          <Text style={styles.grayheader}>$32</Text>
   

        <TouchableOpacity
          onPress={() => {
            console.log("To Dashboard");
            navigation.navigate("DashBoard");
          }}
        >
          <Image
            /*change to icon*/
            source={logoGray}
            resizeMode="contain"
            style={{
              height: 60,
              width: 60,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("To LeadeBoard");
            navigation.navigate("LeaderBoard");
          }}
        >
          <Image
            /*change to icon*/
            source={trophyGray}
            resizeMode="contain"
            style={{
              height: 34,
              width: 34,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    item: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: COLORS.white,
      marginVertical: 5,
      paddingHorizontal: 20,
    },
    itemContainer: {
      backgroundColor: COLORS.white,
      paddingVertical: 20,
      marginVertical: 5,
      marginHorizontal: 30,
      borderRadius: 10,
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowOpacity: 0.8,
      elevation: 3,
    },
    amountWon: {
      ...FONTSIZES.body1,
      fontFamily: "monsterratBold",
      color: COLORS.primary,
    },
    amountLost: {
      ...FONTSIZES.body1,
      fontFamily: "monsterratBold",
      color: COLORS.red2,
    },
    header: {
      ...FONTSIZES.body2,
      fontFamily: "monsterratBold",
      color: COLORS.gray2,
    },
    grayheader: {
      ...FONTSIZES.body2,
      fontFamily: "monsterratBold",
      color: COLORS.gray2,
    },
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {renderHeader()}

      {renderContacts()}
      <View style={{
        position: 'absolute',
        bottom:0,
        backgroundColor:COLORS.white,
      }}>
      {renderFooter()}
      </View>
    </View>
  );
};

export default Notifications;
