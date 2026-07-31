import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useLocationListViewModel } from '../../viewmodels/useLocationListViewModel';
import { BossCard } from '../../components/BossCard';
import { LoadingView } from '../../components/LoadingView';

export default function LocationListView() {
  const router = useRouter();
  const { locationOptions, isLoading } = useLocationListViewModel();

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5 pt-8" showsVerticalScrollIndicator={false}>
        <Text className="text-yellow-600 text-3xl font-serif mb-6 text-center font-bold tracking-widest uppercase">
          Locations
        </Text>
        <View className="pb-10">
          {isLoading ? (
            <LoadingView />
          ) : (
            locationOptions.map((location) => (
              <BossCard
                key={location.name}
                name={location.name}
                image={location.image}
                onPress={() =>
                  router.push({
                    pathname: '/views/LocationDetailsView',
                    params: { query: location.name },
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
