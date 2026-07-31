import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useLocationDetailsViewModel } from '../../viewmodels/useLocationDetailsViewModel';
import { LoadingView } from '../../components/LoadingView';

export default function LocationDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useLocationDetailsViewModel(query as string);

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5" showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <LoadingView />
        ) : (
          data.map((location) => (
            <View key={location.id} className="mt-2 items-center pb-10">
              <Image
                source={{ uri: location.image }}
                className="w-full h-64 mb-6 rounded-2xl border border-yellow-900/50"
                resizeMode="cover"
              />
              <Text className="font-serif font-bold text-4xl text-center text-yellow-500 mb-6 tracking-wider">
                {location.name}
              </Text>
              <View className="bg-gray-900/80 p-5 rounded-2xl w-full border border-yellow-900/30 shadow-lg">
                <Text className="text-center text-gray-300 text-base leading-relaxed italic font-serif">
                  "{location.description}"
                </Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}
