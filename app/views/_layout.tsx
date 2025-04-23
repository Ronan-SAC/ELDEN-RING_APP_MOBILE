import { Stack, Tabs } from "expo-router";
import "@/app/globals.css";
import { View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For the Home icon

export default function RootLayout() {
  return (
    <View className="flex-1 bg-black">
      <View className="p-5 items-center">
        <Image
          source={{ uri: "https://logos-world.net/wp-content/uploads/2023/09/Elden-Ring-Logo.png" }}
          className="w-full h-20"
        />
      </View>
      

      <View className="flex-1">
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#000", // Match the black background
            },
            tabBarActiveTintColor: "#fff", // White for active tab icon
            tabBarInactiveTintColor: "#888", // Gray for inactive (if any)
          }}
        >
          <Tabs.Screen
            name="menu"
            options={{
              tabBarLabel: "", // Label for the tab
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} /> // Home icon
              ),
            }}
          />
          <Tabs.Screen
            name="boss/boss_menu"
            options={{
              href: null, // Hide from tab bar
            }}
          />
          <Tabs.Screen
            name="boss/boss_details"
            options={{
              href: null, // Hide from tab bar
            }}
          />
        </Tabs>
      </View>
    </View>
  );
}