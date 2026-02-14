import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { FaStar } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useMapStore } from "../store/useMapStore";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div`
  background: #2c323d;
  padding: 24px;
  border-radius: 12px;
  width: 300px;
  color: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h3`
  margin: 0;
  color: #fff;
  font-size: 18px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #555;
  background: #1e232b;
  color: white;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #4da6ff;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

const Button = styled.button<{ $variant?: "primary" | "secondary" }>`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background: ${(props) => (props.$variant === "primary" ? "#4caf50" : "#444")};
  color: ${(props) => (props.$variant === "primary" ? "white" : "#aaa")};

  &:hover {
    background: ${(props) => (props.$variant === "primary" ? "#43a047" : "#555")};
    color: white;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #555;
  background: #1e232b;
  color: white;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
  resize: none;
  height: 80px;
  font-family: inherit;

  &:focus {
    border-color: #4da6ff;
  }
`;

const ErrorMsg = styled.span`
  color: #ff4d4f;
  font-size: 12px;
  margin-top: -8px;
  margin-bottom: 8px;
  display: block;
`;

const markerSchema = z.object({
  label: z.string().min(1, "이름은 필수입니다.").max(20, "이름은 20자 이내여야 합니다."),
  description: z.string().max(100, "설명은 100자 이내여야 합니다.").optional(),
});

type MarkerFormValues = z.infer<typeof markerSchema>;

export function AddMarkerModal() {
  const { creatingMarkerPos, setCreatingMarkerPos, addCustomMarker } = useMapStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MarkerFormValues>({
    resolver: zodResolver(markerSchema),
  });

  if (!creatingMarkerPos) return null;

  const onSubmit = (data: MarkerFormValues) => {
    addCustomMarker({
      id: uuidv4(),
      type: "custom",
      label: data.label,
      description: data.description || "",
      position: creatingMarkerPos,
      icon: FaStar,
      isCustom: true,
    });

    handleClose();
  };

  const handleClose = () => {
    reset();
    setCreatingMarkerPos(null);
  };

  return (
    <Overlay onClick={handleClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <Title>새 마커 추가</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Input
              placeholder="마커 이름 (필수)"
              autoFocus
              {...register("label", { required: "이름을 입력해주세요." })}
            />
            {errors.label && <ErrorMsg>{errors.label.message}</ErrorMsg>}

            <TextArea placeholder="설명 (선택)" {...register("description")} />

            <ButtonGroup>
              <Button type="submit" $variant="primary">
                추가
              </Button>
              <Button type="button" onClick={handleClose}>
                취소
              </Button>
            </ButtonGroup>
          </div>
        </form>
      </ModalBox>
    </Overlay>
  );
}
