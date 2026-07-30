import { View, ScrollView, Text } from "react-native";
import { useRouter } from "expo-router";
import React = require('react');
import { useBossListViewModel } from "../../viewmodels/useBossListViewModel";
import { BossCard } from "../../components/BossCard";
import { LoadingView } from "../../components/LoadingView";

export default function BossListView() {
  const router = useRouter();
  const { bossOptions, isLoading } = useBossListViewModel();

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5 pt-8" showsVerticalScrollIndicator={false}>
        <Text className="text-yellow-600 text-3xl font-serif mb-6 text-center font-bold tracking-widest uppercase">
          Legendary Foes
        </Text>
        <View className="pb-10">
          {isLoading ? (
            <LoadingView />
          ) : (
            bossOptions.map((boss) => (
              <BossCard
                key={boss.name}
                name={boss.name}
                image={boss.image}
                onPress={() =>
                  router.push({
                    pathname: "/views/BossDetailsView",
                    params: { bossQuery: boss.name },
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
