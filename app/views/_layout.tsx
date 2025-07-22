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
              borderTopWidth: 0,
            },
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#888",
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              tabBarLabel: "",
              tabBarIcon: () => (
                <Image
                  source={{ uri: "https://i.pinimg.com/736x/43/8c/dd/438cdde430a3926d0a8b29403016688e.jpg" }}
                  className="w-8 h-8 mt-2"
                />
              ),
            }}
          />
          <Tabs.Screen
            name="boss/index"
            options={{
              href: null,
            }}
          />
          <Tabs.Screen
            name="boss/boss_details/index"
            options={{
              href: null,
            }}
          />
        </Tabs>
      </View>
    </View>
  );
}