import styled from "styled-components";
import { FaExclamationTriangle } from "react-icons/fa";

import MapFilter from "../../features/map/components/MapFilter";

const SidebarContainer = styled.div`
  width: 300px;
  background-color: #2c323d;
  border-right: 1px solid #1e2228;
  display: flex;
  flex-direction: column;
  user-select: none;
  height: 100%;
  color: #222;
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
`;

const UpdateDate = styled.span`
  font-size: 10px;
  color: #636e7b;
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
  align-items: flex-start;
  color: #ffab00;
  font-size: 11px;
  line-height: 1.4;
`;

function Sidebar() {
  const APP_VERSION = "v0.1.0-alpha";
  const LAST_UPDATE = "2026.02.02";

  return (
    <SidebarContainer>
      <FilterArea>
        <MapFilter />
      </FilterArea>
      <Footer>
        <MetaInfoRow>
          <VersionBadge>{APP_VERSION}</VersionBadge>
          <UpdateDate>{LAST_UPDATE}</UpdateDate>
        </MetaInfoRow>
        <InfoText>현재 개발 진행 중인 단계입니다.</InfoText>

        <WarningBox>
          <FaExclamationTriangle size={14} style={{ minWidth: "14px", marginTop: "2px" }} />
          <span>
            업데이트 과정에서 데이터가
            <br />
            유실되거나 수정될 수 있습니다.
          </span>
        </WarningBox>
      </Footer>
    </SidebarContainer>
  );
}

export default Sidebar;
