import { StaticScreenProps } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";

import SampleSavedLocations from "@/sample-saved-locations.json";

type RideScreenProps = StaticScreenProps<{
  savedLocationKey?: keyof typeof SampleSavedLocations;
  time?: number;
}>;

export default function RideScreen({ route }: RideScreenProps) {
  const { savedLocationKey, time: _time } = route.params ?? {};

  const time = _time ? new Date(_time) : undefined;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Ride Screen</Text>

      {savedLocationKey && (
        <Text>
          Saved Location: {SampleSavedLocations[savedLocationKey].name}
        </Text>
      )}

      {time && <Text>Time: {time.toLocaleTimeString()}</Text>}
    </View>
  );
}
