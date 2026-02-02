import styled from "styled-components";
import { FaTimes, FaCheck, FaUndo, FaExternalLinkAlt } from "react-icons/fa";
import { useShallow } from "zustand/shallow";

import { useMapStore } from "../../../store/useMapStore";
import { MAP_MARKERS } from "../data/mapMarkers";
import { COUNTABLE_TYPES, RESPAWN_TIMES } from "../data/mapFilters";
import { useRespawnTimer } from "../../../hooks/useRespawnTimer";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background: #2c323d;
  color: white;
  width: 90%;
  max-width: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  animation: popIn 0.2s ease-out;

  @keyframes popIn {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #232830;
  border-bottom: 1px solid #444;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 4px;
  &:hover {
    color: white;
  }
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const GuideImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  background: #000;
  min-height: 200px;
  object-fit: cover;
`;

const Description = styled.p`
  color: #ddd;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
`;

const SourceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
  color: #4da6ff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    color: #80c1ff;
  }
`;

const ActionButton = styled.button<{ $isCollected: boolean }>`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.2s;

  ${({ $isCollected }) =>
    $isCollected
      ? `
      background: #444;
      color: #aaa;
      &:hover { background: #555; color: white; }
    `
      : `
      background: #4caf50;
      color: white;
      &:hover { background: #43a047; }
    `}
`;

function GuideModal() {
  const { focusedMarkerId, setFocusedMarkerId, toggleCollected, collectedMarkers } = useMapStore(
    useShallow((state) => ({
      focusedMarkerId: state.focusedMarkerId,
      setFocusedMarkerId: state.setFocusedMarkerId,
      toggleCollected: state.toggleCollected,
      collectedMarkers: state.collectedMarkers,
    })),
  );

  const marker = focusedMarkerId ? MAP_MARKERS.find((m) => m.id === focusedMarkerId) : undefined;
  const collectedAt = marker ? collectedMarkers[marker.id] : undefined;
  const markerType = marker ? marker.type : "";
  const { timeLeft, isRespawned } = useRespawnTimer(collectedAt, markerType);

  if (!focusedMarkerId || !marker) return null;

  const isCountable = COUNTABLE_TYPES.has(marker.type);
  const hasRespawnTime = !!RESPAWN_TIMES[marker.type];

  const showCollectButton = isCountable || hasRespawnTime;
  const isCurrentlyCollected = !!collectedAt && !isRespawned;

  return (
    <Overlay onClick={() => setFocusedMarkerId(null)}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>{marker.label}</Title>

          <CloseButton onClick={() => setFocusedMarkerId(null)}>
            <FaTimes size={20} />
          </CloseButton>
        </Header>

        <Content>
          {marker.guideImage ? (
            <GuideImage src={marker.guideImage} alt="가이드" />
          ) : (
            <div
              style={{
                padding: "40px",
                textAlign: "center",
                background: "#333",
                borderRadius: "8px",
              }}
            >
              이미지가 없습니다.
            </div>
          )}

          {isCurrentlyCollected && timeLeft && (
            <div
              style={{
                background: "#333",
                padding: "10px",
                borderRadius: "6px",
                textAlign: "center",
                color: "#ff9800",
                fontWeight: "bold",
              }}
            >
              ⏳ {timeLeft}
            </div>
          )}

          <Description>{marker.description || "설명이 없습니다."}</Description>
          {marker.sourceUrl && (
            <SourceLink href={marker.sourceUrl} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt size={12} />
              출처: {marker.author}
            </SourceLink>
          )}

          {showCollectButton && (
            <ActionButton
              onClick={() => toggleCollected(marker.id)}
              $isCollected={isCurrentlyCollected}
            >
              {isCurrentlyCollected ? (
                <>
                  <FaUndo /> 취소
                </>
              ) : (
                <>
                  <FaCheck /> 완료
                </>
              )}
            </ActionButton>
          )}
        </Content>
      </ModalContainer>
    </Overlay>
  );
}

export default GuideModal;
