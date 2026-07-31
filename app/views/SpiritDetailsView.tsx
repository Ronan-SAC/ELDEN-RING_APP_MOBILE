import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useSpiritDetailsViewModel } from '../../viewmodels/useSpiritDetailsViewModel';
import { LoadingView } from '../../components/LoadingView';

export default function SpiritDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useSpiritDetailsViewModel(query as string);

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5" showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <LoadingView />
        ) : (
          data.map((spirit) => (
            <View key={spirit.id} className="mt-2 items-center pb-10">
              <Image
                source={{ uri: spirit.image }}
                className="w-full h-64 mb-6 rounded-2xl border border-yellow-900/50"
                resizeMode="cover"
              />
              <Text className="font-serif font-bold text-4xl text-center text-yellow-500 mb-6 tracking-wider">
                {spirit.name}
              </Text>
              <View className="bg-gray-900/80 p-5 rounded-2xl w-full border border-yellow-900/30 shadow-lg">
                <Text className="text-center text-gray-300 text-base leading-relaxed mb-6 italic font-serif">
                  "{spirit.description}"
                </Text>
                <View className="space-y-4">
                  <View className="flex-row justify-between border-b border-gray-800 pb-3">
                    <Text className="text-gray-400 font-semibold uppercase tracking-wider text-xs">FP Cost</Text>
                    <Text className="text-blue-400 font-serif font-bold">{spirit.fpCost}</Text>
                  </View>
                  <View className="flex-row justify-between border-b border-gray-800 pb-3">
                    <Text className="text-gray-400 font-semibold uppercase tracking-wider text-xs">HP Cost</Text>
                    <Text className="text-red-400 font-serif font-bold">{spirit.hpCost}</Text>
                  </View>
                  <View className="border-b border-gray-800 pb-3">
                    <Text className="text-gray-400 font-semibold uppercase tracking-wider text-xs mb-2">Effects</Text>
                    <Text className="text-gray-300 font-serif">{spirit.effects}</Text>
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
