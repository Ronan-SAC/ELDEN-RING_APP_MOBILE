import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useAmmoListViewModel } from '../../viewmodels/useAmmoListViewModel';
import { BossCard } from '../../components/BossCard';
import { LoadingView } from '../../components/LoadingView';

export default function AmmoListView() {
  const router = useRouter();
  const { ammoOptions, isLoading } = useAmmoListViewModel();

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5 pt-8" showsVerticalScrollIndicator={false}>
        <Text className="text-yellow-600 text-3xl font-serif mb-6 text-center font-bold tracking-widest uppercase">
          Ammo
        </Text>
        <View className="pb-10">
          {isLoading ? (
            <LoadingView />
          ) : (
            ammoOptions.map((ammo) => (
              <BossCard
                key={ammo.name}
                name={ammo.name}
                image={ammo.image}
                onPress={() =>
                  router.push({
                    pathname: '/views/AmmoDetailsView',
                    params: { query: ammo.name },
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
