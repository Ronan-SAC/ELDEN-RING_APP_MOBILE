import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useWeaponListViewModel } from '../../viewmodels/useWeaponListViewModel';
import { BossCard } from '../../components/BossCard';
import { LoadingView } from '../../components/LoadingView';

export default function WeaponListView() {
  const router = useRouter();
  const { weaponOptions, isLoading } = useWeaponListViewModel();

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5 pt-8" showsVerticalScrollIndicator={false}>
        <Text className="text-yellow-600 text-3xl font-serif mb-6 text-center font-bold tracking-widest uppercase">
          Weapons
        </Text>
        <View className="pb-10">
          {isLoading ? (
            <LoadingView />
          ) : (
            weaponOptions.map((weapon) => (
              <BossCard
                key={weapon.name}
                name={weapon.name}
                image={weapon.image}
                onPress={() =>
                  router.push({
                    pathname: '/views/WeaponDetailsView',
                    params: { query: weapon.name },
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
