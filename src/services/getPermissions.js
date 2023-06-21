import { Platform } from "react-native";
import * as Contacts from "expo-contacts";
import * as Permissions from "expo-permissions";

export const ContactAccessPermission = async () => {
  const { status } = await Permissions.askAsync(Permissions.CONTACTS);
  return status === "granted" ? true : false;
};

export const LocationAccessPermission = async () => {
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  return status === "granted" ? true : false;
};

export const FileStoragePermission = async () => {
  if (Platform.OS === "android") {
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    return status === "granted" ? true : false;
  } else {
    return false;
  }
};
