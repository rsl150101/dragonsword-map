import styled from "styled-components";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ImageOverlay, MapContainer, useMapEvents } from "react-leaflet";
import { useEffect, useMemo, useState } from "react";
import { useShallow } from "zustand/shallow";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet.markercluster";

import MapMarker from "./MapMarker";
import CustomZoomControl from "./CustomZoomControl";
import { useMapStore } from "../store/useMapStore";
import { MAP_MARKERS } from "../data/mapMarkers";
import { COUNTABLE_TYPES, FILTER_DATA, getColorForType, RESPAWN_TIMES } from "../data/mapFilters";
import MapPaths from "./MapPath";
import { MapContextMenu } from "./MapContextMenu";
import { AddMarkerModal } from "./AddMarkerModal";
import { FaStar } from "react-icons/fa";

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

  @media (max-width: 768px) {
    display: none;
  }
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
  const [now, setNow] = useState(() => Date.now());
  const showPaths = currentZoom >= -1;
  const {
    selectedFilters,
    collectedMarkers,
    toggleCollected,
    setFocusedMarkerId,
    refreshCollectedMarkers,
    customMarkers,
  } = useMapStore(
    useShallow((state) => ({
      selectedFilters: state.selectedFilters,
      collectedMarkers: state.collectedMarkers,
      toggleCollected: state.toggleCollected,
      setFocusedMarkerId: state.setFocusedMarkerId,
      refreshCollectedMarkers: state.refreshCollectedMarkers,
      customMarkers: state.customMarkers,
    })),
  );

  useEffect(() => {
    refreshCollectedMarkers();

    const uiTimer = setInterval(() => {
      setNow(Date.now());
      refreshCollectedMarkers();
    }, 1000);

    return () => clearInterval(uiTimer);
  }, [refreshCollectedMarkers]);

  const markerSize = 32 + (currentZoom + 1) * 8;

  const createCustomClusterIcon = (cluster: L.MarkerCluster) => {
    const count = cluster.getChildCount();

    let size = 40;
    if (count > 10) size = 50;
    if (count > 50) size = 60;

    return new L.DivIcon({
      html: `<span>${count}</span>`,
      className: "custom-cluster-icon",
      iconSize: L.point(size, size, true),
    });
  };

  const checkIsCollected = (id: string, type: string) => {
    const timestamp = collectedMarkers[id];
    if (!timestamp) return false;

    const duration = RESPAWN_TIMES[type];
    if (!duration) return true;

    return now < timestamp + duration;
  };

  const dynamicRadius = useMemo(() => {
    if (currentZoom >= -1) return 10;
    return 60;
  }, [currentZoom]);

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
        <MapContextMenu />
        <MapEvents onZoomChange={setCurrentZoom} />
        <ImageOverlay url="/map.webp" bounds={bounds} />
        <MapPaths isVisible={showPaths} />
        <MarkerClusterGroup
          key={dynamicRadius}
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
          maxClusterRadius={dynamicRadius}
          showCoverageOnHover={false}
        >
          {MAP_MARKERS.map((marker) => {
            let isCollected = false;
            let isVisible = false;
            let parentMarker = undefined;

            if (marker.parentId) {
              parentMarker = MAP_MARKERS.find((m) => m.id === marker.parentId);
              if (parentMarker && selectedFilters.has(parentMarker.type)) {
                isVisible = true;
              }
            } else {
              if (selectedFilters.has(marker.type)) {
                isVisible = true;
              }
            }
            if (!isVisible) return null;

            const iconUrl = marker.icon || getIconForType(marker.type);
            const markerColor = marker.color || getColorForType(marker.type);

            if (parentMarker) {
              isCollected = checkIsCollected(parentMarker.id, parentMarker.type);
            } else {
              isCollected = checkIsCollected(marker.id, marker.type);
            }

            const isWaypoint = !!marker.parentId;

            const onRightClick = isWaypoint
              ? undefined
              : COUNTABLE_TYPES.has(marker.type) || RESPAWN_TIMES[marker.type]
                ? () => toggleCollected(marker.id)
                : undefined;

            const displaySize = isWaypoint ? markerSize * 0.5 : markerSize;

            return (
              <MapMarker
                key={marker.id}
                position={marker.position}
                icon={iconUrl}
                color={markerColor}
                isCollected={isCollected}
                onLeftClick={() => setFocusedMarkerId(marker.parentId || marker.id)}
                onRightClick={onRightClick ? () => toggleCollected(marker.id) : undefined}
                size={displaySize}
              />
            );
          })}
          {customMarkers.map((marker) => (
            <MapMarker
              key={marker.id}
              position={marker.position}
              icon={marker.icon || FaStar}
              isCollected={false}
              size={markerSize}
              color={"#FFD700"}
              onLeftClick={() => setFocusedMarkerId(marker.id)}
            />
          ))}
        </MarkerClusterGroup>
      </StyledMapContainer>
      <ControllerWrapper>{map && <CustomZoomControl map={map} />}</ControllerWrapper>
      <AddMarkerModal />
    </WorldMapContainer>
  );
}
