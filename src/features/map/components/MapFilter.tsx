import { useState } from "react";
import styled, { css } from "styled-components";
import { FaCheck, FaChevronDown, FaChevronUp, FaRegSquare } from "react-icons/fa";
import { FILTER_DATA, type IFilterItem } from "../data/mapFilters";
import { useMapStore } from "../../../store/useMapStore";

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background: #2c323d;
  height: 100%;
  overflow-y: auto;
  user-select: none;
`;

const GlobalControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: #1976d2;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background 0.2s;

  &:hover {
    background: #1565c0;
  }
`;

const CategoryGroup = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #e0e0e0;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  user-select: none;

  &:hover {
    background: #d0d0d0;
  }
`;

const GridContainer = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 10px;

  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  padding: ${({ $isOpen }) => ($isOpen ? "10px" : "0 10px")};
  transition: all 0.3s ease-in-out;
  overflow: hidden;
`;

const FilterItemButton = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 4px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;

  ${({ $isActive }) =>
    $isActive
      ? css`
          background: #e3f2fd;
          border-color: #2196f3;
          color: #1565c0;
          opacity: 1;
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          font-weight: 600;
        `
      : css`
          background: transparent;
          color: #999;
          opacity: 0.6;
          filter: grayscale(100%);

          &:hover {
            opacity: 1;
            background: #f5f5f5;
            filter: grayscale(0%);
          }
        `}
`;

const ItemLabel = styled.span`
  font-size: 10px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

function MapFilter() {
  const { selectedFilters, toggleFilter, isAllVisible, setAllFilters } = useMapStore();
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set(FILTER_DATA.map((d) => d.category)),
  );

  const toggleCategory = (category: string) => {
    const newSet = new Set(openCategories);
    if (newSet.has(category)) {
      newSet.delete(category);
    } else {
      newSet.add(category);
    }
    setOpenCategories(newSet);
  };

  const renderIcon = (item: IFilterItem) => {
    const size = 24;

    if (typeof item.icon === "string") {
      return (
        <img
          src={item.icon}
          alt={item.label}
          style={{
            width: size,
            height: size,
            objectFit: "contain",
            display: "block",
          }}
        />
      );
    } else {
      const IconComponent = item.icon;

      return <IconComponent size={size} />;
    }
  };

  const isAllChecked = isAllVisible();

  const handleGlobalToggle = () => {
    const nextState = !isAllChecked;

    setAllFilters(nextState);

    if (nextState) {
      setOpenCategories(new Set(FILTER_DATA.map((d) => d.category)));
    } else {
      setOpenCategories(new Set());
    }
  };

  return (
    <FilterWrapper>
      <GlobalControl onClick={handleGlobalToggle}>
        <span>{isAllChecked ? "전체 해제" : "전체 선택"}</span>
        {isAllChecked ? <FaCheck size={16} /> : <FaRegSquare size={16} />}
      </GlobalControl>
      {FILTER_DATA.map((group) => {
        const isOpen = openCategories.has(group.category);

        return (
          <CategoryGroup key={group.category}>
            <CategoryHeader onClick={() => toggleCategory(group.category)}>
              <span>{group.category}</span>
              {isOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </CategoryHeader>

            <GridContainer $isOpen={isOpen}>
              {group.items.map((item) => {
                const isActive = selectedFilters.has(item.id);

                return (
                  <FilterItemButton
                    key={item.id}
                    $isActive={isActive}
                    onClick={() => toggleFilter(item.id)}
                    title={item.label}
                  >
                    {renderIcon(item)}
                    <ItemLabel>{item.label}</ItemLabel>
                  </FilterItemButton>
                );
              })}
            </GridContainer>
          </CategoryGroup>
        );
      })}
    </FilterWrapper>
  );
}

export default MapFilter;
