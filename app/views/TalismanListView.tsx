import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useTalismanListViewModel } from '../../viewmodels/useTalismanListViewModel';
import { BossCard } from '../../components/BossCard';
import { LoadingView } from '../../components/LoadingView';

export default function TalismanListView() {
  const router = useRouter();
  const { talismanOptions, isLoading } = useTalismanListViewModel();

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5 pt-8" showsVerticalScrollIndicator={false}>
        <Text className="text-yellow-600 text-3xl font-serif mb-6 text-center font-bold tracking-widest uppercase">
          Talismans
        </Text>
        <View className="pb-10">
          {isLoading ? (
            <LoadingView />
          ) : (
            talismanOptions.map((talisman) => (
              <BossCard
                key={talisman.name}
                name={talisman.name}
                image={talisman.image}
                onPress={() =>
                  router.push({
                    pathname: '/views/TalismanDetailsView',
                    params: { query: talisman.name },
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
