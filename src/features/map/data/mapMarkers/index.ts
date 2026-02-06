import { COMMERCE_MARKER } from "./commerce";
import { DUNGEON_MARKER } from "./dungeon";
import { EXPLORATION_MARKER } from "./exploration";
import { FAMILIAR_MARKER } from "./familiar";
import { INGREDIENTS_MARKER } from "./ingredients";
import { MINERAL_MARKER } from "./mineral";
import { TRANSPORT_MARKER } from "./transport";
import { WAYPOINT_MARKER } from "./waypoint";
import { WEEKLY_MARKER } from "./weekly";

export const MAP_MARKERS = [
  ...TRANSPORT_MARKER,
  ...COMMERCE_MARKER,
  ...DUNGEON_MARKER,
  ...EXPLORATION_MARKER,
  ...WEEKLY_MARKER,
  ...INGREDIENTS_MARKER,
  ...FAMILIAR_MARKER,
  ...MINERAL_MARKER,
  ...WAYPOINT_MARKER,
];
