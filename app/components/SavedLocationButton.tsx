import React from "react";
import { HeroIcon } from "./HeroIcon";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from "react-native";
import { useTheme } from "../hooks/useTheme";
import { Text } from "./ui/Text";

export type SavedLocationButtonProps = {
  icon: React.ComponentProps<typeof HeroIcon>["name"];
  name: string;
  address: string;
} & TouchableHighlightProps;

export const SavedLocationButton: React.FC<SavedLocationButtonProps> = ({
  icon,
  name,
  address,
  style,
  underlayColor,
  ...rest
}) => {
  const { getColor } = useTheme();

  underlayColor ??= getColor("neutral.10");

  return (
    <TouchableHighlight
      onPress={() => {}}
      style={[{ borderRadius: StyleSheet.flatten(style)?.borderRadius ?? 12 }]}
      underlayColor={underlayColor}
      {...rest}
    >
      <View style={[styles.button, style]}>
        <View
          style={[styles.icon, { backgroundColor: getColor("primary.50") }]}
        >
          <HeroIcon name={icon} size={24} color={getColor("primary.100")} />
        </View>

        <View style={styles.content}>
          <Text variant="lg" color="neutral.100">
            {name}
          </Text>
          <Text variant="base" color="neutral.70">
            {address}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 8,
    borderRadius: 12,
  },
  icon: {
    borderRadius: "100%",
    padding: 10,
  },
  content: {
    flex: 1,
  },
});
