import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Button,
} from "react-native";
import CheckBox from "expo-checkbox";
// Import the Checkbox component

import * as Contacts from "expo-contacts";

const SearchContactScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [contactsData, setContactsData] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  console.log(emergencyContacts);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setContactsData(data);
          setFilteredContacts(data);
        }
      }
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
    const selectedContacts = filteredContacts.filter(
      (contact) => contact.isSelected
    );
    setEmergencyContacts((prevEmergencyContacts) => [
      ...prevEmergencyContacts,
      ...selectedContacts,
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      <Text style={styles.contactName}>{item.name}</Text>
      <CheckBox
        value={item.isSelected}
        onValueChange={() => handleContactSelection(item.id)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>
      <FlatList
        data={filteredContacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <Text>Emergency Contacts:</Text>
      <FlatList
        data={emergencyContacts}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        title="Add to Emergency Contacts"
        onPress={handleAddToEmergencyContacts}
      />
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
    marginBottom: 16,
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
    alignItems: "center", // Center items vertically
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  contactName: {
    flex: 1, // Take up remaining space
    fontSize: 16,
  },
});

export default SearchContactScreen;
