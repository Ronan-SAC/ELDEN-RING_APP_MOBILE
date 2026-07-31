import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface EntityRowProps {
  image?: string | null;
  title: string;
  subtitle?: string;
  meta?: string;
  onPress: () => void;
}

export const EntityRow = ({
  image,
  title,
  subtitle,
  meta,
  onPress,
}: EntityRowProps) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.7}
    className="flex-row items-center gap-3 py-3 border-b border-elden-line"
  >
    <View className="w-10 h-10 rounded-full overflow-hidden bg-elden-gold-dim border border-elden-line items-center justify-center">
      {image ? (
        <Image source={{ uri: image }} className="w-full h-full" resizeMode="cover" />
      ) : (
        <Text className="font-display text-elden-gold text-base leading-none">
          {title.charAt(0).toUpperCase()}
        </Text>
      )}
    </View>

    <View className="flex-1">
      <Text className="font-body-medium text-[15px] leading-[1.25] text-elden-fg" numberOfLines={1}>
        {title}
      </Text>
      {subtitle ? (
        <Text className="font-body text-[13px] leading-[1.3] text-elden-muted mt-0.5" numberOfLines={1}>
          {subtitle}
        </Text>
      ) : null}
    </View>

    {meta ? <Text className="font-mono text-[12px] text-elden-muted">{meta}</Text> : null}
  </TouchableOpacity>
);
