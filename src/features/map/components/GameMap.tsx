import styled from "styled-components";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ImageOverlay, MapContainer } from "react-leaflet";

const WorldMapContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #141921;
`;

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const mapWidth = 7430;
const mapHeight = 7992;
const bounds: L.LatLngBoundsExpression = [
  [0, 0],
  [mapHeight, mapWidth],
];

export function GameMap() {
  return (
    <WorldMapContainer>
      <StyledMapContainer
        crs={L.CRS.Simple}
        bounds={bounds}
        maxBounds={bounds}
        center={[mapHeight / 2, mapWidth / 2]}
        zoom={-1}
        minZoom={-3}
        maxZoom={2}
        attributionControl={false}
      >
        <ImageOverlay url="/map.webp" bounds={bounds} />
      </StyledMapContainer>
    </WorldMapContainer>
  );
}
