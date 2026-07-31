import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useCreatureListViewModel } from '../../viewmodels/useCreatureListViewModel';
import { BossCard } from '../../components/BossCard';
import { LoadingView } from '../../components/LoadingView';

export default function CreatureListView() {
  const router = useRouter();
  const { creatureOptions, isLoading } = useCreatureListViewModel();

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5 pt-8" showsVerticalScrollIndicator={false}>
        <Text className="text-yellow-600 text-3xl font-serif mb-6 text-center font-bold tracking-widest uppercase">
          Creatures
        </Text>
        <View className="pb-10">
          {isLoading ? (
            <LoadingView />
          ) : (
            creatureOptions.map((creature) => (
              <BossCard
                key={creature.name}
                name={creature.name}
                image={creature.image}
                onPress={() =>
                  router.push({
                    pathname: '/views/CreatureDetailsView',
                    params: { query: creature.name },
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
