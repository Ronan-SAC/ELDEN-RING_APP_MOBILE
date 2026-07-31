import { Tabs, Stack } from "expo-router";
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
