import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeroIcon } from "../../components/HeroIcon";
import { Text } from "../../components/Text";
import { Colors } from "../../constants/Colors";
import { useTheme } from "../../hooks/useTheme";
import SuggestionsSection from "./SuggestionsSection";

export default function HomeScreen() {
  const { getColor } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <HeroIcon name="truck" size={38} color={getColor("primary.100")} />
        <Text variant="title" color="primary.100">
          Avas App
        </Text>
      </View>

      <SuggestionsSection style={{ marginTop: 32 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral[0],
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 12,
  },
});
