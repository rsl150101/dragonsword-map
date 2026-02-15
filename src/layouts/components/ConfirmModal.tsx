import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div`
  background: #333;
  width: 320px;
  padding: 24px;
  border-radius: 12px;
  color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  border: 1px solid #555;
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

const Title = styled.h3`
  margin: 0 0 12px 0;
  font-size: 18px;
  color: #ff4d4f;
`;

const Message = styled.p`
  font-size: 14px;
  color: #ccc;
  line-height: 1.5;
  margin-bottom: 24px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button<{ $variant?: "danger" | "cancel" }>`
  padding: 10px 16px;
  border-radius: 6px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  background: ${({ $variant }) => ($variant === "danger" ? "#ff4d4f" : "#555")};
  color: white;

  &:hover {
    filter: brightness(1.1);
  }
`;

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onCancel}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <Title>{title}</Title>
        <Message>{message}</Message>
        <ButtonGroup>
          <Button onClick={onConfirm} $variant="danger">
            삭제
          </Button>
          <Button onClick={onCancel} $variant="cancel">
            취소
          </Button>
        </ButtonGroup>
      </ModalBox>
    </Overlay>
  );
};
