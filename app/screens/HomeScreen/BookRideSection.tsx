import { BookRideButton } from "@/app/components/BookRideButton";
import {
  SavedLocationButton,
  SavedLocationButtonProps,
} from "@components/SavedLocationButton";
import React from "react";
import { View, ViewProps } from "react-native";

import SampleSavedLocations from "@/sample-saved-locations.json";
import { useNavigation } from "@react-navigation/native";

const savedLocations: Array<
  SavedLocationButtonProps & { key: keyof typeof SampleSavedLocations }
> = [
  {
    key: "home",
    icon: "home",
    ...SampleSavedLocations.home,
  },
  {
    key: "work",
    icon: "briefcase",
    ...SampleSavedLocations.work,
  },
];

export default function BookRideSection({
  style,
  ...rest
}: Omit<ViewProps, "children">) {
  const navigation = useNavigation();

  return (
    <View style={[style]} {...rest}>
      <BookRideButton
        onPress={(time) =>
          navigation.navigate("Ride", { time: time.getTime() })
        }
      />

      <View style={{ gap: 12, marginTop: 16 }}>
        {savedLocations.map((location) => (
          <SavedLocationButton
            key={location.key}
            icon={location.icon}
            name={location.name}
            address={location.address}
            onPress={() =>
              navigation.navigate("Ride", { savedLocationKey: location.key })
            }
          />
        ))}
      </View>
    </View>
  );
}
