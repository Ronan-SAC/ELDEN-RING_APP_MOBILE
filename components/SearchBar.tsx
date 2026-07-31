import React from "react";
import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchBar = ({
  value,
  onChangeText,
  placeholder = "Search the compendium…",
}: SearchBarProps) => (
  <View className="flex-row items-center gap-2.5 px-3.5 h-11 bg-elden-surface border border-elden-line rounded-xl">
    <Ionicons name="search" size={17} color="#8d8579" />
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#8d8579"
      className="flex-1 text-elden-fg text-sm py-0"
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="search"
      keyboardAppearance="dark"
    />
  </View>
);
