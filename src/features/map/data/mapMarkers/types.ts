import type { IconType } from "react-icons";

export interface IMarkerData {
  id: string;
  type: string;
  label: string;
  position: [number, number];
  icon?: string | IconType;
  color?: string;
  parentId?: string;
  guideImage?: string;
  description?: string;
  routeId?: string;
  routeOrder?: number;
  sourceUrl?: string;
  author?: string;
}
