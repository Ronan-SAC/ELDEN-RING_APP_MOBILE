import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useArmorListViewModel } from '../../viewmodels/useArmorListViewModel';
import { BossCard } from '../../components/BossCard';
import { LoadingView } from '../../components/LoadingView';

export default function ArmorListView() {
  const router = useRouter();
  const { armorOptions, isLoading } = useArmorListViewModel();

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5 pt-8" showsVerticalScrollIndicator={false}>
        <Text className="text-yellow-600 text-3xl font-serif mb-6 text-center font-bold tracking-widest uppercase">
          Armor
        </Text>
        <View className="pb-10">
          {isLoading ? (
            <LoadingView />
          ) : (
            armorOptions.map((armor) => (
              <BossCard
                key={armor.name}
                name={armor.name}
                image={armor.image}
                onPress={() =>
                  router.push({
                    pathname: '/views/ArmorDetailsView',
                    params: { query: armor.name },
                  })
                }
              />
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
}
