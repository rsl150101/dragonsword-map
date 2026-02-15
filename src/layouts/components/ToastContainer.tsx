import styled, { keyframes } from "styled-components";
import { useToastStore } from "../../store/useToastStore";

const slideIn = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const Container = styled.div`
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ToastItem = styled.div<{ $type: string }>`
  background: #333;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border-left: 5px solid
    ${({ $type }) => ($type === "error" ? "#ff4d4f" : $type === "success" ? "#52c41a" : "#1890ff")};
  animation: ${slideIn} 0.3s ease;
  font-size: 14px;
  min-width: 250px;
`;

export const ToastContainer = () => {
  const toasts = useToastStore((state) => state.toasts);
  return (
    <Container>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} $type={toast.type}>
          {toast.message}
        </ToastItem>
      ))}
    </Container>
  );
};
