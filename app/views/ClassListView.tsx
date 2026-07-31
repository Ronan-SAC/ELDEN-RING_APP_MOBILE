import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useClassListViewModel } from '../../viewmodels/useClassListViewModel';
import { BossCard } from '../../components/BossCard';
import { LoadingView } from '../../components/LoadingView';

export default function ClassListView() {
  const router = useRouter();
  const { classOptions, isLoading } = useClassListViewModel();

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5 pt-8" showsVerticalScrollIndicator={false}>
        <Text className="text-yellow-600 text-3xl font-serif mb-6 text-center font-bold tracking-widest uppercase">
          Classes
        </Text>
        <View className="pb-10">
          {isLoading ? (
            <LoadingView />
          ) : (
            classOptions.map((cls) => (
              <BossCard
                key={cls.name}
                name={cls.name}
                image={cls.image}
                onPress={() =>
                  router.push({
                    pathname: '/views/ClassDetailsView',
                    params: { query: cls.name },
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
