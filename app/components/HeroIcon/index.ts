import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { GLYPHS } from "./GLYPHS";
import { Icon } from "@expo/vector-icons/build/createIconSet";

export const HeroIcon = createIconSetFromIcoMoon(
  require("../../../assets/heroicons/selection.json"),
  "HeroIcons",
  "solid.ttf"
) as Icon<GLYPHS, string>;
