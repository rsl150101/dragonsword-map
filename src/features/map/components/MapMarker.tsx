import { useMemo, useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import * as L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import type { IconType } from "react-icons";

interface IMapMarkerProps {
  position: [number, number];
  icon: string | IconType;
}

function MapMarker({ position, icon }: IMapMarkerProps) {
  const [currentSize, setCurrentSize] = useState(40);

  useMapEvents({
    zoomanim: (e) => {
      const targetZoom = e.zoom;
      const newSize = 32 + (targetZoom + 2) * 8;

      setCurrentSize(newSize);
    },
  });

  const customIcon = useMemo(() => {
    if (typeof icon === "string") {
      return new L.Icon({
        iconUrl: icon,
        iconSize: [currentSize, currentSize],
        iconAnchor: [currentSize / 2, currentSize],
      });
    } else {
      const IconComponent = icon;

      const iconHtml = renderToStaticMarkup(
        <div
          style={{
            color: "#80AEFE",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.5))",
          }}
        >
          <IconComponent size={currentSize} />
        </div>,
      );

      return new L.DivIcon({
        html: iconHtml,
        className: "custom-react-marker",
        iconSize: [currentSize - 8, currentSize - 8],
        iconAnchor: [(currentSize - 8) / 2, currentSize - 8],
      });
    }
  }, [icon, currentSize]);

  return <Marker position={position} icon={customIcon} />;
}

export default MapMarker;
