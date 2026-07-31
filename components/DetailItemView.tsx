import React from "react";
import { Image, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { IconButton } from "./IconButton";

export interface DetailsRow {
  label: string;
  value: string;
  valueColor?: string;
}

export interface DetailsSection {
  title: string;
  rows?: DetailsRow[];
  lines?: string[];
  text?: string;
  align?: "center" | "left";
}

interface DetailItemViewProps {
  image?: string | null;
  name: string;
  description?: string;
  info?: DetailsRow[];
  sections?: DetailsSection[];
}

const Section = ({ section }: { section: DetailsSection }) => (
  <View className="mt-4 bg-elden-surface border border-elden-line rounded-[18px] p-4">
    <Text className="font-display text-base uppercase tracking-widest text-elden-gold text-center pb-2 mb-3 border-b border-elden-gold/30">
      {section.title}
    </Text>

    {section.rows?.map((row, index) => (
      <View key={index} className="flex-row justify-between py-1.5">
        <Text className="font-body text-sm text-elden-muted">{row.label}</Text>
        <Text
          className="font-mono-medium text-sm"
          style={{ color: row.valueColor ?? "#d7aa42" }}
        >
          {row.value}
        </Text>
      </View>
    ))}

    {section.lines?.map((line, index) => (
      <Text
        key={index}
        className={
          section.align === "left"
            ? "font-body text-base text-elden-fg/80 py-1"
            : "font-body text-base text-elden-fg/80 py-1 text-center"
        }
      >
        ✦ {line}
      </Text>
    ))}

    {section.text ? (
      <Text
        className={
          section.align === "left"
            ? "font-body-italic text-base text-elden-fg/80"
            : "font-body-italic text-base text-elden-fg/80 text-center"
        }
      >
        {section.text}
      </Text>
    ) : null}
  </View>
);

export const DetailItemView = ({
  image,
  name,
  description,
  info,
  sections,
}: DetailItemViewProps) => {
  const router = useRouter();

  return (
    <View className="px-5 pt-3">
      <View className="mb-4">
        <IconButton name="arrow-back" onPress={() => router.back()} />
      </View>

      {image ? (
        <Image
          source={{ uri: image }}
          className="w-full h-56 rounded-[18px] border border-elden-line mb-5"
          resizeMode="cover"
        />
      ) : (
        <View className="w-full h-40 rounded-[18px] bg-elden-surface border border-elden-line mb-5 items-center justify-center">
          <Text className="font-display text-5xl text-elden-gold/80">
            {name.charAt(0).toUpperCase()}
          </Text>
        </View>
      )}

      <Text className="font-display text-[26px] leading-[1.15] tracking-tight text-elden-fg text-center mb-5">
        {name}
      </Text>

      <View className="bg-elden-surface border border-elden-line rounded-[18px] p-4 mb-4">
        <Text className="font-body-italic text-base leading-relaxed text-elden-fg/85 text-center">
          "{description}"
        </Text>
      </View>

      {info && info.length > 0 && (
        <View className="bg-elden-surface border border-elden-line rounded-[18px] p-4">
          {info.map((row, index) => (
            <View
              key={index}
              className={
                index < info.length - 1
                  ? "flex-row justify-between items-center py-2.5 border-b border-elden-line"
                  : "flex-row justify-between items-center py-2.5"
              }
            >
              <Text className="font-body-semibold text-xs uppercase tracking-wider text-elden-muted">
                {row.label}
              </Text>
              <Text
                className="font-body-medium text-sm text-right flex-1 ml-4"
                style={{ color: row.valueColor ?? "#ebe4d6" }}
              >
                {row.value}
              </Text>
            </View>
          ))}
        </View>
      )}

      {sections?.map((section, index) => (
        <Section key={index} section={section} />
      ))}
    </View>
  );
};
