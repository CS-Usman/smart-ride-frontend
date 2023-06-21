import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

import { FontAwesome } from "@expo/vector-icons";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export default function Btn({ btnLabel, Press }) {
  return (
    <TouchableOpacity onPress={Press} style={styles.btnStyle}>
      <Text style={styles.btnTextStyle}>{btnLabel} </Text>
    </TouchableOpacity>
  );
}

export function GoogleBtn({ btnLabel, Press }) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={[styles.btnStyle, { backgroundColor: "#ffff" }]}
    >
      <Text style={[styles.btnTextStyle, { color: "#4b3ca7" }]}>
        {btnLabel} <FontAwesome name="google" size={24} color="#4b3ca7" />
      </Text>
    </TouchableOpacity>
  );
}

export function AcceptBtn({ btnLabel, Press }) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={[styles.btnStyle, { backgroundColor: "#28a745" }]}
    >
      <Text style={[styles.btnTextStyle]}>
        {btnLabel} <FontAwesome name="check" size={24} color="#ffffff" />
      </Text>
    </TouchableOpacity>
  );
}
export function AddToEmergencyContactBtn({ btnLabel, Press }) {
  return (
    <TouchableOpacity onPress={Press} style={styles.emergencyBtnStyle}>
      <Text style={[styles.btnTextStyle]}>{btnLabel}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: "#4b3ca7",
    borderRadius: 100,
    alignItems: "center",
    width: responsiveWidth(55),
    paddingVertical: responsiveHeight(1.5),
    marginVertical: responsiveHeight(1),
  },
  btnTextStyle: {
    color: "#ffff",
    fontSize: responsiveFontSize(2.5),
    fontWeight: "bold",
  },
  emergencyBtnStyle: {
    backgroundColor: "#4b3ca7",
    borderRadius: 100,
    alignItems: "center",
    width: responsiveWidth(90),
    paddingVertical: responsiveHeight(1.5),
    marginVertical: responsiveHeight(1),
  },
});
