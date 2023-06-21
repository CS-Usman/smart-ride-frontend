import React from "react";
import { TextInput, StyleSheet, View, Image } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
const Field = (props) => {
  return <TextInput {...props} style={styles.fieldStyle}></TextInput>;
};

export const SearchField = (props) => {
  return (
    <View style={styles.searchFieldContainer}>
      <Image
        source={require("../../assets/images/search.png")}
        style={{ height: 20, width: 15 }}
      />
      <TextInput
        {...props}
        style={styles.searchFieldStyle}
        placeholder="   Search Contact ..."
      ></TextInput>
    </View>
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

  searchFieldContainer: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 40,
    alignItems: "center",
    paddingHorizontal: responsiveHeight(1),
  },
  searchFieldStyle: {
    paddingHorizontal: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
  },
});

export default Field;
