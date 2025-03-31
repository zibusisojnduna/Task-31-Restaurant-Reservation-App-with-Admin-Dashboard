import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { loginUser } from "../api/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await loginUser(email, password);
      Alert.alert("Success", "Logged in successfully!");
      navigation.replace("Profile"); // Redirect to Profile screen after login
    } catch (error) {
      Alert.alert("Error", "Login failed. Please check your credentials.");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} keyboardType="email-address" />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Text style={{ marginTop: 10 }} onPress={() => navigation.navigate("Register")}>
        Don't have an account? Register
      </Text>
    </View>
  );
};

export default LoginScreen;
