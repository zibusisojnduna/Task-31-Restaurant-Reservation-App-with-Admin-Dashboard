import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantList from "./src/screens/restaurantList";
import ReservationForm from "./src/screens/reservationForm";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Restaurants" component={RestaurantList} />
        <Stack.Screen name="ReservationForm" component={ReservationForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
