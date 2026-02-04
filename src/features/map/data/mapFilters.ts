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
} from "react-icons/gi";
import { RiFilePaper2Fill } from "react-icons/ri";
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
  // "chest",
  // "special_chest",
  // "squirrel",
  // "bird_egg"
]);

export const RESPAWN_TIMES: Record<string, number> = {
  squirrel: 12 * 60 * 60 * 1000,
  potato: 4 * 60 * 60 * 1000,
  bird_egg: 4 * 60 * 60 * 1000,
  blue_lotus_mushroom: 4 * 60 * 60 * 1000,
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
    category: "이동/거점",
    items: [
      { id: "warp", label: "워프포인트", icon: "warp-point-icon-on.png" },
      { id: "statue", label: "여신상", icon: "statue-icon.png" },
      { id: "merchant", label: "상점", icon: "merchant-icon-on.png" },
      { id: "windmill", label: "에오나", icon: "windmill-icon.png" },
      { id: "building", label: "건물", icon: FaBuildingColumns },
      { id: "workshop", label: "공방", icon: GiBlacksmith },
    ],
  },
  {
    category: "던전/전투",
    items: [
      { id: "dungeon", label: "일반 던전", icon: "dungeon-icon-on.png" },
      { id: "material_dungeon", label: "재화 던전", icon: "material-dungeon-icon-on.png" },
      { id: "trait_dungeon", label: "특성 던전", icon: "trait-dungeon-icon-on.png" },
    ],
  },
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
    category: "채집/파밍",
    items: [
      { id: "squirrel", label: "다람쥐", icon: GiSquirrel, color: "#FF9F43" },
      { id: "potato", label: "감자", icon: GiPotato, color: "#F8EFBA" },
      { id: "blue_lotus_mushroom", label: "푸른 연꽃 버섯", icon: GiMushrooms, color: "#00D2D3" },
      // { id: "bird_egg", label: "알", icon: FaEgg },
    ],
  },
  {
    category: "탐험/보물",
    items: [
      { id: "marmot", label: "미니게임", icon: FaGamepad, color: "#FF7675" },
      { id: "puzzle", label: "퍼즐", icon: FaPuzzlePiece, color: "#A29BFE" },
      // { id: "chest", label: "상자", icon: GiOpenChest , color: "#FFD700"},
      // { id: "special_chest", label: "달의 상자", icon: GiOpenTreasureChest, color: "#74B9FF" },
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
