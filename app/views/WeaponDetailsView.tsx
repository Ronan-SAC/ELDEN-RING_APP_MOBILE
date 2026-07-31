import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useWeaponDetailsViewModel } from '../../viewmodels/useWeaponDetailsViewModel';
import { LoadingView } from '../../components/LoadingView';

export default function WeaponDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useWeaponDetailsViewModel(query as string);

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5" showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <LoadingView />
        ) : (
          data.map((weapon) => (
            <View key={weapon.id} className="mt-2 items-center pb-10">
              <Image
                source={{ uri: weapon.image }}
                className="w-full h-64 mb-6 rounded-2xl border border-yellow-900/50"
                resizeMode="cover"
              />
              <Text className="font-serif font-bold text-4xl text-center text-yellow-500 mb-6 tracking-wider">
                {weapon.name}
              </Text>
              <View className="bg-gray-900/80 p-5 rounded-2xl w-full border border-yellow-900/30 shadow-lg">
                <Text className="text-center text-gray-300 text-base leading-relaxed mb-6 italic font-serif">
                  "{weapon.description}"
                </Text>
                <View className="space-y-4">
                  <View className="flex-row justify-between border-b border-gray-800 pb-3">
                    <Text className="text-gray-400 font-semibold uppercase tracking-wider text-xs">Category</Text>
                    <Text className="text-red-400 font-serif text-right w-2/3">{weapon.category}</Text>
                  </View>
                  <View className="flex-row justify-between border-b border-gray-800 pb-3">
                    <Text className="text-gray-400 font-semibold uppercase tracking-wider text-xs">Weight</Text>
                    <Text className="text-blue-400 font-serif font-bold">{weapon.weight}</Text>
                  </View>
                </View>
                {weapon.attack && weapon.attack.length > 0 && (
                  <View className="mt-6 bg-black/40 p-4 rounded-xl border border-gray-800">
                    <Text className="text-yellow-600 font-serif text-xl mb-3 border-b border-yellow-900/50 pb-2 uppercase tracking-widest text-center">Attack</Text>
                    {weapon.attack.map((a, i) => (
                      <View key={i} className="flex-row justify-between py-1">
                        <Text className="text-gray-400 text-sm">{a.name}</Text>
                        <Text className="text-red-400 font-bold">{a.amount}</Text>
                      </View>
                    ))}
                  </View>
                )}
                {weapon.defence && weapon.defence.length > 0 && (
                  <View className="mt-4 bg-black/40 p-4 rounded-xl border border-gray-800">
                    <Text className="text-yellow-600 font-serif text-xl mb-3 border-b border-yellow-900/50 pb-2 uppercase tracking-widest text-center">Defence</Text>
                    {weapon.defence.map((d, i) => (
                      <View key={i} className="flex-row justify-between py-1">
                        <Text className="text-gray-400 text-sm">{d.name}</Text>
                        <Text className="text-green-400 font-bold">{d.amount}</Text>
                      </View>
                    ))}
                  </View>
                )}
                {weapon.requiredAttributes && weapon.requiredAttributes.length > 0 && (
                  <View className="mt-4 bg-black/40 p-4 rounded-xl border border-gray-800">
                    <Text className="text-yellow-600 font-serif text-xl mb-3 border-b border-yellow-900/50 pb-2 uppercase tracking-widest text-center">Requirements</Text>
                    {weapon.requiredAttributes.map((r, i) => (
                      <View key={i} className="flex-row justify-between py-1">
                        <Text className="text-gray-400 text-sm">{r.name}</Text>
                        <Text className="text-yellow-300 font-bold">{r.amount}</Text>
                      </View>
                    ))}
                  </View>
                )}
                {weapon.scalesWith && weapon.scalesWith.length > 0 && (
                  <View className="mt-4 bg-black/40 p-4 rounded-xl border border-gray-800">
                    <Text className="text-yellow-600 font-serif text-xl mb-3 border-b border-yellow-900/50 pb-2 uppercase tracking-widest text-center">Scales With</Text>
                    {weapon.scalesWith.map((s, i) => (
                      <View key={i} className="flex-row justify-between py-1">
                        <Text className="text-gray-400 text-sm">{s.name}</Text>
                        <Text className="text-purple-400 font-bold">{s.scaling}</Text>
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
