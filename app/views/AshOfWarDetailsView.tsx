import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useAshOfWarDetailsViewModel } from '../../viewmodels/useAshOfWarDetailsViewModel';
import { LoadingView } from '../../components/LoadingView';

export default function AshOfWarDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useAshOfWarDetailsViewModel(query as string);

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5" showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <LoadingView />
        ) : (
          data.map((ash) => (
            <View key={ash.id} className="mt-2 items-center pb-10">
              <Image
                source={{ uri: ash.image }}
                className="w-full h-64 mb-6 rounded-2xl border border-yellow-900/50"
                resizeMode="cover"
              />
              <Text className="font-serif font-bold text-4xl text-center text-yellow-500 mb-6 tracking-wider">
                {ash.name}
              </Text>
              <View className="bg-gray-900/80 p-5 rounded-2xl w-full border border-yellow-900/30 shadow-lg">
                <Text className="text-center text-gray-300 text-base leading-relaxed mb-6 italic font-serif">
                  "{ash.description}"
                </Text>
                <View className="space-y-4">
                  <View className="flex-row justify-between border-b border-gray-800 pb-3">
                    <Text className="text-gray-400 font-semibold uppercase tracking-wider text-xs">Affinity</Text>
                    <Text className="text-red-400 font-serif text-right w-2/3">{ash.affinity}</Text>
                  </View>
                  <View className="flex-row justify-between border-b border-gray-800 pb-3">
                    <Text className="text-gray-400 font-semibold uppercase tracking-wider text-xs">Skill</Text>
                    <Text className="text-blue-400 font-serif text-right w-2/3">{ash.skill}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}
