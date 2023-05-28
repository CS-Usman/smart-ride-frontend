import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon, FontAwesome } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width - 30;
const data = {
  labels: ["week1", "week2", "week3", "week4", "week5", "week6"],
  datasets: [
    {
      data: [20, 45, 80, 43, 62, 27],
    },
  ],
  legend: ["Distance Traveled"], // optional
};

const Item = ({ item }) => (
  <View>
    <Text>{item.title}</Text>
    <Text>{item.day}</Text>
  </View>
);

const routesList = [
  { id: 1, title: "Islamabad to Wah", day: "Friday" },
  { id: 2, title: "Lahore to Islamabad", day: "Wednesday" },
  { id: 3, title: "Karachi to Multan", day: "Tuesday" },
];

chartConfig = {
  backgroundColor: "#a2a2db",
  backgroundGradientFrom: "#4B3CA7",
  backgroundGradientTo: "#8577AA",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#4b3ca7",
  },
};

const HomeScreen = (props) => {
  return (
    <ImageBackground
      source={require("../../../assets/images/back.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 40,
          alignItems: "center",
          paddingHorizontal: 40,
        }}
      >
        <FontAwesome
          name="bars"
          size={30}
          color="#a2a2db"
          style={{ width: 20 }}
        />
        <TouchableOpacity
          onPress={() => props.navigation.navigate("UserProfileScreen")}
        >
          <FontAwesome
            name="user"
            size={33}
            color="#a2a2db"
            style={{ marginLeft: 230 }}
          />
        </TouchableOpacity>
      </View>

      {/* Graph Section  */}
      <View style={[styles.section, styles.graphSection]}>
        <Text style={styles.sectionTitle}>Motorcycle Riding Activity</Text>
        <LineChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          yAxisSuffix=" km"
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      {/* Features Section */}
      <View style={[styles.section, styles.featureSection]}>
        <Text style={styles.sectionTitle}>Features</Text>
        <View style={styles.featureContainer}>
          <TouchableOpacity style={[styles.feature, { elevation: 5 }]}>
            <FontAwesome name="microphone" size={24} color="#ffffff" />
            <Text style={styles.featureText}>Voice {"\n"}Assistant</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.feature, { elevation: 5 }]}>
            <FontAwesome name="bluetooth" size={24} color="#ffffff" />
            <Text style={styles.featureText}>Bluetooth</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.feature, { elevation: 5 }]}>
            <FontAwesome name="check" size={24} color="#ffffff" />
            <Text style={styles.featureText}>Strap{"\n"} Closed</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.offlineButton}>
          <FontAwesome name="wifi" size={24} color="#ffffff" />
          <Text style={styles.space}></Text>
          <Text style={styles.offlineText}>Offline Mode</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  gradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "14%",
    borderRadius: 10,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: "#ffffff",
  },
  section: {
    width: "100%",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  featureSection: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  featureContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  feature: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    elevation: 5,
    backgroundColor: "#4b3ca7",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
  },
  featureText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  offlineButton: {
    backgroundColor: "#4b3ca7",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: "100%",
    borderRadius: 8,
    marginTop: 20,
    elevation: 5,
  },
  offlineText: {
    color: "#ffffff",
  },
  space: {
    width: 10,
  },
  routeContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    elevation: 5,
  },
});

export default HomeScreen;
