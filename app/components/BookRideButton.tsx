import React, { useMemo } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { HeroIcon } from "./HeroIcon";
import { useTheme } from "../hooks/useTheme";
import { Text } from "./ui/Text";

export type BookRideButtonProps = {
  title?: string;
  onPress?: (time: Date, args: { event: GestureResponderEvent }) => void;
} & Omit<TouchableOpacityProps, "children" | "onPress">;

export const BookRideButton: React.FC<BookRideButtonProps> = ({
  title = "Where to?",
  disabled,
  onPress,
  style,
  ...rest
}) => {
  disabled ??= !onPress;

  const { getColor } = useTheme();

  const [time, setTime] = React.useState<Date | null>(null);

  const handlePress = (event: GestureResponderEvent) => {
    onPress?.(time === null ? new Date() : time, { event });
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: getColor("neutral.10") },
        style,
      ]}
      disabled={disabled}
      onPress={handlePress}
      {...rest}
    >
      <HeroIcon
        name="magnifying-glass"
        size={20}
        color={getColor("neutral.100")}
      />

      <Text style={{ flex: 1 }} variant="lg">
        {title}
      </Text>

      <TimePicker time={time} onChange={setTime} />

      <HeroIcon
        name="chevron-right"
        size={20}
        color={getColor("neutral.100")}
      />
    </TouchableOpacity>
  );
};

const TimePicker: React.FC<{
  time: null | Date;
  onChange?: (time: Date | null) => void;
}> = ({ time, onChange }) => {
  const [show, setShow] = React.useState(false);

  const { getColor } = useTheme();

  const timeLabel = useMemo(() => {
    if (time === null) {
      return "Now";
    }

    const hours = time.getHours();
    const minutes = time.getMinutes();

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }, [time]);

  return (
    <>
      <TouchableHighlight
        style={{ borderRadius: 24 }}
        onPress={() => setShow(true)}
      >
        <View
          style={[
            styles.timePickerContainer,
            { backgroundColor: getColor("neutral.0") },
          ]}
        >
          <HeroIcon name="clock" size={20} color={getColor("neutral.100")} />

          <Text style={{ fontWeight: 500 }}>{timeLabel}</Text>
        </View>
      </TouchableHighlight>

      {show && (
        <DateTimePicker
          value={time === null ? new Date() : time}
          mode="time"
          is24Hour={true}
          onChange={(event, date) => {
            setShow(false);
            onChange?.(date ?? null);
          }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  timePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderRadius: 24,
    padding: 6,
  },
});
