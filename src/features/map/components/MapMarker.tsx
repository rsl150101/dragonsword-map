import { useMemo, useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import * as L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import type { IconType } from "react-icons";

interface IMapMarkerProps {
  position: [number, number];
  icon: string | IconType;
  isCollected: boolean;
  onClick?: (() => void) | undefined;
}

function MapMarker({ position, icon, isCollected, onClick }: IMapMarkerProps) {
  const [currentSize, setCurrentSize] = useState(40);

  useMapEvents({
    zoomanim: (e) => {
      const targetZoom = e.zoom;
      const newSize = 32 + (targetZoom + 2) * 8;

      setCurrentSize(newSize);
    },
  });

  const customIcon = useMemo(() => {
    const commonStyle = {
      opacity: isCollected ? 0.8 : 1,
      filter: isCollected
        ? "grayscale(100%) drop-shadow(1px 1px 1px rgba(0,0,0,0.3))"
        : "drop-shadow(3px 3px 3px rgba(0,0,0,0.5))",
      transition: "all 0.3s ease",
    };

    if (typeof icon === "string") {
      const imgHtml = renderToStaticMarkup(
        <img
          src={icon}
          alt="marker"
          style={{
            ...commonStyle,
            width: `${currentSize}px`,
            height: `${currentSize}px`,
            objectFit: "contain",
          }}
        />,
      );

      return new L.DivIcon({
        html: imgHtml,
        className: "",
        iconSize: [currentSize, currentSize],
        iconAnchor: [currentSize / 2, currentSize],
      });
    } else {
      const IconComponent = icon;

      const iconHtml = renderToStaticMarkup(
        <div
          style={{
            ...commonStyle,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#80AEFE",
            width: `${currentSize - 8}px`,
            height: `${currentSize - 8}px`,
          }}
        >
          <IconComponent size={currentSize} />
        </div>,
      );

      return new L.DivIcon({
        html: iconHtml,
        className: "",
        iconSize: [currentSize - 8, currentSize - 8],
        iconAnchor: [currentSize / 2, currentSize / 2],
      });
    }
  }, [icon, currentSize, isCollected]);

  return (
    <Marker
      position={position}
      icon={customIcon}
      eventHandlers={{
        click: (e) => {
          L.DomEvent.stopPropagation(e.originalEvent);
          if (onClick) onClick();
        },
      }}
    />
  );
}

export default MapMarker;
