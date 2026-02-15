import { useState } from "react";
import styled from "styled-components";
import { ToastContainer } from "./ToastContainer";
import { FaCog } from "react-icons/fa";
import { SettingsModal } from "./SettingsModal";

const HeaderContainer = styled.header`
  height: 60px;
  background-color: #222;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid #444;
  user-select: none;
`;

const Logo = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  cursor: default;
`;

const Nav = styled.div`
  display: flex;
  gap: 15px;
  font-size: 0.9rem;
  cursor: pointer;
`;

const SettingButton = styled.button`
  background: none;
  border: none;
  color: #ccc;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  padding: 8px;
  border-radius: 4px;
  &:hover {
    background: #333;
    color: white;
  }
`;

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ToastContainer />
      <HeaderContainer>
        <Logo>Dracarta</Logo>
        <Nav>
          <SettingButton onClick={() => setIsModalOpen(true)}>
            <FaCog />
          </SettingButton>
        </Nav>
      </HeaderContainer>
      {isModalOpen && <SettingsModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Header;
