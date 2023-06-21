import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { LineChart, PieChart } from "react-native-chart-kit";
import styles from "./HomeStyles"; //
import {
  initializeBluetooth,
  cleanupBluetooth,
} from "../../utils/BluetoothConnection";

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

const speedData = [
  {
    population: 20,
    color: "#c9c5e5",
    name: "0-20 mph",
    legendFontColor: "#7F7F7F",
  },
  {
    population: 15,
    color: "#a59ed3",
    name: "40-60 mph",
    legendFontColor: "#7F7F7F",
  },
  {
    population: 30,
    color: "#5d50b0",
    name: "20-40 mph",
    legendFontColor: "#7F7F7F",
  },
  {
    population: 10,
    color: "#3c3086",
    name: "60-80 mph",
    legendFontColor: "#7F7F7F",
  },
  {
    population: 25,
    color: "#261e54",
    name: "80+ mph",
    legendFontColor: "#7F7F7F",
  },
];

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
  // useEffect(() => {
  //   initializeBluetooth();
  //   return cleanupBluetooth;
  // }, []);
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
      <Text style={styles.sectionTitle}>Motorcycle Riding Activity</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 15,
          paddingVertical: 10, // Adjust the value to change the spacing
          height: 250,
        }}
      >
        <LineChart
          data={data}
          width={screenWidth}
          height={200}
          chartConfig={chartConfig}
          yAxisSuffix=" km"
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <PieChart
          data={speedData}
          width={screenWidth}
          height={200}
          chartConfig={chartConfig}
          accessor={"population"}
          paddingLeft={"15"}
        />
      </ScrollView>

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
          <TouchableOpacity style={styles.feature}>
            <FontAwesome name="wifi" size={24} color="#ffffff" />
            <Text style={styles.space}></Text>
            <Text style={styles.featureText}>Offline Mode</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
