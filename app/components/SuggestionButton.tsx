import React, { ElementType } from "react";
import {
  ButtonProps,
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from "react-native";
import { useTheme } from "../hooks/useTheme";
import { Text } from "./Text";

export type SuggestionButtonProps = {
  iconSrc: ImageSourcePropType;
  title: string;
} & TouchableHighlightProps;

export const SuggestionButton: React.FC<SuggestionButtonProps> = ({
  iconSrc,
  title,
  style,
  ...rest
}) => {
  const { getColor } = useTheme();

  return (
    <TouchableHighlight
      style={[{ borderRadius: StyleSheet.flatten(style)?.borderRadius ?? 12 }]}
      {...rest}
    >
      <View
        style={[
          style,
          { backgroundColor: getColor("primary.10") },
          styles.button,
        ]}
      >
        <Image source={iconSrc} style={{ width: 32, height: 32 }} />

        <Text style={{ fontWeight: 500 }}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: (Dimensions.get("window").width - 32 - 12 * 3) / 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    paddingHorizontal: 4,
    paddingTop: 12,
    paddingBottom: 8,
    gap: 8,
  },
});
