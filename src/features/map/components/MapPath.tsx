import { memo, useMemo } from "react";
import { Polyline } from "react-leaflet";
import { useMapStore } from "../store/useMapStore";
import { MAP_MARKERS } from "../data/mapMarkers";
import { useShallow } from "zustand/shallow";

const ROUTE_COLORS: Record<string, string> = {
  squirrel: "#A6744E",
  potato: "#EFE3B2",
  blue_lotus_mushroom: "#00A5BC",
  default: "#ffffff",
};

function MapPaths() {
  const { selectedFilters } = useMapStore(
    useShallow((state) => ({
      selectedFilters: state.selectedFilters,
    })),
  );

  const routes = useMemo(() => {
    const groups: Record<string, typeof MAP_MARKERS> = {};

    MAP_MARKERS.forEach((marker) => {
      if (!marker.routeId || !selectedFilters.has(marker.type)) return;

      if (!groups[marker.routeId]) {
        groups[marker.routeId] = [];
      }
      groups[marker.routeId].push(marker);
    });

    Object.keys(groups).forEach((key) => {
      groups[key].sort((a, b) => (a.routeOrder || 0) - (b.routeOrder || 0));
    });

    return groups;
  }, [selectedFilters]);
  return (
    <>
      {Object.entries(routes).map(([routeId, markers]) => {
        if (markers.length < 2) return null;

        const positions = markers.map((m) => m.position);

        const type = markers[0].type;
        const color = ROUTE_COLORS[type] || ROUTE_COLORS["default"];

        return (
          <Polyline
            key={routeId}
            positions={positions}
            pathOptions={{
              color: color,
              weight: 3,
              opacity: 0.8,
              dashArray: "5, 5",
              lineCap: "round",
              lineJoin: "round",
            }}
          />
        );
      })}
    </>
  );
}

export default memo(MapPaths);
