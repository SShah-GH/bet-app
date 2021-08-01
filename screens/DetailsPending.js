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

import { COLORS, SIZES, FONTS } from "../constants/index";

const DetailsPending = ({ navigation }) => {
    function renderHeader() {
        return (
            <View style={{
                marginTop: 50,
                flexDirection:"row",
                justifyContent:"space-between",
                }}
                > 
                <Text
                style={
                  styles.grayheader
                }
                >
                BET Details
                </Text>
                <Image
                /*change to icon*/
                  source={logo}
                  resizeMode="contain"
                 style={{
                    height: 24,
                    width: 24
                  }}
              />
            </View>
        );
    }

    function renderStatus(){
        return
    }
  
    function renderValue(){
        return
    }

    function renderDetails(){
        return
    }

    function renderButtonWon(){
        return
    }

    function renderButtonLost(){
        return
    }

    function renderButtonClose(){
        return
    }

    function renderInfo(){
        return
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
        grayheader: {
            fontSize: 24, 
            lineHeight: 29, 
            fontWeight:"bold",
            color: COLORS.gray2
            },
        betActionText: {
          fontSize: 24, 
          lineHeight: 29, 
          color: COLORS.gray2
          },
        greenButton: {
          height: 50,
          backgroundColor: COLORS.primary,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center"
        },
        whiteButton: {
          height: 50,
          backgroundColor: COLORS.white,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
          borderColor: COLORS.primary,
          borderWidth: 2
        },
        greenButtonText: {
          color: COLORS.white,
          fontSize: 16, 
          lineHeight: 22, 
          fontWeight:"bold" 
        },
        whiteButtonText: {
          color: COLORS.primary,
          fontSize: 16, 
          lineHeight: 22, 
          fontWeight:"bold" 
        }  
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
          {renderStatus()}
          {renderValue()}
          {renderDetails()}
          {renderButtonWon()}
          {renderButtonLost()}
          {renderButtonClose()}
          {renderInfo()}
          </View>
    );
};
  
export default DetailsPending;
  