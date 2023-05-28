import React from "react";
import { Button, View } from "react-native";

const AddContactScreen = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        title="Add Contact"
        onPress={props.navigation.navigate("ContactsScreen")}
      />
    </View>
  );
};

export default AddContactScreen;
