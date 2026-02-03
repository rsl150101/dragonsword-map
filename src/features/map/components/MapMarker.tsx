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
  color?: string;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}

function MapMarker({
  position,
  icon,
  isCollected,
  size,
  color = "#80AEFE",
  onLeftClick,
  onRightClick,
}: IMapMarkerProps) {
  const strongOutlineStyle = "drop-shadow(0 0 2px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 1px black)";
  const subtleShadowStyle = "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))";
  const collectedFilter = "grayscale(100%) drop-shadow(1px 1px 1px rgba(0,0,0,0.3))";

  const customIcon = useMemo(() => {
    const isImage = typeof icon === "string";
    let appliedFilter = "none";

    if (isCollected) {
      appliedFilter = collectedFilter;
    } else if (isImage) {
      appliedFilter = subtleShadowStyle;
    } else {
      appliedFilter = strongOutlineStyle;
    }
    const mainIconStyle: React.CSSProperties = {
      opacity: isCollected ? 0.7 : 1,
      filter: appliedFilter,
      transition: "all 0.3s ease",
      width: `${size}px`,
      height: `${size}px`,
      objectFit: "contain",
      color: color,
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
          <img src={icon} alt="marker" style={mainIconStyle} />

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
  }, [icon, size, isCollected, color]);

  return (
    <Marker
      position={position}
      icon={customIcon}
      eventHandlers={{
        click: (e) => {
          L.DomEvent.stopPropagation(e.originalEvent);
          if (onLeftClick) onLeftClick();
        },
        contextmenu: (e) => {
          L.DomEvent.stopPropagation(e.originalEvent);
          e.originalEvent.preventDefault();
          if (onRightClick) onRightClick();
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
    prev.position[1] === next.position[1] &&
    prev.color === next.color
  );
});
