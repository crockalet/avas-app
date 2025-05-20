import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { HeroIcon } from "@components/HeroIcon";
import { Text } from "@ui/Text";
import { Colors } from "@app/constants/Colors";
import { useTheme } from "@hooks/useTheme";
import SuggestionsSection from "./SuggestionsSection";
import WaysToPlanSection from "./WaysToPlanSection";
import BookRideSection from "./BookRideSection";

export default function HomeScreen() {
  const { top, left, right } = useSafeAreaInsets();

  const { getColor } = useTheme();

  return (
    <View
      style={[
        { marginTop: top, marginLeft: left, marginRight: right },
        styles.container,
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <HeroIcon name="truck" size={38} color={getColor("primary.100")} />
          <Text variant="title" color="primary.100">
            Avas App
          </Text>
        </View>

        <BookRideSection style={{ marginTop: 24 }} />
        <SuggestionsSection style={{ marginTop: 24 }} />
        <WaysToPlanSection style={{ marginTop: 24 }} />
      </ScrollView>
    </View>
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
