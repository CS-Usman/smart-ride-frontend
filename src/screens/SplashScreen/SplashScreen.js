import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Alert,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import NetInfo from "@react-native-community/netinfo";

const SplashScreen = ({ navigation }) => {
  const [isConnected, setIsConnected] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    if (isConnected) {
      const timeout = setTimeout(() => {
        console.log("Hello");
        navigation.replace("LoginScreen");
      }, 3000);
    } else {
      Alert.alert("Internet Status", "You are not connected to the internet");
    }
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <ImageBackground
      source={require("../../../assets/images/back.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.contentContainer}>
        <Image
          source={require("../../../assets/images/helmet-icon.png")}
          style={styles.icon}
        />
        <Text style={styles.subText}>
          Smart Ride: Stay Safe on Every Journey
        </Text>
        <View style={styles.networkBox}>
          {isConnected ? (
            <View>
              {/* <FontAwesome name="wifi" size={20} /> */}
              <Text style={styles.text}>Connected to the Internet</Text>
            </View>
          ) : (
            <View>
              {/* <Icon name="exclamation-circle" size={20} /> */}
              <Text style={styles.text}>No Internet Connection</Text>
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  icon: {
    width: 130,
    height: 130,
    borderRadius: 70,
    marginBottom: 20,
    backgroundColor: "transparent", // Set the background color of the image to transparent
  },
  subText: {
    color: "#ffff",
    textAlign: "center",
    fontSize: responsiveFontSize(2),
    fontWeight: "500",
  },
  networkBox: {
    bottom: responsiveHeight(5),
    position: "absolute",
    padding: 10,
    backgroundColor: "#ffff",
    elevation: 1,
    width: responsiveWidth(90),
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    fontSize: responsiveFontSize(2),
    fontWeight: "500",
  },
});

export default SplashScreen;
