import { useState } from "react";
import * as L from "leaflet";
import { Marker, Popup, useMapEvents } from "react-leaflet";

function LocationLogger() {
  const [position, setPosition] = useState<L.LatLng | null>(null);

  useMapEvents({
    click: (e) => {
      setPosition(e.latlng);
    },
  });

  if (position === null) return null;
  return (
    <Marker position={position}>
      <Popup>
        좌표: {Math.floor(position.lat)}, {Math.floor(position.lng)}
      </Popup>
    </Marker>
  );
}

export default LocationLogger;
