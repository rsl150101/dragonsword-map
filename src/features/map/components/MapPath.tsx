import { Fragment, memo, useMemo } from "react";
import { Polyline } from "react-leaflet";
import { useMapStore } from "../store/useMapStore";
import { MAP_MARKERS } from "../data/mapMarkers";
import { useShallow } from "zustand/shallow";

const ROUTE_COLORS: Record<string, string> = {
  squirrel: "#A6744E",
  potato: "#EFE3B2",
  blue_lotus_mushroom: "#00A5BC",
  ghost: "#DFE6E9",
  world_boss: "#FFC107",
  surprise_mission: "#FFC107",
  local_mission: "#FFC107",
  default: "#ffffff",
};

interface MapPathsProps {
  isVisible: boolean;
}

function MapPaths({ isVisible }: MapPathsProps) {
  const { selectedFilters } = useMapStore(
    useShallow((state) => ({
      selectedFilters: state.selectedFilters,
    })),
  );

  const routes = useMemo(() => {
    if (!isVisible) return {};

    const groups: Record<string, typeof MAP_MARKERS> = {};

    MAP_MARKERS.forEach((marker) => {
      if (!marker.routeId) return;
      let isVisible = false;

      if (selectedFilters.has(marker.type)) {
        isVisible = true;
      } else if (marker.parentId) {
        const parent = MAP_MARKERS.find((m) => m.id === marker.parentId);
        if (parent && selectedFilters.has(parent.type)) {
          isVisible = true;
        }
      }
      if (!isVisible) return;

      if (!groups[marker.routeId]) {
        groups[marker.routeId] = [];
      }
      groups[marker.routeId].push(marker);
    });

    Object.keys(groups).forEach((key) => {
      groups[key].sort((a, b) => (a.routeOrder || 0) - (b.routeOrder || 0));
    });

    return groups;
  }, [selectedFilters, isVisible]);
  return (
    <>
      {Object.entries(routes).map(([routeId, markers]) => {
        if (markers.length < 2) return null;

        const positions = markers.map((m) => m.position);
        const type = markers[0].type;
        const color = ROUTE_COLORS[type] || ROUTE_COLORS["default"];

        return (
          <Fragment key={routeId}>
            <Polyline
              positions={positions}
              pathOptions={{
                color: "black",
                weight: 6,
                opacity: 0.2,
                lineCap: "round",
                lineJoin: "round",
              }}
            />

            <Polyline
              key={routeId}
              positions={positions}
              pathOptions={{
                color: color,
                weight: 3,
                opacity: 1,
                dashArray: "5, 5",
                lineCap: "round",
                lineJoin: "round",
              }}
            />
          </Fragment>
        );
      })}
    </>
  );
}

export default memo(MapPaths);
