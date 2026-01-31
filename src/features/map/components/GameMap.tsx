import styled from "styled-components";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ImageOverlay, MapContainer } from "react-leaflet";
import MapMarker from "./MapMarker";
import LocationLogger from "./LocationLogger";

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
        minZoom={-2}
        maxZoom={2}
        attributionControl={false}
      >
        <LocationLogger />
        <ImageOverlay url="/map.webp" bounds={bounds} />

        <MapMarker position={[3745, 2686]} iconUrl={"castle-icon.png"} />
        <MapMarker position={[3555, 2574]} iconUrl={"merchant-group-icon.png"} />
        <MapMarker position={[3564, 2639]} iconUrl={"guild-icon.png"} />
        <MapMarker position={[3577, 2793]} iconUrl={"blacksmith-icon.png"} />
        <MapMarker position={[3612, 2840]} iconUrl={"alchemist-icon.png"} />
        <MapMarker position={[3665, 2852]} iconUrl={"cathedral-icon.png"} />
        <MapMarker position={[4471, 4342]} iconUrl={"fortress-icon.png"} />

        <MapMarker position={[3639, 2763]} iconUrl={"statue-icon.png"} />
        <MapMarker position={[3862, 3815]} iconUrl={"statue-icon.png"} />
        <MapMarker position={[2669, 3040]} iconUrl={"statue-icon.png"} />
        <MapMarker position={[3266, 2242]} iconUrl={"statue-icon.png"} />
        <MapMarker position={[5302, 5139]} iconUrl={"statue-icon.png"} />
        <MapMarker position={[4622, 2808]} iconUrl={"statue-icon.png"} />
        <MapMarker position={[1900, 3814]} iconUrl={"statue-icon.png"} />
        <MapMarker position={[1793, 2884]} iconUrl={"statue-icon.png"} />

        <MapMarker position={[3116, 2794]} iconUrl={"merchant-icon.png"} />
        <MapMarker position={[3710, 2725]} iconUrl={"merchant-icon.png"} />
        <MapMarker position={[3503, 2590]} iconUrl={"merchant-icon.png"} />
        <MapMarker position={[3649, 2613]} iconUrl={"merchant-icon.png"} />
        <MapMarker position={[1863, 3531]} iconUrl={"merchant-icon.png"} />

        <MapMarker position={[6269, 5268]} iconUrl={"warp-point-icon-on.png"} />
        <MapMarker position={[4887, 4602]} iconUrl={"warp-point-icon-on.png"} />
        <MapMarker position={[4287, 4172]} iconUrl={"warp-point-icon-on.png"} />
        <MapMarker position={[4947, 3374]} iconUrl={"warp-point-icon-on.png"} />
        <MapMarker position={[4611, 2548]} iconUrl={"warp-point-icon-on.png"} />
        <MapMarker position={[3977, 2762]} iconUrl={"warp-point-icon-on.png"} />
        <MapMarker position={[3937, 3324]} iconUrl={"warp-point-icon-on.png"} />
        <MapMarker position={[3483, 2736]} iconUrl={"warp-point-icon-on.png"} />
        <MapMarker position={[3695, 4420]} iconUrl={"warp-point-icon-on.png"} />
        <MapMarker position={[3175, 3830]} iconUrl={"warp-point-icon-on.png"} />
        <MapMarker position={[2939, 2876]} iconUrl={"warp-point-icon-on.png"} />
        <MapMarker position={[2369, 3086]} iconUrl={"warp-point-icon-on.png"} />
        <MapMarker position={[1575, 2100]} iconUrl={"warp-point-icon-on.png"} />
        <MapMarker position={[1477, 2458]} iconUrl={"warp-point-icon-on.png"} />
        <MapMarker position={[1839, 3406]} iconUrl={"warp-point-icon-on.png"} />
        <MapMarker position={[3949, 4792]} iconUrl={"warp-point-icon-on.png"} />

        <MapMarker position={[4939, 5142]} iconUrl={"windmill-icon.png"} />
        <MapMarker position={[4825, 2668]} iconUrl={"windmill-icon.png"} />
        <MapMarker position={[3479, 4850]} iconUrl={"windmill-icon.png"} />
        <MapMarker position={[2875, 2492]} iconUrl={"windmill-icon.png"} />
        <MapMarker position={[3225, 3434]} iconUrl={"windmill-icon.png"} />
        <MapMarker position={[2049, 2984]} iconUrl={"windmill-icon.png"} />

        <MapMarker position={[5838, 5282]} iconUrl={"dungeon-icon-on.png"} />
        <MapMarker position={[6265, 5438]} iconUrl={"dungeon-icon-on.png"} />
        <MapMarker position={[5563, 4830]} iconUrl={"dungeon-icon-on.png"} />
        <MapMarker position={[5053, 5800]} iconUrl={"dungeon-icon-on.png"} />
        <MapMarker position={[5119, 2422]} iconUrl={"dungeon-icon-on.png"} />
        <MapMarker position={[3431, 3884]} iconUrl={"dungeon-icon-on.png"} />
        <MapMarker position={[3605, 3350]} iconUrl={"dungeon-icon-on.png"} />
        <MapMarker position={[3031, 4390]} iconUrl={"dungeon-icon-on.png"} />
        <MapMarker position={[2867, 2662]} iconUrl={"dungeon-icon-on.png"} />
        <MapMarker position={[2599, 2460]} iconUrl={"dungeon-icon-on.png"} />
        <MapMarker position={[2535, 3474]} iconUrl={"dungeon-icon-on.png"} />
        <MapMarker position={[1941, 2708]} iconUrl={"dungeon-icon-on.png"} />
        <MapMarker position={[4545, 3194]} iconUrl={"dungeon-icon-on.png"} />

        <MapMarker position={[5621, 6244]} iconUrl={"material-dungeon-icon-on.png"} />
        <MapMarker position={[2999, 1918]} iconUrl={"material-dungeon-icon-on.png"} />
        <MapMarker position={[2325, 3600]} iconUrl={"material-dungeon-icon-on.png"} />

        <MapMarker position={[3289, 3798]} iconUrl={"trait-dungeon-icon-on.png"} />
      </StyledMapContainer>
    </WorldMapContainer>
  );
}
