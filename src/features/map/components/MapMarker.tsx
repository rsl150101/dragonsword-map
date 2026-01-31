import { useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import * as L from "leaflet";

interface MapMarkerProps {
  position: [number, number];
  iconUrl: string;
}

function MapMarker({ position, iconUrl }: MapMarkerProps) {
  const [currentSize, setCurrentSize] = useState(40);

  useMapEvents({
    zoomanim: (e) => {
      const targetZoom = e.zoom;
      const newSize = 32 + (targetZoom + 2) * 8;

      setCurrentSize(newSize);
    },
  });

  const customIcon = new L.Icon({
    iconUrl: iconUrl,
    iconSize: [currentSize, currentSize],
    iconAnchor: [currentSize / 2, currentSize],
  });

  return <Marker position={position} icon={customIcon} />;
}

export default MapMarker;
