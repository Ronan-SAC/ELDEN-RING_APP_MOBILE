import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import React = require('react');
import { MenuCard } from "../../components/MenuCard";

export default function MainMenu() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#0a0a0a] p-5 pt-10">
      <Text className="text-yellow-600 text-4xl font-serif mb-10 text-center tracking-wider font-bold">
        Compendium
      </Text>

      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 40
        }}
        showsVerticalScrollIndicator={false}
      >
        <MenuCard
          title="Legendary Bosses"
          image="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/elden-ring-bosses.jpg"
          onPress={() => router.push("./views/BossListView")}
        />

        <MenuCard
          title="Key Items"
          image="https://i.redd.it/7va0wvtbvj6d1.jpeg"
          onPress={() => router.push("./views/ItemsView")}
        />
      </ScrollView>
    </View>
  );
}