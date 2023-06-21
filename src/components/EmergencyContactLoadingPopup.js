import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Modal, ActivityIndicator } from "react-native";
import CustomText from "./CustomText";
const ContactLoadingPopup = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust the timeout value as needed
  }, []);

  return (
    <Modal transparent visible={isLoading}>
      <View style={styles.container}>
        <View style={styles.popup}>
          <ActivityIndicator size="large" color="#4b3ca7" />
          <CustomText label={"Loading contacts ..."} style={styles.text} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  popup: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ContactLoadingPopup;
