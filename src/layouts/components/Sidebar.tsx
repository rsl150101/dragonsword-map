import styled, { css } from "styled-components";
import { FaChevronDown, FaChevronUp, FaExclamationTriangle, FaTimes } from "react-icons/fa";

import MapFilter from "../../features/map/components/MapFilter";
import { CopyrightInfo } from "./MobileCopyrightInfo";
import { useState } from "react";

const SidebarContainer = styled.div`
  width: 300px;
  background-color: #2c323d;
  border-right: 1px solid #1e2228;
  display: flex;
  flex-direction: column;
  user-select: none;
  height: 100%;
  color: #222;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FilterArea = styled.div`
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #3e4652;
    border-radius: 3px;
  }
`;

const CloseButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 10px;
  align-self: flex-end;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Footer = styled.div`
  padding: 20px 16px;
  background-color: #252a33;
  border-top: 1px solid #3e4652;
`;

const VersionBadge = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  color: #aeb9c6;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 6px;
  border-radius: 4px;
  margin-bottom: 8px;
  display: inline-block;
  letter-spacing: 0.5px;
`;

const MetaInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    position: relative;
    cursor: pointer;
    padding: 4px 0;
    margin-bottom: 0;
  }
`;

const UpdateDate = styled.span`
  font-size: 10px;
  color: #636e7b;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ExpandableContent = styled.div<{ $isExpanded: boolean }>`
  display: block;
  opacity: 1;
  max-height: 500px;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  @media (max-width: 768px) {
    ${({ $isExpanded }) =>
      !$isExpanded &&
      css`
        max-height: 0;
        opacity: 0;
        margin: 0;
        padding: 0;
      `}

    ${({ $isExpanded }) =>
      $isExpanded &&
      css`
        margin-bottom: 10px;
      `}
  }
`;

const MobileToggleIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    position: absolute;
    top: -10px;
    left: 50%;
    display: flex;
    align-items: center;
    color: #636e7b;
  }
`;

const InfoText = styled.p`
  margin: 0;
  color: #888;
  font-size: 12px;
  line-height: 1.5;
  word-break: keep-all;
`;

const WarningBox = styled.div`
  margin-top: 12px;
  padding: 10px;
  background: rgba(255, 171, 0, 0.1);
  border: 1px solid rgba(255, 171, 0, 0.2);
  border-radius: 6px;
  display: flex;
  gap: 10px;
  align-items: center;
  color: #ffab00;
  font-size: 11px;
  line-height: 1.4;
`;

const MobileHeaderWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
  }
  h2 {
    color: white;
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const MobileFooterWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Sidebar({ onClose }: { onClose?: () => void }) {
  const APP_VERSION = "v0.3.2-alpha";
  const LAST_UPDATE = "2026.02.06";

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SidebarContainer>
      <MobileHeaderWrapper>
        <h2>Dracarta</h2>
        {onClose && (
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>
        )}
      </MobileHeaderWrapper>
      <FilterArea>
        <MapFilter />
      </FilterArea>
      <Footer>
        <MetaInfoRow onClick={() => setIsExpanded(!isExpanded)}>
          <VersionBadge>{APP_VERSION}</VersionBadge>
          <UpdateDate>{LAST_UPDATE}</UpdateDate>
          <MobileToggleIcon>
            {isExpanded ? <FaChevronDown size={10} /> : <FaChevronUp size={10} />}
          </MobileToggleIcon>
        </MetaInfoRow>
        <ExpandableContent $isExpanded={isExpanded}>
          <InfoText>현재 개발 진행 중인 단계입니다.</InfoText>

          <WarningBox>
            <FaExclamationTriangle size={14} style={{ minWidth: "14px", marginTop: "2px" }} />
            <span>
              업데이트 과정에서 데이터가
              <br />
              유실되거나 수정될 수 있습니다.
            </span>
          </WarningBox>
        </ExpandableContent>

        <MobileFooterWrapper>
          <CopyrightInfo />
        </MobileFooterWrapper>
      </Footer>
    </SidebarContainer>
  );
}

export default Sidebar;
