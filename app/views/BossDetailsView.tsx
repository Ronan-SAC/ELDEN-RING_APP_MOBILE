import { View, ScrollView, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import React = require('react');
import { useBossDetailsViewModel } from "../../viewmodels/useBossDetailsViewModel";
import { LoadingView } from "../../components/LoadingView";

export default function BossDetailsView() {
  const { bossQuery } = useLocalSearchParams();
  const { data, isLoading } = useBossDetailsViewModel(bossQuery as string);

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5" showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <LoadingView />
        ) : (
          data.map((boss) => (
            <View key={boss.id} className="mt-2 items-center pb-10">
              <Image
                source={{ uri: boss.image }}
                className="w-full h-64 mb-6 rounded-2xl border border-yellow-900/50"
                resizeMode="cover"
              />
              <Text className="font-serif font-bold text-4xl text-center text-yellow-500 mb-6 tracking-wider">
                {boss.name}
              </Text>

              <View className="bg-gray-900/80 p-5 rounded-2xl w-full border border-yellow-900/30 shadow-lg">
                <Text className="text-center text-gray-300 text-base leading-relaxed mb-6 italic font-serif">
                  "{boss.description}"
                </Text>

                <View className="space-y-4">
                  <View className="flex-row justify-between border-b border-gray-800 pb-3">
                    <Text className="text-gray-400 font-semibold uppercase tracking-wider text-xs">Region</Text>
                    <Text className="text-red-400 font-serif text-right w-2/3">{boss.region}</Text>
                  </View>

                  <View className="flex-row justify-between border-b border-gray-800 pb-3">
                    <Text className="text-gray-400 font-semibold uppercase tracking-wider text-xs">Location</Text>
                    <Text className="text-red-400 font-serif text-right w-2/3">{boss.location}</Text>
                  </View>

                  <View className="flex-row justify-between border-b border-gray-800 pb-3">
                    <Text className="text-gray-400 font-semibold uppercase tracking-wider text-xs">Health</Text>
                    <Text className="text-green-500 font-serif text-right font-bold">{boss.healthPoints}</Text>
                  </View>
                </View>

                {boss.drops && boss.drops.length > 0 && (
                  <View className="mt-6 bg-black/40 p-4 rounded-xl border border-gray-800">
                    <Text className="text-yellow-600 font-serif text-xl mb-3 border-b border-yellow-900/50 pb-2 uppercase tracking-widest text-center">
                      Drops
                    </Text>
                    {boss.drops.map((drop, index) => (
                      <Text className="text-yellow-100/80 text-base py-1 text-center font-serif" key={index}>
                        ✦ {drop}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}
