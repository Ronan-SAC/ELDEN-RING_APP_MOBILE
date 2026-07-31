import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useSorceryListViewModel } from '../../viewmodels/useSorceryListViewModel';
import { BossCard } from '../../components/BossCard';
import { LoadingView } from '../../components/LoadingView';

export default function SorceryListView() {
  const router = useRouter();
  const { sorceryOptions, isLoading } = useSorceryListViewModel();

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5 pt-8" showsVerticalScrollIndicator={false}>
        <Text className="text-yellow-600 text-3xl font-serif mb-6 text-center font-bold tracking-widest uppercase">
          Sorceries
        </Text>
        <View className="pb-10">
          {isLoading ? (
            <LoadingView />
          ) : (
            sorceryOptions.map((sorcery) => (
              <BossCard
                key={sorcery.name}
                name={sorcery.name}
                image={sorcery.image}
                onPress={() =>
                  router.push({
                    pathname: '/views/SorceryDetailsView',
                    params: { query: sorcery.name },
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
