import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useSpiritListViewModel } from '../../viewmodels/useSpiritListViewModel';
import { BossCard } from '../../components/BossCard';
import { LoadingView } from '../../components/LoadingView';

export default function SpiritListView() {
  const router = useRouter();
  const { spiritOptions, isLoading } = useSpiritListViewModel();

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5 pt-8" showsVerticalScrollIndicator={false}>
        <Text className="text-yellow-600 text-3xl font-serif mb-6 text-center font-bold tracking-widest uppercase">
          Spirit Ashes
        </Text>
        <View className="pb-10">
          {isLoading ? (
            <LoadingView />
          ) : (
            spiritOptions.map((spirit) => (
              <BossCard
                key={spirit.name}
                name={spirit.name}
                image={spirit.image}
                onPress={() =>
                  router.push({
                    pathname: '/views/SpiritDetailsView',
                    params: { query: spirit.name },
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
