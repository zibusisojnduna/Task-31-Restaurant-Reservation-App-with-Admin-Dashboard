import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { fetchRestaurants } from "../api/restaurant";

const RestaurantList = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const data = await fetchRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setLoading(false);
      }
    };

    getRestaurants();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetails", { restaurantId: item._id })}>
            <View style={{ padding: 15, backgroundColor: "#f8f8f8", marginVertical: 5, borderRadius: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
              <Text>{item.location}</Text>
              <Text>Cuisine: {item.cuisine}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RestaurantList;
