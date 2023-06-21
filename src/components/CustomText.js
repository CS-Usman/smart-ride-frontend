import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";

import * as Font from "expo-font";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const CustomText = ({ label, style }) => {
  // const [fontLoaded, setFontLoaded] = useState(false);
  // useEffect(() => {
  //   const loadCustomFonts = async () => {
  //     await Font.loadAsync({
  //       "DarkerGrotesque-Black": require("../../assets/fonts/DarkerGrotesque-Black.ttf"),
  //       "DarkerGrotesque-Bold": require("../../assets/fonts/DarkerGrotesque-Bold.ttf"),
  //       "DarkerGrotesque-ExtraBold": require("../../assets/fonts/DarkerGrotesque-ExtraBold.ttf"),
  //       "DarkerGrotesque-Light": require("../../assets/fonts/DarkerGrotesque-Light.ttf"),
  //       "DarkerGrotesque-Medium": require("../../assets/fonts/DarkerGrotesque-Medium.ttf"),
  //       "DarkerGrotesque-Regular": require("../../assets/fonts/DarkerGrotesque-Regular.ttf"),
  //       "DarkerGrotesque-SemiBold": require("../../assets/fonts/DarkerGrotesque-SemiBold.ttf"),
  //     });
  //   };
  //   setFontLoaded(true);
  //   loadCustomFonts();
  // }, []);
  // if (!fontLoaded) {
  //   return null; // or show a placeholder text
  // }

  return <Text style={[styles.text, style]}>{label}</Text>;
};

const styles = StyleSheet.create({
  text: {
    // fontFamily: "DarkerGrotesque-Regular",
    fontSize: responsiveFontSize(2),
  },
});

export default CustomText;
