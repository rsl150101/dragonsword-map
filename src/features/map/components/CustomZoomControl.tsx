import { useEffect, useState } from "react";
import type { Map, ZoomAnimEvent } from "leaflet";
import { FaPlus, FaMinus } from "react-icons/fa6";
import styled from "styled-components";

const ControllerContainer = styled.div`
  z-index: 1000;
  display: "flex";
  flex-direction: "column";
  align-items: "center";
  gap: "5px";
  user-select: none;
`;

const ControllerBtn = styled.div`
  width: 30px;
  height: 30px;
  background: #fff;
  border: 2px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
`;

const ControllerBarWrapper = styled.div`
  width: 30px;
  height: 100px;
  background: #ddd;
  border-radius: 5px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid #999;
`;

interface ICustomZoomControl {
  map: Map;
}

function CustomZoomControl({ map }: ICustomZoomControl) {
  const [zoom, setZoom] = useState(() => map.getZoom());

  useEffect(() => {
    const handleZoomAnim = (e: ZoomAnimEvent) => {
      setZoom(e.zoom);
    };

    const handleZoomEnd = () => {
      setZoom(map.getZoom());
    };

    map.on("zoomanim", handleZoomAnim);
    map.on("zoomend", handleZoomEnd);

    return () => {
      map.off("zoomanim", handleZoomAnim);
      map.off("zoomend", handleZoomEnd);
    };
  }, [map]);

  const percentage = (zoom + 2) * 25;

  return (
    <ControllerContainer>
      <ControllerBtn onClick={() => map.zoomIn()}>
        <FaPlus />
      </ControllerBtn>

      <ControllerBarWrapper>
        <div
          style={{
            width: "100%",
            height: `${percentage}%`,
            background: "#fff",
            transition: "height 0.2s",
          }}
        />
      </ControllerBarWrapper>

      <ControllerBtn onClick={() => map.zoomOut()}>
        <FaMinus />
      </ControllerBtn>
    </ControllerContainer>
  );
}

export default CustomZoomControl;
