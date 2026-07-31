import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useNpcListViewModel } from '../../viewmodels/useNpcListViewModel';
import { BossCard } from '../../components/BossCard';
import { LoadingView } from '../../components/LoadingView';

export default function NpcListView() {
  const router = useRouter();
  const { npcOptions, isLoading } = useNpcListViewModel();

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5 pt-8" showsVerticalScrollIndicator={false}>
        <Text className="text-yellow-600 text-3xl font-serif mb-6 text-center font-bold tracking-widest uppercase">
          NPCs
        </Text>
        <View className="pb-10">
          {isLoading ? (
            <LoadingView />
          ) : (
            npcOptions.map((npc) => (
              <BossCard
                key={npc.name}
                name={npc.name}
                image={npc.image}
                onPress={() =>
                  router.push({
                    pathname: '/views/NpcDetailsView',
                    params: { query: npc.name },
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
