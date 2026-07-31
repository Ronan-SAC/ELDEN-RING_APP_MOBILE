import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useAmmoDetailsViewModel } from '../../viewmodels/useAmmoDetailsViewModel';
import { LoadingView } from '../../components/LoadingView';

export default function AmmoDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useAmmoDetailsViewModel(query as string);

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5" showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <LoadingView />
        ) : (
          data.map((ammo) => (
            <View key={ammo.id} className="mt-2 items-center pb-10">
              <Image
                source={{ uri: ammo.image }}
                className="w-full h-64 mb-6 rounded-2xl border border-yellow-900/50"
                resizeMode="cover"
              />
              <Text className="font-serif font-bold text-4xl text-center text-yellow-500 mb-6 tracking-wider">
                {ammo.name}
              </Text>
              <View className="bg-gray-900/80 p-5 rounded-2xl w-full border border-yellow-900/30 shadow-lg">
                <Text className="text-center text-gray-300 text-base leading-relaxed mb-6 italic font-serif">
                  "{ammo.description}"
                </Text>
                <View className="space-y-4">
                  <View className="flex-row justify-between border-b border-gray-800 pb-3">
                    <Text className="text-gray-400 font-semibold uppercase tracking-wider text-xs">Type</Text>
                    <Text className="text-red-400 font-serif text-right w-2/3">{ammo.type}</Text>
                  </View>
                  {ammo.passive ? (
                    <View className="flex-row justify-between border-b border-gray-800 pb-3">
                      <Text className="text-gray-400 font-semibold uppercase tracking-wider text-xs">Passive</Text>
                      <Text className="text-purple-400 font-serif text-right w-2/3">{ammo.passive}</Text>
                    </View>
                  ) : null}
                </View>
                {ammo.attackPower && ammo.attackPower.length > 0 && (
                  <View className="mt-6 bg-black/40 p-4 rounded-xl border border-gray-800">
                    <Text className="text-yellow-600 font-serif text-xl mb-3 border-b border-yellow-900/50 pb-2 uppercase tracking-widest text-center">
                      Attack Power
                    </Text>
                    {ammo.attackPower.map((ap, index) => (
                      <View key={index} className="flex-row justify-between py-1">
                        <Text className="text-gray-400 text-sm">{ap.name}</Text>
                        <Text className="text-red-400 font-bold">{ap.amount}</Text>
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
