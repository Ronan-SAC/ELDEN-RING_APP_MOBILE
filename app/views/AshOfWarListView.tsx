import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useAshOfWarListViewModel } from '../../viewmodels/useAshOfWarListViewModel';
import { BossCard } from '../../components/BossCard';
import { LoadingView } from '../../components/LoadingView';

export default function AshOfWarListView() {
  const router = useRouter();
  const { ashOfWarOptions, isLoading } = useAshOfWarListViewModel();

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5 pt-8" showsVerticalScrollIndicator={false}>
        <Text className="text-yellow-600 text-3xl font-serif mb-6 text-center font-bold tracking-widest uppercase">
          Ashes of War
        </Text>
        <View className="pb-10">
          {isLoading ? (
            <LoadingView />
          ) : (
            ashOfWarOptions.map((ash) => (
              <BossCard
                key={ash.name}
                name={ash.name}
                image={ash.image}
                onPress={() =>
                  router.push({
                    pathname: '/views/AshOfWarDetailsView',
                    params: { query: ash.name },
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
