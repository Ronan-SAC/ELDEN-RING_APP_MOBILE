import React, { useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { ScreenHeader } from "./ScreenHeader";
import { SearchBar } from "./SearchBar";
import { Pill } from "./Pill";
import { EntityRow } from "./EntityRow";
import { LoadingView } from "./LoadingView";

interface EntityListViewProps<T extends { name: string; image?: string | null }> {
  title: string;
  options: T[];
  isLoading: boolean;
  getSubtitle?: (item: T) => string | undefined;
  getMeta?: (item: T) => string | undefined;
  onSelect: (item: T) => void;
}

export const EntityListView = <T extends { name: string; image?: string | null }>({
  title,
  options,
  isLoading,
  getSubtitle,
  getMeta,
  onSelect,
}: EntityListViewProps<T>) => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((item) => {
      const name = item.name.toLowerCase();
      const sub = (getSubtitle?.(item) ?? "").toLowerCase();
      return name.includes(q) || sub.includes(q);
    });
  }, [options, query, getSubtitle]);

  return (
    <View className="flex-1 bg-elden-bg pt-4">
      <ScreenHeader title={title} />

      <View className="px-5 mb-3">
        <SearchBar
          value={query}
          onChangeText={setQuery}
          placeholder={`Search ${title.toLowerCase()}…`}
        />
      </View>

      <View className="px-5 mb-1 flex-row flex-wrap gap-2">
        <Pill label={`All · ${options.length}`} />
        {query.trim() ? (
          <Pill label={`Results · ${filtered.length}`} variant="tag" />
        ) : null}
      </View>

      <ScrollView
        className="px-5"
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {isLoading ? (
          <LoadingView />
        ) : filtered.length === 0 ? (
          <Text className="font-body text-elden-muted text-center mt-10">
            No results found.
          </Text>
        ) : (
          filtered.map((item) => (
            <EntityRow
              key={item.name}
              image={item.image}
              title={item.name}
              subtitle={getSubtitle?.(item)}
              meta={getMeta?.(item)}
              onPress={() => onSelect(item)}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};
