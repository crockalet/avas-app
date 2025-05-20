import { get } from "lodash-es";
import { NestedKeyOf } from "@app/types/NestedKeyOf";

export const Colors = {
  primary: {
    10: "#DFE8E7",
    50: "#C3D8D8",
    100: "#05161D",
  },
  neutral: {
    0: "#F6F6F6",
    10: "#EEEEEE",
    70: "#737574",
    100: "#060606",
  },
};

export type Color = NestedKeyOf<typeof Colors>;

export function getColor(color: Color, colors: typeof Colors = Colors) {
  return get(colors, color);
}
