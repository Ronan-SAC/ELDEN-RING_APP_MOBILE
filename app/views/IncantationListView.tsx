import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useIncantationListViewModel } from '../../viewmodels/useIncantationListViewModel';
import { BossCard } from '../../components/BossCard';
import { LoadingView } from '../../components/LoadingView';

export default function IncantationListView() {
  const router = useRouter();
  const { incantationOptions, isLoading } = useIncantationListViewModel();

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5 pt-8" showsVerticalScrollIndicator={false}>
        <Text className="text-yellow-600 text-3xl font-serif mb-6 text-center font-bold tracking-widest uppercase">
          Incantations
        </Text>
        <View className="pb-10">
          {isLoading ? (
            <LoadingView />
          ) : (
            incantationOptions.map((incantation) => (
              <BossCard
                key={incantation.name}
                name={incantation.name}
                image={incantation.image}
                onPress={() =>
                  router.push({
                    pathname: '/views/IncantationDetailsView',
                    params: { query: incantation.name },
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
