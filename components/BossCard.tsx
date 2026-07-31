import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

interface BossCardProps {
  name: string;
  image: string;
  onPress: () => void;
}

export const BossCard = ({ name, image, onPress }: BossCardProps) => (
  <TouchableOpacity
    onPress={onPress}
    className="bg-gray-900 p-4 my-3 rounded-2xl items-center shadow-lg border border-yellow-900/30 overflow-hidden"
  >
    <Text className="text-yellow-500 text-2xl font-serif text-center mb-4 uppercase tracking-widest font-bold">
      {name}
    </Text>
    <Image
      source={{ uri: image }}
      className="w-full h-48 rounded-xl"
      resizeMode="cover"
    />
  </TouchableOpacity>
);
