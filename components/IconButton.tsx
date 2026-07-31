import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IconButtonProps {
  name: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  size?: number;
  color?: string;
}

export const IconButton = ({
  name,
  onPress,
  size = 18,
  color = "#ebe4d6",
}: IconButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.7}
    className="w-9 h-9 rounded-full bg-elden-surface border border-elden-line items-center justify-center"
  >
    <Ionicons name={name} size={size} color={color} />
  </TouchableOpacity>
);
