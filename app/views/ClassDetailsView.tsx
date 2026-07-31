import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useClassDetailsViewModel } from '../../viewmodels/useClassDetailsViewModel';
import { LoadingView } from '../../components/LoadingView';

export default function ClassDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useClassDetailsViewModel(query as string);

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5" showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <LoadingView />
        ) : (
          data.map((cls) => (
            <View key={cls.id} className="mt-2 items-center pb-10">
              <Image
                source={{ uri: cls.image }}
                className="w-full h-64 mb-6 rounded-2xl border border-yellow-900/50"
                resizeMode="cover"
              />
              <Text className="font-serif font-bold text-4xl text-center text-yellow-500 mb-6 tracking-wider">
                {cls.name}
              </Text>
              <View className="bg-gray-900/80 p-5 rounded-2xl w-full border border-yellow-900/30 shadow-lg">
                <Text className="text-center text-gray-300 text-base leading-relaxed mb-6 italic font-serif">
                  "{cls.description}"
                </Text>
                {cls.stats && (
                  <View className="mt-4 bg-black/40 p-4 rounded-xl border border-gray-800">
                    <Text className="text-yellow-600 font-serif text-xl mb-3 border-b border-yellow-900/50 pb-2 uppercase tracking-widest text-center">
                      Starting Stats
                    </Text>
                    {Object.entries(cls.stats).map(([key, value]) => (
                      <View key={key} className="flex-row justify-between py-1 border-b border-gray-800/50">
                        <Text className="text-gray-400 text-sm capitalize">{key}</Text>
                        <Text className="text-yellow-300 font-bold">{value}</Text>
                      </View>
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
