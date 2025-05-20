import { useMemo } from "react";
import { Color, Colors, getColor } from "../constants/Colors";

export function useTheme() {
  const colors = useMemo(() => Colors, []);

  return {
    colors,
    getColor: (color: Color) => getColor(color, colors),
  };
}
