import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import SplashScreen from "./src/screens/SplashScreen/SplashScreen";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen";
import UserProfileScreen from "./src/screens/UserProfileScreen/UserProfileScreen";
import PermissionsScreen from "./src/screens/RegisterScreen/Permissions";
import AddContactScreen from "./src/screens/RegisterScreen/AddContactScreen";
import SearchContactScreen from "./src/screens/RegisterScreen/ContactScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PermissionsScreen"
          component={PermissionsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddContactsScreen"
          component={AddContactScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContactsScreen"
          component={SearchContactScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserProfileScreen"
          component={UserProfileScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
