import { useState } from "react";
import styled from "styled-components";
import { FaDownload, FaUpload, FaTrash, FaCopy, FaTimes } from "react-icons/fa";
import { useMapStore } from "../../features/map/store/useMapStore";
import { useToastStore } from "../../store/useToastStore";
import { ConfirmModal } from "./ConfirmModal";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: #2c323d;
  width: 400px;
  border-radius: 12px;
  overflow: hidden;
  color: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
`;

const Header = styled.div`
  background: #232830;
  padding: 16px;
  font-weight: bold;
  border-bottom: 1px solid #444;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Button = styled.button<{ $variant?: "danger" | "primary" }>`
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: none;
  background: ${({ $variant }) =>
    $variant === "danger" ? "#ff4d4f" : $variant === "primary" ? "#1890ff" : "#444"};
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: bold;
  &:hover {
    filter: brightness(1.1);
  }
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

const InputGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  background: #1e232b;
  border: 1px solid #555;
  color: white;
  border-radius: 6px;
  outline: none;
  &:focus {
    border-color: #1890ff;
  }
`;

const WORKER_URL = "https://dragonsword-map-db.shrill-art-2219.workers.dev/";

export const SettingsModal = ({ onClose }: { onClose: () => void }) => {
  const { customMarkers, resetCustomMarkers, importCustomMarkers } = useMapStore();
  const { addToast } = useToastStore();

  const [shareCode, setShareCode] = useState("");
  const [importCode, setImportCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);

  const handleExport = async () => {
    if (customMarkers.length === 0) {
      addToast("내보낼 커스텀 마커가 없습니다.", "error");
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch(`${WORKER_URL}/share`, {
        method: "POST",
        body: JSON.stringify({ markers: customMarkers }),
      });
      const data = await res.json();
      if (data.code) {
        setShareCode(data.code);
        navigator.clipboard.writeText(data.code);
        addToast(`코드(${data.code})가 복사되었습니다!`, "success");
      }
    } catch (e) {
      addToast("내보내기 실패. 네트워크를 확인하세요.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImport = async () => {
    if (!importCode.trim()) return;
    setIsLoading(true);
    try {
      const res = await fetch(`${WORKER_URL}/share?code=${importCode.trim()}`);
      if (!res.ok) throw new Error("Code not found");

      const markers = await res.json();
      if (Array.isArray(markers)) {
        importCustomMarkers(markers);
        addToast(`${markers.length}개의 마커를 불러왔습니다.`, "success");
        onClose();
      }
    } catch (e) {
      addToast("유효하지 않은 코드입니다.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetClick = () => {
    setIsResetConfirmOpen(true);
  };

  const executeReset = () => {
    resetCustomMarkers();
    addToast("모든 커스텀 마커가 초기화되었습니다.", "info");
    setIsResetConfirmOpen(false);
    onClose();
  };

  return (
    <>
      <Overlay onClick={onClose}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <Header>
            설정
            <CloseButton onClick={onClose}>
              <FaTimes size={20} />
            </CloseButton>
          </Header>
          <Content>
            <Section>
              {shareCode ? (
                <InputGroup>
                  <Input
                    value={shareCode}
                    readOnly
                    style={{ textAlign: "center", fontWeight: "bold", color: "#52c41a" }}
                  />
                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(shareCode);
                      addToast("코드가 복사되었습니다.", "success");
                    }}
                  >
                    <FaCopy /> 복사
                  </Button>
                </InputGroup>
              ) : (
                <Button onClick={handleExport} $variant="primary" disabled={isLoading}>
                  <FaUpload /> {isLoading ? "생성 중..." : "코드 생성 및 내보내기"}
                </Button>
              )}
            </Section>

            <hr style={{ width: "100%", borderColor: "#444", opacity: 0.3 }} />

            <Section>
              <InputGroup>
                <Input
                  placeholder="공유 코드 입력 (예: A1B2C3)"
                  value={importCode}
                  onChange={(e) => setImportCode(e.target.value.toUpperCase())}
                />
                <Button onClick={handleImport} disabled={isLoading}>
                  <FaDownload /> 불러오기
                </Button>
              </InputGroup>
            </Section>

            <hr style={{ width: "100%", borderColor: "#444", opacity: 0.3 }} />

            <Section>
              <Button onClick={handleResetClick} $variant="danger">
                <FaTrash /> 커스텀 마커 전체 초기화
              </Button>
            </Section>
          </Content>
        </Modal>
      </Overlay>
      <ConfirmModal
        isOpen={isResetConfirmOpen}
        title="⚠️ 초기화 확인"
        message="정말 모든 커스텀 마커를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다."
        onConfirm={executeReset}
        onCancel={() => setIsResetConfirmOpen(false)}
      />
    </>
  );
};
