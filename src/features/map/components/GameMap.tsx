import styled from "styled-components";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ImageOverlay, MapContainer, useMapEvents } from "react-leaflet";
import { useState } from "react";

import MapMarker from "./MapMarker";
import LocationLogger from "./LocationLogger";
import CustomZoomControl from "./CustomZoomControl";
import { useMapStore } from "../../../store/useMapStore";
import { MAP_MARKERS } from "../data/mapMarkers";
import { COUNTABLE_TYPES, FILTER_DATA } from "../data/mapFilters";
import { useShallow } from "zustand/shallow";

const WorldMapContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #141921;
`;

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 100%;
  background-color: transparent;
  flex: 1;
  position: relative;
`;

const ControllerWrapper = styled.div`
  width: 60px;
  background: transparent;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const mapWidth = 7430;
const mapHeight = 7992;
const bounds: L.LatLngBoundsExpression = [
  [0, 0],
  [mapHeight, mapWidth],
];

const getIconForType = (type: string) => {
  for (const category of FILTER_DATA) {
    const item = category.items.find((i) => i.id === type);
    if (item) return item.icon;
  }
  return "";
};

function MapEvents({ onZoomChange }: { onZoomChange: (zoom: number) => void }) {
  useMapEvents({
    zoomanim: (e) => {
      onZoomChange(e.zoom);
    },
    zoomend: (e) => {
      onZoomChange(e.target.getZoom());
    },
  });
  return null;
}

export function GameMap() {
  const [map, setMap] = useState<L.Map | null>(null);
  const [currentZoom, setCurrentZoom] = useState(-1);

  const { selectedFilters, collectedMarkers, toggleCollected } = useMapStore(
    useShallow((state) => ({
      selectedFilters: state.selectedFilters,
      collectedMarkers: state.collectedMarkers,
      toggleCollected: state.toggleCollected,
    })),
  );

  const markerSize = 32 + (currentZoom + 2) * 8;

  return (
    <WorldMapContainer>
      <StyledMapContainer
        ref={(element) => setMap(element)}
        crs={L.CRS.Simple}
        bounds={bounds}
        maxBounds={bounds}
        center={[mapHeight / 2, mapWidth / 2]}
        zoom={-1}
        minZoom={-3}
        maxZoom={1}
        attributionControl={false}
        zoomControl={false}
        doubleClickZoom={false}
      >
        <MapEvents onZoomChange={setCurrentZoom} />
        <LocationLogger />
        <ImageOverlay url="/map.webp" bounds={bounds} />

        {MAP_MARKERS.map((marker) => {
          if (!selectedFilters.has(marker.type)) {
            return null;
          }

          const iconUrl = marker.icon || getIconForType(marker.type);

          const isCollected = collectedMarkers.includes(marker.id);
          const isCountable = COUNTABLE_TYPES.has(marker.type);

          return (
            <MapMarker
              key={marker.id}
              position={marker.position}
              icon={iconUrl}
              isCollected={isCollected}
              onClick={isCountable ? () => toggleCollected(marker.id) : undefined}
              size={markerSize}
            />
          );
        })}
      </StyledMapContainer>
      <ControllerWrapper>{map && <CustomZoomControl map={map} />}</ControllerWrapper>
    </WorldMapContainer>
  );
}
