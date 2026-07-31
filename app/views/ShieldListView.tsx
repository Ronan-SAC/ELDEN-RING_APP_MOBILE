import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useShieldListViewModel } from '../../viewmodels/useShieldListViewModel';
import { BossCard } from '../../components/BossCard';
import { LoadingView } from '../../components/LoadingView';

export default function ShieldListView() {
  const router = useRouter();
  const { shieldOptions, isLoading } = useShieldListViewModel();

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5 pt-8" showsVerticalScrollIndicator={false}>
        <Text className="text-yellow-600 text-3xl font-serif mb-6 text-center font-bold tracking-widest uppercase">
          Shields
        </Text>
        <View className="pb-10">
          {isLoading ? (
            <LoadingView />
          ) : (
            shieldOptions.map((shield) => (
              <BossCard
                key={shield.name}
                name={shield.name}
                image={shield.image}
                onPress={() =>
                  router.push({
                    pathname: '/views/ShieldDetailsView',
                    params: { query: shield.name },
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
