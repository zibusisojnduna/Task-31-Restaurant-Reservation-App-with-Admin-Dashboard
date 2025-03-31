import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { createReservation } from "../api/reservation";

const ReservationForm = ({ route }) => {
  const { restaurantId } = route.params;
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleReservation = async () => {
    try {
      await createReservation(restaurantId, date, time);
      Alert.alert("Success", "Reservation created successfully!");
    } catch (error) {
      Alert.alert("Error", "Failed to create reservation.");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Make a Reservation</Text>
      <TextInput placeholder="Date (YYYY-MM-DD)" value={date} onChangeText={setDate} style={{ borderWidth: 1, padding: 10, marginVertical: 10 }} />
      <TextInput placeholder="Time (HH:MM AM/PM)" value={time} onChangeText={setTime} style={{ borderWidth: 1, padding: 10, marginVertical: 10 }} />
      <Button title="Reserve" onPress={handleReservation} />
    </View>
  );
};

export default ReservationForm;
