import type { IconType } from "react-icons";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEgg, FaGamepad, FaPuzzlePiece, FaBuildingColumns } from "react-icons/fa6";
import {
  GiSquirrel,
  GiOpenChest,
  GiOpenTreasureChest,
  GiBlacksmith,
  GiPotato,
  GiMushrooms,
  GiBrute,
  GiCrackedDisc,
  GiPlantSeed,
  GiTomato,
  GiMinerals,
} from "react-icons/gi";
import { RiFilePaper2Fill, RiTreasureMapFill } from "react-icons/ri";
import { TbGhost2Filled } from "react-icons/tb";

export interface IFilterItem {
  id: string;
  label: string;
  icon: string | IconType;
  color?: string;
}

export interface ICategoryItem {
  category: string;
  items: IFilterItem[];
}

export const COUNTABLE_TYPES = new Set([
  "world_boss",
  "puzzle",
  "marmot",
  "local_mission",
  "surprise_mission",
  "ghost",
  "crack",
  "special_chest",
  // "chest",
  "squirrel",
  // "bird_egg"
]);

export const RESPAWN_TIMES: Record<string, number> = {
  squirrel: 12 * 60 * 60 * 1000,
  potato: 4 * 60 * 60 * 1000,
  bird_egg: 4 * 60 * 60 * 1000,
  goose_egg: 4 * 60 * 60 * 1000,
  blue_lotus_mushroom: 4 * 60 * 60 * 1000,
  round_eggplant: 4 * 60 * 60 * 1000,
  leaf_tomato: 4 * 60 * 60 * 1000,
  memories_crystal: 4 * 60 * 60 * 1000,
  recollection_crystal: 4 * 60 * 60 * 1000,
  remembrance_crystal: 4 * 60 * 60 * 1000,
  oblivion_crystal: 4 * 60 * 60 * 1000,
};

export const WEEKLY_RESET_TYPES = new Set([
  "world_boss",
  "crack",
  "local_mission",
  "ghost",
  "surprise_mission",
]);

export const FILTER_DATA: ICategoryItem[] = [
  {
    category: "주간 숙제",
    items: [
      { id: "world_boss", label: "월드 보스", icon: "world-boss-icon-on.png" },
      { id: "crack", label: "균열", icon: GiCrackedDisc, color: "#8E44AD" },
      { id: "surprise_mission", label: "돌발 임무", icon: GiBrute, color: "#FF5252" },
      { id: "local_mission", label: "지역 임무", icon: RiFilePaper2Fill, color: "#FFC107" },
      { id: "ghost", label: "유령", icon: TbGhost2Filled, color: "#DFE6E9" },
    ],
  },
  {
    category: "탐험/보물",
    items: [
      { id: "marmot", label: "미니게임", icon: FaGamepad, color: "#FF7675" },
      { id: "puzzle", label: "퍼즐", icon: FaPuzzlePiece, color: "#A29BFE" },
      // { id: "chest", label: "상자", icon: GiOpenChest , color: "#FFD700"},
      // { id: "treasure_chest", label: "상자", icon: RiTreasureMapFill , color: "#DAB88B"},
      { id: "special_chest", label: "달의 상자", icon: GiOpenTreasureChest, color: "#C084FC" },
    ],
  },
  {
    category: "퍼밀리어",
    items: [{ id: "squirrel", label: "다람쥐", icon: GiSquirrel, color: "#A6744E" }],
  },
  {
    category: "식재료",
    items: [
      { id: "potato", label: "감자", icon: GiPotato, color: "#F8EFBA" },
      { id: "blue_lotus_mushroom", label: "푸른 연꽃 버섯", icon: GiMushrooms, color: "#00D2D3" },
      { id: "goose_egg", label: "거위 알", icon: FaEgg, color: "#F7F1E3" },
      { id: "round_eggplant", label: "동글가지", icon: GiPlantSeed, color: "#A55EEA" },
      { id: "leaf_tomato", label: "잎새 토마토", icon: GiTomato, color: "#FC5C65" },
    ],
  },
  {
    category: "채광",
    items: [
      { id: "memories_crystal", label: "추억의 결정", icon: GiMinerals, color: "#FF0000" },
      { id: "recollection_crystal", label: "회상의 결정", icon: GiMinerals, color: "#F39C12" },
      { id: "remembrance_crystal", label: "기억의 결정", icon: GiMinerals, color: "#00D8FF" },
      { id: "oblivion_crystal", label: "망각의 결정", icon: GiMinerals, color: "#4834D4" },
    ],
  },
  {
    category: "이동/거점",
    items: [
      { id: "warp", label: "워프포인트", icon: "warp-point-icon-on.png" },
      { id: "statue", label: "여신상", icon: "statue-icon.png" },
      { id: "merchant", label: "상점", icon: "merchant-icon-on.png" },
      { id: "windmill", label: "에오나", icon: "windmill-icon.png" },
      { id: "building", label: "건물", icon: FaBuildingColumns, color: "#95A5A6" },
      { id: "workshop", label: "공방", icon: GiBlacksmith, color: "#A52A2A" },
    ],
  },
  {
    category: "던전",
    items: [
      { id: "dungeon", label: "일반 던전", icon: "dungeon-icon-on.png" },
      { id: "material_dungeon", label: "재화 던전", icon: "material-dungeon-icon-on.png" },
      { id: "trait_dungeon", label: "특성 던전", icon: "trait-dungeon-icon-on.png" },
    ],
  },
];

const COLOR_MAP: Record<string, string> = {};
const ICON_MAP: Record<string, IconType | string> = {};

FILTER_DATA.forEach((category) => {
  category.items.forEach((item) => {
    COLOR_MAP[item.id] = item.color || "#FFFFFF";
    ICON_MAP[item.id] = item.icon;
  });
});

/**
 * 마커 타입(ID)에 해당하는 색상을 반환합니다.
 * @param type 마커의 type ID (예: 'chest_common')
 * @returns Hex Color String (기본값: 흰색)
 */
export const getColorForType = (type: string): string => {
  return COLOR_MAP[type] || "#FFFFFF";
};

/**
 * 마커 타입(ID)에 해당하는 아이콘을 반환합니다.
 * @param type 마커의 type ID
 * @returns React Icon Component 또는 이미지 경로
 */
export const getIconForType = (type: string): IconType | string => {
  return ICON_MAP[type] || FaMapMarkerAlt;
};
