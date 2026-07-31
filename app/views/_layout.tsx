import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from 'react';

const hiddenScreens = [
  "AmmoDetailsView",
  "AmmoListView",
  "ArmorDetailsView",
  "ArmorListView",
  "AshOfWarDetailsView",
  "AshOfWarListView",
  "BossDetailsView",
  "BossListView",
  "ClassDetailsView",
  "ClassListView",
  "CreatureDetailsView",
  "CreatureListView",
  "IncantationDetailsView",
  "IncantationListView",
  "ItemsDetailsView",
  "ItemsListView",
  "LocationDetailsView",
  "LocationListView",
  "NpcDetailsView",
  "NpcListView",
  "ShieldDetailsView",
  "ShieldListView",
  "SorceryDetailsView",
  "SorceryListView",
  "SpiritDetailsView",
  "SpiritListView",
  "TalismanDetailsView",
  "TalismanListView",
  "WeaponDetailsView",
  "WeaponListView",
];

export default function RootLayout() {
  return (
    <View className="flex-1 bg-elden-bg">
      <View className="py-3 px-5 items-center border-b border-elden-line bg-black/50">
        <Image
          source={{ uri: "https://logos-world.net/wp-content/uploads/2023/09/Elden-Ring-Logo.png" }}
          className="w-44 h-11"
          resizeMode="contain"
        />
      </View>

      <View className="flex-1">
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#1b1610",
              borderTopWidth: 1,
              borderTopColor: "#302a23",
            },
            tabBarActiveTintColor: "#d7aa42",
            tabBarInactiveTintColor: "#8d8579",
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              tabBarLabel: "Compendium",
              tabBarIcon: ({ color }) => (
                <Ionicons name="book-outline" size={22} color={color} />
              ),
            }}
          />
          {hiddenScreens.map((name) => (
            <Tabs.Screen
              key={name}
              name={name}
              options={{
                href: null,
              }}
            />
          ))}
        </Tabs>
      </View>
    </View>
  );
}
