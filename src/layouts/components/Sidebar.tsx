import styled from "styled-components";

import { useMapStore } from "../../store/useMapStore";
import MapFilter from "../../features/map/components/MapFilter";

const SidebarContainer = styled.div`
  width: 300px;
  background-color: #000;
  border-right: 1px solid #444;
  display: flex;
  flex-direction: column;
  user-select: none;
`;

function Sidebar() {
  const { selectedFilters, toggleFilter } = useMapStore();

  return (
    <SidebarContainer>
      <MapFilter selectedFilters={selectedFilters} onToggleFilter={toggleFilter} />
    </SidebarContainer>
  );
}

export default Sidebar;
