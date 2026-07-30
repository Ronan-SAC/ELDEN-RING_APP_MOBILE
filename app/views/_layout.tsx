import "@/app/globals.css";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import React = require('react');

export default function RootLayout() {
  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <View className="p-5 items-center border-b border-yellow-900/30 bg-black/50">
        <Image
          source={{ uri: "https://logos-world.net/wp-content/uploads/2023/09/Elden-Ring-Logo.png" }}
          className="w-full h-16"
          resizeMode="contain"
        />
      </View>

      <View className="flex-1">
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#050505",
              borderTopWidth: 1,
              borderTopColor: "rgba(113, 63, 18, 0.5)", // yellow-900/50
            },
            tabBarActiveTintColor: "#eab308",
            tabBarInactiveTintColor: "#52525b",
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
            name="BossListView"
            options={{
              href: null,
            }}
          />
          <Tabs.Screen
            name="BossDetailsView"
            options={{
              href: null,
            }}
          />
          <Tabs.Screen
            name="ItemsView"
            options={{
              href: null,
            }}
          />
        </Tabs>
      </View>
    </View>
  );
}