import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";

import CheckBox from "expo-checkbox";
import * as Contacts from "expo-contacts";

import { AddToEmergencyContactBtn } from "../../components/Button";
import { SearchField } from "../../components/TextInput";
import CustomText from "../../components/CustomText";
import ContactLoadingPopup from "../../components/EmergencyContactLoadingPopup";
const SearchContactScreen = (props) => {
  const [searchText, setSearchText] = useState("");
  const [contactsData, setContactsData] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { userData } = props.route.params;

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 1) {
          setContactsData(data);
          setFilteredContacts(data);
        }
      }
      setLoading(false);
    })();
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = contactsData.filter((contact) =>
      contact.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  const handleContactSelection = (contactId) => {
    const updatedContacts = filteredContacts.map((contact) =>
      contact.id === contactId
        ? { ...contact, isSelected: !contact.isSelected }
        : contact
    );
    setFilteredContacts(updatedContacts);
  };

  const handleAddToEmergencyContacts = () => {
    console.log("Conatct btn click");
    const selectedContacts = filteredContacts.filter(
      (contact) => contact.isSelected
    );
    setEmergencyContacts((prevEmergencyContacts) => [
      ...prevEmergencyContacts,
      ...selectedContacts,
    ]);
    props.navigation.navigate("ConfirmationScreen", {
      userData: userData,
      emergencyContacts: [...emergencyContacts, ...selectedContacts],
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      <CustomText label={item.name} style={styles.contactName} />
      <CheckBox
        value={item.isSelected}
        onValueChange={() => handleContactSelection(item.id)}
        color={filteredContacts ? "#4b3ca7" : undefined}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchField onChangeText={handleSearch} value={searchText} />
      </View>
      <FlatList
        data={filteredContacts}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}-${item.name}`}
        contentContainerStyle={styles.listContainer}
      />

      <AddToEmergencyContactBtn
        btnLabel="Add to Emergency Contacts"
        Press={handleAddToEmergencyContacts}
      />

      {loading && <ContactLoadingPopup />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F9F9F9",
  },
  searchContainer: {
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#FFF",
  },
  searchInput: {
    fontSize: 16,
  },
  listContainer: {
    flexGrow: 1,
  },
  contactItem: {
    flexDirection: "row", // Align text and checkbox horizontally
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  contactName: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchContactScreen;
