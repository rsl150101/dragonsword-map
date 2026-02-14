import { useState } from "react";
import { useMapEvents } from "react-leaflet";
import styled from "styled-components";
import { useMapStore } from "../store/useMapStore";
import * as L from "leaflet";

const ContextMenuContainer = styled.div<{ $x: number; $y: number }>`
  position: fixed;
  top: ${(props) => props.$y}px;
  left: ${(props) => props.$x}px;
  background: #2a2a2a;
  border: 1px solid #444;
  border-radius: 4px;
  padding: 8px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 120px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  color: white;

  button {
    background: transparent;
    border: none;
    color: white;
    text-align: left;
    padding: 8px;
    cursor: pointer;
    &:hover {
      background: #444;
    }
  }
`;

export function MapContextMenu() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [mapLatLng, setMapLatLng] = useState<[number, number] | null>(null);
  const setCreatingMarkerPos = useMapStore((state) => state.setCreatingMarkerPos);

  useMapEvents({
    contextmenu(e) {
      const intLat = Math.trunc(e.latlng.lat);
      const intLng = Math.trunc(e.latlng.lng);
      setPosition({ x: e.originalEvent.clientX, y: e.originalEvent.clientY });
      setMapLatLng([intLat, intLng]);
    },
    click() {
      setPosition(null);
    },
    dragstart() {
      setPosition(null);
    },
  });

  const handleOpenAddModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!mapLatLng) return;

    setCreatingMarkerPos(mapLatLng);
    setPosition(null);
  };

  if (!position) return null;

  return (
    <ContextMenuContainer
      $x={position.x}
      $y={position.y}
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
      ref={(ref) => {
        if (ref) {
          L.DomEvent.disableClickPropagation(ref);
          L.DomEvent.disableScrollPropagation(ref);
        }
      }}
    >
      <button onClick={handleOpenAddModal}>여기에 마커 추가</button>
    </ContextMenuContainer>
  );
}
