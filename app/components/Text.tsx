import React from "react";
import {
  StyleSheet,
  Text as NativeText,
  TextProps as NativeTextProps,
} from "react-native";
import { type Color } from "../constants/Colors";
import { useTheme } from "../hooks/useTheme";

type TextVariant = keyof typeof variants;

export type TextProps = {
  variant?: TextVariant;
  color?: Color;
} & NativeTextProps;

export const Text: React.FC<TextProps> = ({
  variant = "base",
  color = "neutral.100",
  style,
  ...rest
}) => {
  const { getColor } = useTheme();

  return (
    <NativeText
      style={[variants[variant], { color: getColor(color) }, style]}
      {...rest}
    />
  );
};

const variants = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "900",
  },
  xl: {
    fontSize: 24,
    fontWeight: "700",
  },
  lg: {
    fontSize: 20,
    fontWeight: "600",
  },
  base: {
    fontSize: 16,
    fontWeight: "400",
  },
});
