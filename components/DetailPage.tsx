import React from "react";
import { View, ScrollView } from "react-native";
import { LoadingView } from "./LoadingView";

interface DetailPageProps {
  isLoading: boolean;
  children: React.ReactNode;
}

export const DetailPage = ({ isLoading, children }: DetailPageProps) => (
  <View className="flex-1 bg-elden-bg">
    {isLoading ? (
      <LoadingView />
    ) : (
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    )}
  </View>
);
