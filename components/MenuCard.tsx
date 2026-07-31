import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';

interface MenuCardProps {
  title: string;
  image: string;
  onPress: () => void;
}

export const MenuCard = ({ title, image, onPress }: MenuCardProps) => (
  <TouchableOpacity
    onPress={onPress}
    className="w-full max-w-sm mb-8 overflow-hidden rounded-2xl border border-yellow-900/40 shadow-2xl"
  >
    <Image
      source={{ uri: image }}
      className="w-full h-56"
      resizeMode="cover"
    />
    <View className="absolute bottom-0 w-full bg-black/80 p-4 border-t border-yellow-900/40">
      <Text className="text-yellow-500 text-2xl font-serif text-center uppercase tracking-widest font-bold">
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);
