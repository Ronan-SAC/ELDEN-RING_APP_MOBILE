import React from "react";
import { Text } from "react-native";

interface PillProps {
  label: string;
  variant?: "pill" | "tag";
}

export const Pill = ({ label, variant = "pill" }: PillProps) => (
  <Text
    className={
      variant === "pill"
        ? "self-start px-2.5 py-1 bg-elden-gold-dim text-elden-gold font-mono text-[10px] uppercase tracking-[0.06em] rounded-full overflow-hidden"
        : "self-start px-2 py-0.5 text-elden-muted font-mono text-[10px] uppercase tracking-[0.06em] rounded-full border border-elden-line overflow-hidden"
    }
  >
    {label}
  </Text>
);
