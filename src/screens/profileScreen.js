import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logoutUser } from "../api/auth";

const ProfileScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        navigation.replace("Login");
      } else {
        // Simulating fetching user data from token (in real-world apps, fetch from backend)
        setUserEmail("user@example.com");
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    Alert.alert("Logged out", "You have been logged out.");
    navigation.replace("Login");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Profile</Text>
      <Text>Email: {userEmail}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;
