import type { IconType } from "react-icons";
import { FaEgg, FaGamepad, FaPuzzlePiece, FaBuildingColumns } from "react-icons/fa6";
import { GiSquirrel, GiOpenChest, GiOpenTreasureChest, GiBlacksmith } from "react-icons/gi";

export interface IFilterItem {
  id: string;
  label: string;
  icon: string | IconType;
}

export interface ICategoryItem {
  category: string;
  items: IFilterItem[];
}

export const COUNTABLE_TYPES = new Set([
  "world_boss",
  "puzzle",
  "marmot",
  // "chest",
  // "special_chest",
  // "squirrel",
  // "bird_egg"
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
      { id: "world_boss", label: "월드 보스", icon: "world-boss-icon-on.png" },
    ],
  },
  // {
  //   category: "채집/파밍(구현 중)",
  //   items: [
  //     { id: "squirrel", label: "다람쥐", icon: GiSquirrel },
  //     { id: "bird_egg", label: "알", icon: FaEgg },
  //   ],
  // },
  {
    category: "탐험/보물",
    items: [
      { id: "marmot", label: "미니게임", icon: FaGamepad },
      { id: "puzzle", label: "퍼즐", icon: FaPuzzlePiece },
      // { id: "chest", label: "상자", icon: GiOpenChest },
      // { id: "special_chest", label: "달의 상자", icon: GiOpenTreasureChest },
    ],
  },
];
