import React from "react";
import { TextInput, StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={styles.fieldStyle}
      placeholderTextColor="#4b3ca7"
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  fieldStyle: {
    borderRadius: 100,
    color: "#4b3ca7",
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(1),
    width: responsiveWidth(75),
    backgroundColor: "rgb(220,220, 220)",
    marginVertical: responsiveHeight(1.2),
  },
});

export default Field;
