import {
  SavedLocationButton,
  SavedLocationButtonProps,
} from "@components/SavedLocationButton";
import React from "react";
import { View, ViewProps } from "react-native";

const savedLocations: Array<SavedLocationButtonProps> = [
  {
    icon: "home",
    name: "Home",
    address: "123 Main St, City, State",
  },
  {
    icon: "briefcase",
    name: "Work",
    address: "456 Work Ave, City, State",
  },
];

export default function BookRideSection({
  style,
  ...rest
}: Omit<ViewProps, "children">) {
  return (
    <View style={[style]} {...rest}>
      <View style={{ gap: 12, marginTop: 16 }}>
        {savedLocations.map((location, index) => (
          <SavedLocationButton
            key={index}
            icon={location.icon}
            name={location.name}
            address={location.address}
            onPress={() => {}}
          />
        ))}
      </View>
    </View>
  );
}
