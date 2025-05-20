import React from "react";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  Linking,
  ScrollView,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from "react-native";
import { Text } from "../../components/Text";

export default function WaysToPlanSection({
  ...rest
}: Omit<ViewProps, "children">) {
  return (
    <View {...rest}>
      <Text variant="xl">Ways to plan with Avas</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator
        contentContainerStyle={{ gap: 12 }}
        style={{ marginTop: 12 }}
      >
        <PlanButton
          source={require("../../../assets/illustrations/boat.jpg")}
          onPress={() => Linking.openURL("https://avasapp.com/")}
        />
        <PlanButton
          source={require("../../../assets/illustrations/car.jpg")}
          onPress={() => Linking.openURL("https://avasapp.com/")}
        />
      </ScrollView>
    </View>
  );
}

const PlanButton: React.FC<
  { source: ImageSourcePropType; size?: number } & TouchableOpacityProps
> = ({ source, size, style, ...rest }) => {
  size ??= (Dimensions.get("window").width - 32 - 12) / 1.5;

  return (
    <TouchableOpacity
      style={[style, { borderRadius: 12, overflow: "hidden" }]}
      {...rest}
    >
      <Image
        source={source}
        style={{
          width: size,
          height: size,
          objectFit: "cover",
        }}
      />
    </TouchableOpacity>
  );
};
