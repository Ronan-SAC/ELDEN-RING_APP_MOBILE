import React from "react";
import { View, Image, Text } from "react-native";

export const LoadingView = () => (
  <View className="flex-1 justify-center items-center min-h-[400px]">
    <Image
      source={{
        uri: "https://media.tenor.com/6y3G-_q2cYYAAAAM/elden-ring-zweihander.gif",
      }}
      className="w-32 h-32"
      resizeMode="contain"
    />
    <Text className="font-display text-elden-gold text-xl mt-6">
      Summoning data…
    </Text>
  </View>
);
