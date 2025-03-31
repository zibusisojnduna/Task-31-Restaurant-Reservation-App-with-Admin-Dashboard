import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to Restaurant Reservations</Text>
      <Button title="Book a Table" onPress={() => navigation.navigate("Reservation")} />
    </View>
  );
};

export default HomeScreen;
