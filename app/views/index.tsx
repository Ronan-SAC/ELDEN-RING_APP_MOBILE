import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React = require("react");

export default function MainMenu() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-black p-5">
      <Text className="text-yellow-300 text-3xl font-bold mb-10 text-center">
        Menu
      </Text>

      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 20
        }}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          onPress={() => router.push("./views/boss")}
          className="bg-gray-800 p-5 rounded-lg mb-5 w-full max-w-xs items-center"
        >
          <Text className="text-yellow-300 text-2xl text-center mb-5">
            Bosses
          </Text>
          <Image
            source={{
              uri: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/elden-ring-bosses.jpg",
            }}
            className="w-full h-52 mb-4"
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("./views/items")}
          className="bg-gray-800 p-5 rounded-lg mb-5 w-full max-w-xs items-center"
        >
          <Text className="text-yellow-300 text-2xl text-center mb-5">
            Items
          </Text>
          <Image
            source={{
              uri: "https://i.redd.it/7va0wvtbvj6d1.jpeg",
            }}
            className="w-full h-52 mb-4"
            resizeMode="cover"
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}