import React from "react";
import { ScrollView, StyleSheet, View, ViewProps } from "react-native";
import { Text } from "../../components/Text";
import { SuggestionButton } from "../../components/SuggestionButton";
import { useNavigation } from "@react-navigation/native";

export default function SuggestionsSection({
  ...rest
}: Omit<ViewProps, "children">) {
  const navigation = useNavigation();

  return (
    <View {...rest}>
      <View style={styles.titleContainer}>
        <Text variant="xl">Suggestions</Text>

        <Text style={{ fontWeight: 500 }}>See all</Text>
      </View>

      <View
        style={{
          marginTop: 12,
          flexDirection: "row",
          gap: 12,
          justifyContent: "space-between",
        }}
      >
        <SuggestionButton
          iconSrc={require("../../../assets/icons/car.png")}
          title="Ride"
          onPress={() => navigation.navigate("Ride")}
        />
        <SuggestionButton
          iconSrc={require("../../../assets/icons/box.png")}
          title="Package"
          onPress={() => navigation.navigate("Package")}
        />
        <SuggestionButton
          iconSrc={require("../../../assets/icons/calendar.png")}
          title="Reserve"
          onPress={() => navigation.navigate("Reserve")}
        />
        <SuggestionButton
          iconSrc={require("../../../assets/icons/motorcycle.png")}
          title="Rent"
          onPress={() => navigation.navigate("Rent")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
});
