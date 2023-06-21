import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Alert,
} from "react-native";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

import { AcceptBtn } from "../../components/Button";
import {
  ContactAccessPermission,
  LocationAccessPermission,
  FileStoragePermission,
} from "../../services/getPermissions";

const { width, height } = Dimensions.get("window");

const PermissionsScreen = (props) => {
  const { userData } = props.route.params;
  const [permissionAccess, setPermissionAccess] = useState(false);

  const handleGrantPermission = async () => {
    const contactAccessGranted = await ContactAccessPermission();
    const locationAccessGranted = await LocationAccessPermission();
    const fileStorageAccessGranted = await FileStoragePermission();

    if (
      contactAccessGranted &&
      locationAccessGranted &&
      fileStorageAccessGranted
    ) {
      props.navigation.navigate("ContactsScreen", { userData: userData });
    } else {
      Alert.alert(
        "  We need your permission to access certain features of the app. \n Please grant the necessary permissions to continue"
      );
    }
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/back2.png")}
      style={{ height: "100%", width: "100%" }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Terms & Conditions</Text>
        <View style={styles.permissionContainer}>
          <Text style={styles.description}>
            We need you to allow for following for providing best experience to
            you{" "}
          </Text>
          <View style={styles.permissionList}>
            <Text style={styles.listItem}>
              {"\u2022"} We need to access your storage for sharing helmet data
              to your mobile app
            </Text>
            <Text style={styles.listItem}>
              {"\u2022"} We need to access your contacts for emergency SOS
            </Text>
            <Text style={styles.listItem}>
              {"\u2022"} We need to access your location for sharing location to
              contacts
            </Text>
          </View>
          <AcceptBtn btnLabel="Allow" Press={handleGrantPermission} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: width,
  },
  title: {
    color: "white",
    fontSize: responsiveFontSize(4.5), // Responsive font size
    fontWeight: "bold",
    marginVertical: responsiveHeight(11), // Responsive margin
  },
  permissionContainer: {
    backgroundColor: "white",
    width: responsiveWidth(100),
    borderTopLeftRadius: 0.28 * width,
    paddingHorizontal: responsiveWidth(6),
    paddingVertical: responsiveHeight(8),
    alignItems: "center",
  },
  description: {
    color: "grey",
    fontSize: responsiveFontSize(2.3), // Responsive font size
    fontWeight: "bold",
    marginBottom: responsiveHeight(5), // Responsive margin
  },
  permissionList: {
    paddingHorizontal: responsiveWidth(3),
  },
  listItem: {
    color: "grey",
    fontSize: responsiveFontSize(2),
    lineHeight: responsiveHeight(4),
    marginBottom: responsiveHeight(3),
  },
});

export default PermissionsScreen;
