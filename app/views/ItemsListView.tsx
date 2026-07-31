import React from "react";
import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { useItemsListViewModel } from "../../viewmodels/useItemsListViewModel";
import { LoadingView } from "../../components/LoadingView";
import { BossCard } from "../../components/BossCard";

export default function ItemsView() {
  const router = useRouter();
  const { itemOptions, isLoading } = useItemsListViewModel();

  return (
    <View className="flex-1 bg-[#0a0a0a]">
      <ScrollView className="p-5 pt-8" showsVerticalScrollIndicator={false}>
        <Text className="text-yellow-600 text-3xl font-serif mb-6 text-center font-bold tracking-widest uppercase">
          Key Items
        </Text>
        <View className="pb-10">
          {isLoading ? (
            <LoadingView />
          ) : (
            itemOptions.map((item) => (
              <BossCard
                key={item.name}
                name={item.name}
                image={item.image}
                onPress={() =>
                  router.push({
                    pathname: "/views/ItemsDetailsView",
                    params: { query: item.name },
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
