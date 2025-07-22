import "@/app/globals.css";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import React = require("react");

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
              backgroundColor: "#000",
            },
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#888",
          }}
        >
          <Tabs.Screen
            name="/"
            options={{
              tabBarIcon: () => (
                <Image
                  source={{ uri: "https://logos-world.net/wp-content/uploads/2023/09/Elden-Ring-Logo.png" }}
                  className="w-5 h-5"
                />
              ),
            }}
          />
          <Tabs.Screen
            name="boss/boss_menu"
            options={{
              href: null,
            }}
          />
          <Tabs.Screen
            name="boss/boss_details"
            options={{
              href: null,
            }}
          />
        </Tabs>
      </View>
    </View>
  );
}