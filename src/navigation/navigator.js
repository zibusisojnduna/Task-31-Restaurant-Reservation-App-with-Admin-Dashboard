import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./src/screens/registerScreen";
import LoginScreen from "./src/screens/loginScreen";
import ProfileScreen from "./src/screens/profileScreen";
import RestaurantList from "./src/screens/restaurantList";
import ReservationForm from "./src/screens/reservationForm";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Restaurants" component={RestaurantList} />
        <Stack.Screen name="ReservationForm" component={ReservationForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
