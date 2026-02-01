import { memo, useMemo } from "react";
import { Marker } from "react-leaflet";
import * as L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import type { IconType } from "react-icons";
import { FaCheck } from "react-icons/fa6";

interface IMapMarkerProps {
  position: [number, number];
  icon: string | IconType;
  isCollected: boolean;
  onClick?: (() => void) | undefined;
  size: number;
}

function MapMarker({ position, icon, isCollected, onClick, size }: IMapMarkerProps) {
  const customIcon = useMemo(() => {
    const mainIconStyle = {
      opacity: isCollected ? 0.5 : 1,
      filter: isCollected
        ? "grayscale(100%) drop-shadow(1px 1px 1px rgba(0,0,0,0.3))"
        : "drop-shadow(3px 3px 3px rgba(0,0,0,0.5))",
      transition: "all 0.3s ease",
      width: `${size}px`,
      height: `${size}px`,
    };

    const checkIconStyle: React.CSSProperties = {
      position: "absolute",
      top: "25%",
      right: "25%",
      color: "lime",
      filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.8))",
      zIndex: 10,
    };

    const wrapperStyle = {
      position: "relative" as const,
      width: `${size}px`,
      height: `${size}px`,
    };

    let iconHtmlStr = "";

    if (typeof icon === "string") {
      iconHtmlStr = renderToStaticMarkup(
        <div style={wrapperStyle}>
          <img src={icon} alt="marker" style={{ ...mainIconStyle, objectFit: "contain" }} />

          {isCollected && <FaCheck size={size * 0.5} style={checkIconStyle} />}
        </div>,
      );
    } else {
      const IconComponent = icon;
      iconHtmlStr = renderToStaticMarkup(
        <div style={wrapperStyle}>
          <div
            style={{
              ...mainIconStyle,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#80AEFE",
            }}
          >
            <IconComponent size={size - 8} />
          </div>

          {isCollected && <FaCheck size={size * 0.5} style={checkIconStyle} />}
        </div>,
      );
    }

    return new L.DivIcon({
      html: iconHtmlStr,
      className: "",
      iconSize: [size, size],
      iconAnchor: typeof icon === "string" ? [size / 2, size] : [size / 2, size / 2],
    });
  }, [icon, size, isCollected]);

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

export default memo(MapMarker, (prev, next) => {
  return (
    prev.size === next.size &&
    prev.isCollected === next.isCollected &&
    prev.icon === next.icon &&
    prev.position[0] === next.position[0] &&
    prev.position[1] === next.position[1]
  );
});
