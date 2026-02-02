import { useState, useEffect, useRef, useMemo } from "react";
import * as L from "leaflet";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { renderToString } from "react-dom/server";
import { FaMapMarkerAlt, FaRegCopy, FaCheck } from "react-icons/fa";

const iconStyle = `
  .logger-icon {
    background: transparent !important;
    border: none !important;
  }
  
  .leaflet-popup-content-wrapper, .leaflet-popup-tip {
    pointer-events: none !important; 
    opacity: 0.9; 
  }

  .popup-content-inner {
    pointer-events: auto !important;
  }

  .copy-btn {
    background: #4caf50;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    margin-top: 8px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    transition: background 0.2s;
    pointer-events: auto !important; 
  }
  .copy-btn:hover {
    background: #43a047;
  }
  .copy-btn.done {
    background: #333;
    color: #fff;
    cursor: default;
  }
`;

function LocationLogger() {
  const [position, setPosition] = useState<L.LatLng | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const markerRef = useRef<L.Marker>(null);

  const customIcon = useMemo(() => {
    return L.divIcon({
      html: renderToString(
        <div style={{ filter: "drop-shadow(3px 3px 2px rgba(0,0,0,0.4))" }}>
          <FaMapMarkerAlt size={40} color="#ff3333" />
        </div>,
      ),
      className: "logger-icon",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });
  }, []);

  useMapEvents({
    click: (e) => {
      setPosition(e.latlng);
      setIsCopied(false);
    },
  });

  useEffect(() => {
    if (position && markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [position]);

  const handleCopy = () => {
    if (!position) return;
    const textToCopy = `${Math.floor(position.lat)}, ${Math.floor(position.lng)}`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  if (position === null) return null;

  return (
    <>
      <style>{iconStyle}</style>
      <Marker position={position} icon={customIcon} ref={markerRef} interactive={false}>
        <Popup autoPan={false} closeButton={false}>
          <div className="popup-content-inner" style={{ textAlign: "center", minWidth: "140px" }}>
            <div style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "4px" }}>
              선택한 위치
            </div>
            <div style={{ fontSize: "14px", color: "#555" }}>
              {Math.floor(position.lat)}, {Math.floor(position.lng)}
            </div>
            <button onClick={handleCopy} className={`copy-btn ${isCopied ? "done" : ""}`}>
              {isCopied ? (
                <>
                  <FaCheck /> 복사 완료!
                </>
              ) : (
                <>
                  <FaRegCopy /> 좌표 복사
                </>
              )}
            </button>
          </div>
        </Popup>
      </Marker>
    </>
  );
}

export default LocationLogger;
