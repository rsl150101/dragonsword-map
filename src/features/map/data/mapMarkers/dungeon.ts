import { GENERATORS } from "../../utils/markerFactory";
import type { IMarkerData } from "./types";

export const DUNGEON_MARKER: IMarkerData[] = [
  GENERATORS.DUNGEON(1, [5838, 5282], { label: "바위 부족 기지" }),
  GENERATORS.DUNGEON(2, [6265, 5438], { label: "무너진 성역" }),
  GENERATORS.DUNGEON(3, [5613, 4830], { label: "어두운 늪지대" }),
  GENERATORS.DUNGEON(4, [5053, 5800], { label: "뒤얽힌 뿌리의 숲" }),
  GENERATORS.DUNGEON(5, [5119, 2422], { label: "녹슨 엄니 도적단 보물 창고" }),
  GENERATORS.DUNGEON(6, [3431, 3884], { label: "지하 고블린 부락" }),
  GENERATORS.DUNGEON(7, [3635, 3340], { label: "오염된 침소" }),
  GENERATORS.DUNGEON(8, [3031, 4390], { label: "해안 절벽 동굴 거점" }),
  GENERATORS.DUNGEON(9, [2877, 2675], { label: "와르그 동굴" }),
  GENERATORS.DUNGEON(10, [2599, 2460], { label: "고블린 도적단 동굴" }),
  GENERATORS.DUNGEON(11, [2535, 3474], { label: "와르그 사육장" }),
  GENERATORS.DUNGEON(12, [1941, 2708], { label: "은빛 엄니 도적단 물자 창고" }),
  GENERATORS.DUNGEON(13, [4545, 3194], { label: "송곳니 도적단 투기장" }),

  GENERATORS.MATERIAL_DUNGEON(1, [5621, 6244], { label: "거인의 흔적" }),
  GENERATORS.MATERIAL_DUNGEON(2, [2999, 1918], { label: "용 숭배자 폐허" }),
  GENERATORS.MATERIAL_DUNGEON(3, [2325, 3600], { label: "끝없는 소환지" }),
  GENERATORS.MATERIAL_DUNGEON(4, [5903, 2987], { label: "잔류 웜 청소 구역" }),
  GENERATORS.MATERIAL_DUNGEON(5, [5990, 4325], { label: "탐욕의 무덤" }),

  GENERATORS.TRAIT_DUNGEON(1, [3317, 3798], { label: "특성 던전" }),
];
