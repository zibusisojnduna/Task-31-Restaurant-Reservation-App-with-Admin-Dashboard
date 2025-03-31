import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { registerUser } from "../api/auth";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await registerUser(name, email, password);
      Alert.alert("Success", "Registration successful! Please log in.");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Error", "Registration failed.");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>Register</Text>
      <TextInput placeholder="Full Name" value={name} onChangeText={setName} style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} keyboardType="email-address" />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} secureTextEntry />
      <Button title="Register" onPress={handleRegister} />
      <Text style={{ marginTop: 10 }} onPress={() => navigation.navigate("Login")}>
        Already have an account? Login
      </Text>
    </View>
  );
};

export default RegisterScreen;
