import React from "react";
import { Text, View } from "react-native";

interface ScreenHeaderProps {
  title: string;
  greeting?: string;
  onFavoritePress?: () => void;
}

export const ScreenHeader = ({
  title,
  greeting = "Compendium · Lands Between",
  onFavoritePress,
}: ScreenHeaderProps) => (
  <View className="flex-row items-center justify-between px-5 py-3">
    <View className="flex-1 pr-3">
      <Text className="font-mono text-[11px] uppercase tracking-[0.08em] text-elden-muted mb-1">
        {greeting}
      </Text>
      <Text className="font-display text-[26px] leading-[1.1] tracking-tight text-elden-fg">
        {title}
      </Text>
    </View>
    {onFavoritePress && (
      <View className="rounded-full bg-elden-surface border border-elden-line w-9 h-9 items-center justify-center">
        <Text className="text-elden-gold text-base leading-none">✦</Text>
      </View>
    )}
  </View>
);
