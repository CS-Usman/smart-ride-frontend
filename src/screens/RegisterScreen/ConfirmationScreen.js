import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";

import * as SMS from "expo-sms";
import sendSMS from "../../utils/sendConfirmationSMS";
import Btn from "../../components/Button";

export default ConfirmationScreen = (props) => {
  const { emergencyContacts } = props.route.params;
  const [isAvailable, setAvailable] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [data, setData] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    const { userData } = props.route.params;
    const formattedContacts = emergencyContacts.map(
      ({ name, phoneNumbers }) => {
        const { number } = phoneNumbers[0];
        return { name, number };
      }
    );
    setContacts(formattedContacts);
    const checkSMSAvailability = async () => {
      const isAvailable = await SMS.isAvailableAsync();
      setAvailable(isAvailable);
    };
    checkSMSAvailability();
    setData({ ...userData, emergencyContacts: formattedContacts });
  }, []);
  console.log(data);

  const handleClick = async () => {
    const response = await sendSMS(contacts);
    if (response) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "LoginScreen" }],
        })
      );
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      <Text>{item.name} </Text>
      <Text> {item.number} </Text>
    </View>
  );

  return (
    <ImageBackground
      source={require("../../../assets/images/back2.png")}
      style={{ height: "100%", width: "100%" }}
    >
      <View style={styles.container}>
        <Text
          style={{
            color: "#ffff",
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 40,
          }}
        >
          Edit profile
        </Text>
        <View style={styles.topView}>
          <View style={styles.contactItem}>
            <Text style={styles.userData}>Name : {data.name}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.userData}>Username : {data.username}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.userData}>
              Phone Number: {data.phoneNumber}
            </Text>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.heading}>Emergency Contacts</Text>
          <FlatList
            style={styles.listContainer}
            data={contacts}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}-${item.name}`}
          />
        </View>
        <Btn btnLabel={"Click to edit profile"} Press={handleClick} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    paddingTop: 80,
  },
  topView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 23,
    elevation: 3,
    marginBottom: 26,
  },
  bottomView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 23,
    elevation: 3,
    marginBottom: 26,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  userData: {
    fontSize: 18,
    marginBottom: 4,
  },
  emergencyContact: {
    fontSize: 18,
    marginBottom: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  listContainer: {
    flexGrow: 0,
  },
  contactItem: {
    flexDirection: "row", // Align text and checkbox horizontally
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  contactName: {
    flex: 1,
    fontSize: 16,
  },
});
