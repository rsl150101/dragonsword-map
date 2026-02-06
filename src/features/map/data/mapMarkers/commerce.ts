import { GENERATORS } from "../../utils/markerFactory";
import type { IMarkerData } from "./types";

export const COMMERCE_MARKER: IMarkerData[] = [
  GENERATORS.BUILDING(1, [3745, 2686], {
    label: "로데릭 왕궁",
    icon: "castle-icon.png",
  }),
  GENERATORS.BUILDING(2, [3555, 2574], {
    label: "밀라노 본관",
    icon: "merchant-group-icon.png",
  }),
  GENERATORS.BUILDING(3, [3564, 2639], {
    label: "앤",
    icon: "guild-icon.png",
  }),
  GENERATORS.BUILDING(4, [3665, 2852], {
    label: "안테아 대성당",
    icon: "cathedral-icon.png",
  }),
  GENERATORS.BUILDING(5, [4471, 4342], {
    label: "강철심장 요새",
    icon: "fortress-icon.png",
  }),

  GENERATORS.WORKSHOP(1, [3577, 2793], {
    label: "모단",
    icon: "blacksmith-icon.png",
  }),
  GENERATORS.WORKSHOP(2, [3612, 2840], {
    label: "샤노아",
    icon: "alchemist-icon.png",
  }),

  GENERATORS.MERCHANT(1, [3116, 2794], {
    label: "하벤 <요리 재료 상인>",
    icon: "merchant-icon.png",
  }),
  GENERATORS.MERCHANT(2, [3710, 2725], {
    label: "파론 <레이드 교환 상인>",
    icon: "merchant-icon.png",
  }),
  GENERATORS.MERCHANT(3, [3503, 2590], { label: "클로니 <일반 상인>", icon: "merchant-icon.png" }),
  GENERATORS.MERCHANT(4, [3649, 2613], {
    label: "에레나 <요리 재료 상인>",
    icon: "merchant-icon.png",
  }),
  GENERATORS.MERCHANT(5, [1863, 3531], {
    label: "리지 <요리 재료 상인>",
    icon: "merchant-icon.png",
  }),
];
