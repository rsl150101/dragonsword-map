import { GENERATORS } from "../../utils/markerFactory";
import type { IMarkerData } from "./types";

export const WAYPOINT_MARKER: IMarkerData[] = [
  GENERATORS.WAYPOINT_GHOST(1, [2862, 1861], {
    parentId: "ghost_1",
    routeId: "ghost_west_1",
  }),
  GENERATORS.WAYPOINT_GHOST(2, [4840, 3834], {
    parentId: "ghost_2",
    routeId: "ghost_north_1",
  }),
  GENERATORS.WAYPOINT_GHOST(3, [5548, 6239], { parentId: "ghost_3", routeId: "ghost_ne_1" }),
  GENERATORS.WAYPOINT_GHOST(4, [2024, 4188], { parentId: "ghost_4", routeId: "ghost_south_1" }),
  GENERATORS.WAYPOINT_GHOST(5, [1374, 2392], { parentId: "ghost_5", routeId: "ghost_sw_1" }),

  GENERATORS.WAYPOINT_SURPRISE_MISSION(1, [2550, 2647], {
    parentId: "surprise_mission_9",
    routeId: "surprise_mission_resca",
  }),

  GENERATORS.WAYPOINT_PUZZLE(1, [3023, 3647], {
    parentId: "puzzle_38",
    routeId: "puzzle_center_1",
  }),

  GENERATORS.WAYPOINT_SPECIAL_CHEST(1, [2291, 3356], {
    parentId: "special_chest_11",
    routeId: "special_chest_south_1",
  }),
  // GENERATORS.WAYPOINT_TREASURE_CHEST(1,[3025, 3923],{parentId: "treasure_chest_1, routeId: "treasure_chest_south_1", routeOrder:1}),
  // GENERATORS.WAYPOINT_TREASURE_CHEST(2,[2969, 4088],{parentId: "treasure_chest_1, routeId: "treasure_chest_south_1", routeOrder:2}),

  GENERATORS.WAYPOINT_OBLIVION_CRYSTAL(1, [2771, 3356], {
    parentId: "oblivion_crystal_1",
    routeId: "oblivion_crystal_ce_1",
    routeOrder: 1,
  }),
  GENERATORS.WAYPOINT_OBLIVION_CRYSTAL(2, [2701, 3458], {
    parentId: "oblivion_crystal_2",
    routeId: "oblivion_crystal_ce_1",
    routeOrder: 4,
  }),
  GENERATORS.WAYPOINT_OBLIVION_CRYSTAL(3, [2684, 2675], {
    parentId: "oblivion_crystal_4",
    routeId: "oblivion_crystal_cw_1",
    routeOrder: 5,
  }),
  GENERATORS.WAYPOINT_OBLIVION_CRYSTAL(4, [2591, 2636], {
    parentId: "oblivion_crystal_5",
    routeId: "oblivion_crystal_cw_2",
  }),
  GENERATORS.WAYPOINT_OBLIVION_CRYSTAL(5, [4078, 2707], {
    parentId: "oblivion_crystal_6",
    routeId: "oblivion_crystal_nw_1",
  }),
  GENERATORS.WAYPOINT_OBLIVION_CRYSTAL(6, [4845, 2703], {
    parentId: "oblivion_crystal_7",
    routeId: "oblivion_crystal_nw_2",
  }),
  GENERATORS.WAYPOINT_OBLIVION_CRYSTAL(7, [4604, 2717], {
    parentId: "oblivion_crystal_10",
    routeId: "oblivion_crystal_nw_2",
    routeOrder: 13,
  }),
];
